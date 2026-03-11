
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { QuienesSomos } from './components/sections/QuienesSomos';
import { Organizacion } from './components/sections/Organizacion';
import { Paises } from './components/sections/Paises';
import { Actividades } from './components/sections/Actividades';
import { Formacion } from './components/sections/Formacion';
import { Investigacion } from './components/sections/Investigacion';
import { Galeria } from './components/sections/Galeria';
import { Noticias } from './components/sections/Noticias';
import { Afiliacion } from './components/sections/Afiliacion';
import { Contacto } from './components/sections/Contacto';
import { Colaboradores } from './components/sections/Colaboradores';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ufaal-gray font-sans selection:bg-ufaal-blue selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <QuienesSomos />
        <Organizacion />
        <Paises />
        <Actividades />
        <Formacion />
        <Investigacion />
        <Galeria />
        <Noticias />
        <Afiliacion />
        <Contacto />
      </main>

      <Colaboradores />
      <Footer />
    </div>
  );
}

export default App;
