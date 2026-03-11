import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import { Login } from './components/admin/Login';
import { Dashboard } from './components/admin/Dashboard';

function LandingPage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading content:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ufaal-gray">
        <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-ufaal-blue"></div>
            <p className="text-gray-500 font-light">Cargando UFAAL...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error al cargar el contenido de la página.</div>;
  }

  return (
    <div className="min-h-screen bg-ufaal-gray font-sans selection:bg-ufaal-blue selection:text-white">
      <Navbar />
      <main>
        <Hero data={content.hero} />
        <QuienesSomos data={content.quienes_somos} />
        <Organizacion data={content.organizacion} />
        <Paises data={content.paises} />
        <Actividades data={content.actividades} />
        <Formacion data={content.formacion} />
        <Investigacion data={content.investigacion} />
        <Galeria data={content.galeria} />
        <Noticias data={content.noticias} />
        <Afiliacion data={content.afiliacion} />
        <Contacto data={content.contacto} />
      </main>
      <Colaboradores />
      <Footer />
    </div>
  );
}

function AdminRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('admin_token');
  return token ? children : <Navigate to="/admin/login" />;
}

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('admin_token'));

  const handleLogin = (newToken: string) => {
    setToken(newToken);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/admin/login" 
          element={token ? <Navigate to="/admin/dashboard" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
