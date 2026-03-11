import { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Mail, Phone } from 'lucide-react';

// Solución rápida para iconos de Leaflet en React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const countriesData = [
    {
        id: "ar",
        name: "Argentina",
        flag: "🇦🇷",
        coords: [-34.6037, -58.3816] as [number, number],
        rep: {
            name: "Lic. Martina Suárez",
            photo: "https://i.pravatar.cc/150?u=m_suarez",
            profile: "Especialista en neurorrehabilitación acuática con más de 15 años de experiencia. Investigadora destacada en la Universidad Nacional y coordinadora de programas de formación continua en terapia acuática para la región sur. Autora de múltiples artículos sobre los beneficios del medio acuático en pacientes con lesiones modulares.",
            contact: "argentina@ufaal.org",
            phone: "+54 9 11 1234-5678"
        }
    },
    {
        id: "br",
        name: "Brasil",
        flag: "🇧🇷",
        coords: [-15.7801, -47.9292] as [number, number],
        rep: {
            name: "Dr. Carlos Silva",
            photo: "https://i.pravatar.cc/150?u=c_silva",
            profile: "Pionero en la implementación de protocolos de rehabilitación acuática en hospitales de alta complejidad en São Paulo. Docente investigador y Presidente del comité directivo de UFAAL, impulsando la estandarización de prácticas clínicas basadas en la evidencia en toda Latinoamérica.",
            contact: "brasil@ufaal.org",
            phone: "+55 11 98765-4321"
        }
    },
    {
        id: "mx",
        name: "México",
        flag: "🇲🇽",
        coords: [19.4326, -99.1332] as [number, number],
        rep: {
            name: "Lic. Javier López",
            photo: "https://i.pravatar.cc/150?u=j_lopez",
            profile: "Fisioterapeuta enfocado en ortopedia y pediatría acuática. Posee certificaciones internacionales Watsu y Halliwick. Dirige uno de los centros de fisioterapia acuática más innovadores en la Ciudad de México. Trabaja activamente en la inclusión de terapias acuáticas en el sistema de salud público.",
            contact: "mexico@ufaal.org",
            phone: "+52 55 1234 5678"
        }
    },
    {
        id: "co",
        name: "Colombia",
        flag: "🇨🇴",
        coords: [4.6097, -74.0817] as [number, number],
        rep: {
            name: "Lic. María Gómez",
            photo: "https://i.pravatar.cc/150?u=m_gomez",
            profile: "Experta en acondicionamiento acuático para deportistas de alto rendimiento. Participó en la creación del manual latinoamericano de fisioterapia preventiva en piscinas terapéuticas. Gran promotora de alianzas universitarias para la docencia en hidroterapia en la región andina.",
            contact: "colombia@ufaal.org",
            phone: "+57 300 123 4567"
        }
    }
];

export function Paises() {
    const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);

    return (
        <section id="paises" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">Miembros y Países</h2>
                        <div className="w-24 h-1 bg-ufaal-blue-light mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">
                            Identidad Latinoamericana. Explora los representantes e instituciones que conforman nuestra red regional.
                        </p>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Mapa Interactivo */}
                    <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[500px] z-10">
                        <FadeIn delay={0.2} direction="left" className="h-full w-full">
                            <MapContainer
                                center={[-10, -60]}
                                zoom={3}
                                scrollWheelZoom={false}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {countriesData.map((country) => (
                                    <Marker
                                        key={country.id}
                                        position={country.coords}
                                        eventHandlers={{
                                            click: () => setSelectedCountry(country)
                                        }}
                                    >
                                        <Popup>
                                            <div className="text-center">
                                                <span className="text-xl ml-1">{country.flag}</span>
                                                <p className="font-bold text-ufaal-blue mt-1">{country.name}</p>
                                                <p className="text-xs text-gray-500 mt-1 cursor-pointer underline">Ver perfil completo</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </FadeIn>
                    </div>

                    {/* Ficha del País Acordeón */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-4">
                        <FadeIn delay={0.4} direction="right">
                            <div className="bg-ufaal-gray rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-ufaal-blue/5 rounded-bl-full -z-0"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-5xl drop-shadow-sm">{selectedCountry.flag}</span>
                                        <h3 className="text-3xl font-bold text-ufaal-blue">{selectedCountry.name}</h3>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6 mb-8">
                                        <img
                                            src={selectedCountry.rep.photo}
                                            alt={selectedCountry.rep.name}
                                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                            loading="lazy"
                                        />
                                        <div>
                                            <h4 className="text-xl font-bold text-ufaal-text mb-1">{selectedCountry.rep.name}</h4>
                                            <p className="text-sm font-medium text-ufaal-blue-light mb-4">Representante Nacional</p>
                                            <p className="text-gray-600 font-light text-sm leading-relaxed text-justify">
                                                {selectedCountry.rep.profile}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-50">
                                        <h5 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">Contacto Institucional</h5>
                                        <div className="flex flex-col gap-3">
                                            <a href={`mailto:${selectedCountry.rep.contact}`} className="flex items-center gap-3 text-gray-600 hover:text-ufaal-blue transition-colors text-sm">
                                                <Mail className="w-5 h-5 text-ufaal-blue-light" />
                                                {selectedCountry.rep.contact}
                                            </a>
                                            <p className="flex items-center gap-3 text-gray-600 text-sm">
                                                <Phone className="w-5 h-5 text-ufaal-blue-light" />
                                                {selectedCountry.rep.phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Switcher para móvil - Lista rápida de botones */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-xs text-center text-gray-500 mb-4 font-medium uppercase tracking-widest">Selecciona otro país</p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {countriesData.map(c => (
                                            <button
                                                key={c.id}
                                                onClick={() => setSelectedCountry(c)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
                          ${selectedCountry.id === c.id
                                                        ? 'bg-ufaal-blue text-white shadow-md'
                                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
                                            >
                                                {c.flag} {c.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
