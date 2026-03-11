import { FadeIn } from '../ui/FadeIn';
import { Download, Users, Award, MapPin, ShieldCheck } from 'lucide-react';

export function Organizacion({ data }: { data: any }) {
    if (!data) return null;

    const icons = [
        <ShieldCheck className="w-6 h-6 text-white" />,
        <Award className="w-6 h-6 text-white" />,
        <Users className="w-6 h-6 text-white" />,
        <MapPin className="w-6 h-6 text-white" />
    ];

    const handleDownload = () => {
        if (data.estatutos_pdf) {
            window.open(data.estatutos_pdf.startsWith('http') || data.estatutos_pdf.startsWith('/') ? data.estatutos_pdf : `http://localhost:5000${data.estatutos_pdf}`, '_blank', 'noopener,noreferrer');
        } else {
            console.error("No se encontró el PDF de estatutos");
        }
    };

    return (
        <section id="organizacion" className="py-24 bg-ufaal-gray">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <FadeIn direction="down">
                        <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">
                            {data.titulo}
                        </h2>
                        <div className="w-24 h-1 bg-ufaal-blue-light mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">
                            {data.descripcion}
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {data.secciones?.map((section: any, index: number) => (
                        <FadeIn key={section.title || index} delay={0.2 + (index * 0.1)} direction="up">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                                <div className="bg-ufaal-blue p-4 flex items-center gap-3">
                                    {icons[index % icons.length]}
                                    <h3 className="text-lg font-bold text-white">{section.title}</h3>
                                </div>
                                <div className="p-6 flex-1">
                                    <ul className="space-y-4">
                                        {section.members?.map((member: any, idx: number) => (
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
