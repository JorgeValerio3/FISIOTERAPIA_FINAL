import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { QuienesSomos } from './components/sections/QuienesSomos';
import { Historia } from './components/sections/Historia';
import { Organizacion } from './components/sections/Organizacion';
import { Paises } from './components/sections/Paises';
import { Formacion } from './components/sections/Formacion';
import { Investigacion } from './components/sections/Investigacion';
import { Galeria } from './components/sections/Galeria';
import { Noticias } from './components/sections/Noticias';
import { Contacto } from './components/sections/Contacto';
import contentData from './data/content.json';

// Pages
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';
import FAQ from './pages/FAQ';
import ContactoPage from './pages/ContactoPage';
import SedeVirtual from './pages/SedeVirtual';

function ScrollToHash() {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.replace('/', '');
    if (id && id !== 'privacidad' && id !== 'terminos' && id !== 'faq' && id !== 'contacto-soporte') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <>
      <ScrollToHash />
      <Hero data={contentData.hero} />
      <QuienesSomos data={contentData.quienes_somos} />
      <Historia data={contentData.historia} />
      <Organizacion data={contentData.organizacion} />
      <Paises data={contentData.paises} />
      <Formacion data={contentData.formacion} />
      <Investigacion data={contentData.investigacion} />
      <Galeria data={contentData.galeria} />
      <Noticias data={contentData.noticias} />
      <Contacto data={contentData.contacto} />
    </>
  );
}

import { I18nProvider, useI18n } from './contexts/I18nContext';
import { GlobalLoader } from './components/ui/GlobalLoader';

function MainContent() {
  const { isLoading } = useI18n();

  return (
    <>
      {isLoading && <GlobalLoader />}
      <Layout>
        <Routes>
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/sede-virtual" element={<SedeVirtual />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <I18nProvider>
        <MainContent />
      </I18nProvider>
    </Router>
  );
}

export default App;
