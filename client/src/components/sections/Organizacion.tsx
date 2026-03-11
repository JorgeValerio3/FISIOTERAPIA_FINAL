
import { FadeIn } from '../ui/FadeIn';
import { Download, Users, Award, MapPin, ShieldCheck } from 'lucide-react';

export function Organizacion() {
    const sections = [
        {
            title: "Comité Directivo",
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            members: [
                { name: "Dr. Carlos Silva", role: "Presidente", country: "Brasil" },
                { name: "Lic. María Gómez", role: "Vicepresidenta", country: "Colombia" },
                { name: "Lic. Javier López", role: "Secretario General", country: "México" }
            ]
        },
        {
            title: "Fundadores",
            icon: <Award className="w-6 h-6 text-white" />,
            members: [
                { name: "Dra. Ana Reyes", role: "Miembro Honorario", country: "Argentina" },
                { name: "Lic. Roberto Paz", role: "Miembro Honorario", country: "Chile" }
            ]
        },
        {
            title: "Coordinadores Académicos",
            icon: <Users className="w-6 h-6 text-white" />,
            members: [
                { name: "Lic. Pedro Suárez", role: "Investigación", country: "Perú" },
                { name: "Dra. Elena Costa", role: "Educación Continua", country: "Uruguay" }
            ]
        },
        {
            title: "Coordinaciones Regionales",
            icon: <MapPin className="w-6 h-6 text-white" />,
            members: [
                { name: "Región Andina", role: "Representante Zonal", country: "" },
                { name: "Cono Sur", role: "Representante Zonal", country: "" },
                { name: "Centroamérica", role: "Representante Zonal", country: "" }
            ]
        }
    ];

    const handleDownload = () => {
        // Apunta al backend en Express para descargar el PDF
        window.open('http://localhost:5000/api/downloads/estatutos.pdf', '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="organizacion" className="py-24 bg-ufaal-gray">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <FadeIn direction="down">
                        <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">Estructura Organizativa</h2>
                        <div className="w-24 h-1 bg-ufaal-blue-light mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">
                            Transparencia Institucional y Liderazgo Académico
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {sections.map((section, index) => (
                        <FadeIn key={section.title} delay={0.2 + (index * 0.1)} direction="up">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
                                <div className="bg-ufaal-blue p-4 flex items-center gap-3">
                                    {section.icon}
                                    <h3 className="text-lg font-bold text-white">{section.title}</h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-4">
                                        {section.members.map((member, idx) => (
                                            <li key={idx} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                                <div>
                                                    <p className="font-semibold text-ufaal-text">{member.name}</p>
                                                    <p className="text-sm font-light text-gray-500">{member.role}</p>
                                                </div>
                                                {member.country && (
                                                    <span className="text-xs font-medium px-3 py-1 bg-ufaal-gray text-ufaal-blue-light rounded-full">
                                                        {member.country}
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.6} direction="up">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-ufaal-blue/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                        <div className="z-10 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-ufaal-blue mb-2">Estatutos Oficiales</h3>
                            <p className="text-gray-600 font-light max-w-md">
                                Conoce los reglamentos, objetivos y responsabilidades de nuestra organización.
                            </p>
                        </div>
                        <button
                            onClick={handleDownload}
                            className="z-10 px-8 py-3.5 bg-ufaal-blue text-white rounded-full font-medium hover:bg-ufaal-blue-light transition-all flex items-center gap-2 shadow-lg hover:shadow-xl shrink-0"
                        >
                            <Download className="w-5 h-5" />
                            Descargar Estatutos (PDF)
                        </button>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
