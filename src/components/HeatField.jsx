import { useEffect, useRef } from "react";

const FOURIER = 0.24;
const COOLING = 0.0035;
const STEPS_PER_FRAME = 2;
const WARM_UP_STEPS = 180;
const ISOTHERMS = 7;

const STOPS = [
  [0.0, [8, 9, 14]],
  [0.1, [27, 12, 65]],
  [0.2, [74, 12, 107]],
  [0.3, [120, 28, 109]],
  [0.4, [165, 44, 96]],
  [0.5, [207, 68, 70]],
  [0.6, [237, 105, 37]],
  [0.7, [251, 155, 6]],
  [0.8, [247, 209, 61]],
  [1.0, [252, 255, 164]],
];

function buildPalette(size = 256) {
  const palette = new Uint8ClampedArray(size * 3);
  for (let i = 0; i < size; i++) {
    const t = i / (size - 1);
    let k = 0;
    while (k < STOPS.length - 2 && t > STOPS[k + 1][0]) k++;
    const [t0, c0] = STOPS[k];
    const [t1, c1] = STOPS[k + 1];
    const f = (t - t0) / (t1 - t0);
    for (let c = 0; c < 3; c++) palette[i * 3 + c] = c0[c] + (c1[c] - c0[c]) * f;
  }
  return palette;
}

export default function HeatField({ paused = false, still = false, className = "" }) {
  const canvasRef = useRef(null);
  const controlsRef = useRef(null);
  const pausedRef = useRef(paused);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const host = canvas.parentElement;
    const palette = buildPalette();

    let width = 0;
    let height = 0;
    let field = null;
    let buffer = null;
    let image = null;
    let frame = 0;
    let visible = true;
    let clock = 0;
    let lastPoint = null;

    function setup() {
      const rect = canvas.getBoundingClientRect();
      const columns = rect.width < 720 ? 110 : 180;
      width = columns;
      height = Math.max(48, Math.round((columns * rect.height) / Math.max(1, rect.width)));
      canvas.width = width;
      canvas.height = height;
      field = new Float32Array(width * height);
      buffer = new Float32Array(width * height);
      image = context.createImageData(width, height);
      for (let i = 3; i < image.data.length; i += 4) image.data[i] = 255;

      for (let s = 0; s < WARM_UP_STEPS; s++) {
        clock += 16;
        emit(clock);
        step();
      }
      draw();
    }

    function deposit(cx, cy, radius, amount) {
      const reach = radius * 2;
      const r2 = radius * radius;
      const x0 = Math.max(1, Math.floor(cx - reach));
      const x1 = Math.min(width - 2, Math.ceil(cx + reach));
      const y0 = Math.max(1, Math.floor(cy - reach));
      const y1 = Math.min(height - 2, Math.ceil(cy + reach));
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          const d2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
          field[y * width + x] += amount * Math.exp(-d2 / r2);
        }
      }
    }

    function emit(time) {
      const s = time * 0.001;
      const sources = [
        [0.72 + 0.2 * Math.sin(s * 0.31), 0.45 + 0.3 * Math.sin(s * 0.47 + 1)],
        [0.62 + 0.25 * Math.sin(s * 0.23 + 2), 0.6 + 0.28 * Math.cos(s * 0.36)],
        [0.86 + 0.09 * Math.cos(s * 0.41 + 4), 0.3 + 0.24 * Math.sin(s * 0.29 + 3)],
      ];
      for (const [nx, ny] of sources) deposit(nx * width, ny * height, 2.6, 0.22);
    }

    function step() {
      for (let y = 1; y < height - 1; y++) {
        const row = y * width;
        for (let x = 1; x < width - 1; x++) {
          const i = row + x;
          const laplacian = field[i - 1] + field[i + 1] + field[i - width] + field[i + width] - 4 * field[i];
          buffer[i] = (field[i] + FOURIER * laplacian) * (1 - COOLING);
        }
      }
      const swap = field;
      field = buffer;
      buffer = swap;
    }

    function draw() {
      const data = image.data;
      for (let i = 0, p = 0; i < field.length; i++, p += 4) {
        const u = field[i];
        const t = u > 0 ? 1 - Math.exp(-u * 0.9) : 0;
        const k = (t * 255) | 0;
        const shade = 0.9 + 0.1 * Math.cos(t * ISOTHERMS * 2 * Math.PI);
        data[p] = palette[k * 3] * shade;
        data[p + 1] = palette[k * 3 + 1] * shade;
        data[p + 2] = palette[k * 3 + 2] * shade;
      }
      context.putImageData(image, 0, 0);
    }

    function loop(time) {
      frame = 0;
      clock = time;
      emit(time);
      for (let s = 0; s < STEPS_PER_FRAME; s++) step();
      draw();
      frame = requestAnimationFrame(loop);
    }

    function start() {
      if (!frame && visible && !pausedRef.current && !still && !document.hidden) {
        frame = requestAnimationFrame(loop);
      }
    }

    function stop() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    }

    function toGrid(event) {
      const rect = canvas.getBoundingClientRect();
      return [((event.clientX - rect.left) / rect.width) * width, ((event.clientY - rect.top) / rect.height) * height];
    }

    function onPointerMove(event) {
      if (pausedRef.current || event.pointerType === "touch") return;
      const [x, y] = toGrid(event);
      if (lastPoint) {
        const dx = x - lastPoint[0];
        const dy = y - lastPoint[1];
        const count = Math.min(12, Math.ceil(Math.hypot(dx, dy) / 1.5));
        for (let k = 1; k <= count; k++) {
          deposit(lastPoint[0] + (dx * k) / count, lastPoint[1] + (dy * k) / count, 2.2, 0.32 / Math.max(1, count / 3));
        }
      }
      lastPoint = [x, y];
    }

    function onPointerLeave() {
      lastPoint = null;
    }

    function onPointerDown(event) {
      if (pausedRef.current) return;
      const [x, y] = toGrid(event);
      deposit(x, y, 4, 2.2);
    }

    setup();
    controlsRef.current = { start, stop };

    if (still) return undefined;

    host.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave);
    host.addEventListener("pointerdown", onPointerDown, { passive: true });

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    observer.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    let lastSize = [canvas.clientWidth, canvas.clientHeight];
    let resizeTimer = 0;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const size = [canvas.clientWidth, canvas.clientHeight];
        if (Math.abs(size[0] - lastSize[0]) > 40 || Math.abs(size[1] - lastSize[1]) > 120) {
          lastSize = size;
          setup();
        }
      }, 150);
    });
    resizeObserver.observe(canvas);

    start();

    return () => {
      stop();
      clearTimeout(resizeTimer);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      host.removeEventListener("pointerdown", onPointerDown);
    };
  }, [still]);

  useEffect(() => {
    pausedRef.current = paused;
    if (paused) controlsRef.current?.stop();
    else controlsRef.current?.start();
  }, [paused]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
