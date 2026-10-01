import { useCallback, useState } from "react";
import { useI18n } from "./i18n/I18nProvider.jsx";
import Header from "./components/Header.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Hero, { Metrics } from "./components/Hero.jsx";
import Profile from "./components/Profile.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ImageModal from "./components/ImageModal.jsx";

export default function App() {
  const { t } = useI18n();
  const [zoomedImage, setZoomedImage] = useState(null);
  const closeZoom = useCallback(() => setZoomedImage(null), []);

  return (
    <>
      <a className="skip-link" href="#contenu">
        {t.ui.skipLink}
      </a>
      <ScrollProgress />
      <Header />

      <main id="contenu" tabIndex={-1}>
        <Hero />
        <Metrics />
        <Profile />
        <Journey />
        <Education />
        <Skills />
        <Projects onZoom={setZoomedImage} />
        <Contact />
      </main>

      <Footer />
      <ImageModal image={zoomedImage} onClose={closeZoom} />
    </>
  );
}
