
import { FadeIn } from '../ui/FadeIn';
import { FileText, Download, FileArchive, Search, Network, CheckCircle } from 'lucide-react';

export function Investigacion() {
    const resources = [
        {
            category: "Guías Clínicas",
            icon: <FileText className="w-6 h-6 text-ufaal-blue" />,
            items: [
                { title: "Protocolo UFAAL 2024: Manejo Acuático del Paciente Neurológico", type: "PDF", size: "2.4 MB" },
                { title: "Consenso Latinoamericano de Dosimetría en Hidroterapia", type: "PDF", size: "1.8 MB" }
            ]
        },
        {
            category: "Documentos Técnicos",
            icon: <FileArchive className="w-6 h-6 text-ufaal-blue" />,
            items: [
                { title: "Lineamientos Éticos para la Práctica Acuática en la Región", type: "PDF", size: "1.1 MB" },
                { title: "Requisitos de Infraestructura para Piscinas Terapéuticas", type: "Normativa", size: "3.5 MB" }
            ]
        },
        {
            category: "Últimas Publicaciones",
            icon: <Search className="w-6 h-6 text-ufaal-blue" />,
            items: [
                { title: "Impacto del método Halliwick en niños con parálisis cerebral: Revisión sistemática", type: "DOI", size: "Enlace externo" },
                { title: "Eficacia de la terapia acuática en dolor lumbar crónico en adultos mayores", type: "Artículo", size: "Revista SciELO" }
            ]
        }
    ];

    const handleDownload = (filename: string) => {
        if (filename === 'estatutos.pdf') {
            window.open('/docs/ESTATUTOS_UFAAL_Formato_Institucional_Editable.pdf', '_blank');
        } else {
            alert('El documento no existe o se encuentra en actualización.');
        }
    };

    return (
        <section id="investigacion" className="py-24 bg-ufaal-gray">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <FadeIn direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">Investigación y Ciencia</h2>
                            <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-6"></div>
                            <p className="text-gray-600 font-light text-lg leading-relaxed">
                                Fundamentamos nuestra práctica en la evidencia científica. Accede a nuestra biblioteca de publicaciones, guías clínicas y documentos oficiales.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2} direction="left" className="shrink-0 flex gap-4 hidden md:flex">
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm text-sm font-medium text-ufaal-blue border border-gray-100 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Declaraciones Oficiales
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm text-sm font-medium text-ufaal-blue border border-gray-100 flex items-center gap-2">
                            <Network className="w-4 h-4 text-ufaal-blue-light" />
                            Red de Colaboradores
                        </div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resourceGroup, index) => (
                        <FadeIn key={resourceGroup.category} delay={0.3 + (index * 0.1)} direction="up" className="h-full">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col hover:border-ufaal-blue-light/30 transition-colors">

                                <div className="p-6 border-b border-gray-50 flex items-center gap-4 bg-gray-50/50">
                                    <div className="bg-white p-2 rounded-lg shadow-sm">
                                        {resourceGroup.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-ufaal-text">{resourceGroup.category}</h3>
                                </div>

                                <div className="p-6 flex-grow flex flex-col gap-4">
                                    {resourceGroup.items.map((item, idx) => (
                                        <div key={idx} className="group border border-gray-100 rounded-xl p-4 hover:bg-ufaal-blue/5 transition-colors cursor-pointer" onClick={() => handleDownload('documento_ejemplo.pdf')}>
                                            <h4 className="text-sm font-medium text-gray-800 leading-snug mb-3 group-hover:text-ufaal-blue transition-colors title-min-h-small">
                                                {item.title}
                                            </h4>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                                    {item.type}
                                                </span>
                                                <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-ufaal-blue transition-colors">
                                                    {item.size}
                                                    <Download className="w-3.5 h-3.5" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}
