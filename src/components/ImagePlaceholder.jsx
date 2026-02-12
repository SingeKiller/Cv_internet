import './ImagePlaceholder.css';

function ImagePlaceholder({ src, alt, caption, size = 'medium' }) {
  return (
    <div className={`image-placeholder ${size}`}>
      {src ? (
        <img src={src} alt={alt || 'Image'} className="image-content" />
      ) : (
        <div className="placeholder-content">
          <svg
            className="placeholder-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <p className="placeholder-text">{alt || 'Image Placeholder'}</p>
        </div>
      )}
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  );
}

export default ImagePlaceholder;
