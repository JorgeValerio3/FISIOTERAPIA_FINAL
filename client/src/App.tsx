import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { QuienesSomos } from './components/sections/QuienesSomos';
import { Organizacion } from './components/sections/Organizacion';
import { Paises } from './components/sections/Paises';
import { Formacion } from './components/sections/Formacion';
import { Investigacion } from './components/sections/Investigacion';
import { Galeria } from './components/sections/Galeria';
import { Noticias } from './components/sections/Noticias';
import { Afiliacion } from './components/sections/Afiliacion';
import { Contacto } from './components/sections/Contacto';
import { Colaboradores } from './components/sections/Colaboradores';
import { Footer } from './components/layout/Footer';
import contentData from './data/content.json';

function ScrollToHash() {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = pathname.replace('/', '');
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-ufaal-gray font-sans selection:bg-ufaal-blue selection:text-white">
      <ScrollToHash />
      <Navbar data={contentData.navbar} />
      <main>
        <Hero data={contentData.hero} />
        <QuienesSomos data={contentData.quienes_somos} />
        <Organizacion data={contentData.organizacion} />
        <Paises data={contentData.paises} />
        <Formacion data={contentData.formacion} />
        <Investigacion data={contentData.investigacion} />
        <Galeria data={contentData.galeria} />
        <Noticias data={contentData.noticias} />
        <Afiliacion data={contentData.afiliacion} />
        <Contacto data={contentData.contacto} />
      </main>
      <Colaboradores data={contentData.colaboradores} />
      <Footer data={contentData.footer} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
