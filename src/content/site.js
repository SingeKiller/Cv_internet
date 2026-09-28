export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const site = {
  name: "Olivier Repauzet",
  email: "olivier.repauzet@gmail.com",
  phone: {
    display: "+33 6 28 56 51 09",
    href: "tel:+33628565109",
  },
  location: "Bordeaux, France",
  linkedin: {
    label: "linkedin.com/in/olivier-repauzet",
    url: "https://www.linkedin.com/in/olivier-repauzet-7076aa310",
  },
  github: {
    label: "github.com/SingeKiller",
    url: "https://github.com/SingeKiller",
  },
  repoUrl: "https://github.com/SingeKiller/Cv_internet",
  cvUrl: asset("ressources/CV_Olivier_Repauzet.pdf"),
  references: [
    { name: "Lisl Weynans", email: "lisl.weynans@u-bordeaux.fr" },
    { name: "Michael Leguèbe", email: "michael.leguebe@u-bordeaux.fr" },
  ],
};

export const links = {
  mitoReport: asset("ressources/rapport_calibration_mitochondrie.pdf"),
  bertramPaper: "https://www.math.fsu.edu/~bertram/papers/beta/simpleMK.pdf",
  heatAssignment: asset("ressources/edo_chaleur.pdf"),
  climateRepo: "https://github.com/SingeKiller/stats-climat-bordeaux",
  climateData: "https://www.data.gouv.fr/fr/datasets/donnees-climatologiques-de-base-quotidiennes/",
};

export const media = {
  universityLogo: asset("ressources/logo-universite-bordeaux.png"),
  mitoCalibration: asset("ressources/calibration_14h16_o2_comparison_14p0_20p68.png"),
  mitoCalciumPulses: asset("ressources/resultats_graph13.png"),
  rk4Validation: asset("ressources/rk4_validation.png"),
  heatScreenshot: asset("ressources/edo_image.png"),
  heatVideo: asset("ressources/edo_video.mp4"),
  climateFigures: {
    residus: asset("ressources/climat/diagnostic-residus.png"),
    normales: asset("ressources/climat/comparaison-normales.png"),
    chaleur: asset("ressources/climat/jours-chauds.png"),
    voisines: asset("ressources/climat/comparaison-voisines.png"),
  },
};
