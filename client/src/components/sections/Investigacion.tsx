import { FadeIn } from '../ui/FadeIn';
import { FileText, Download, FileArchive, Search, Network, CheckCircle, File } from 'lucide-react';

export function Investigacion({ data }: { data: any }) {
    if (!data) return null;

    const categorias = data.categorias || [];

    const getIcon = (iconName: string) => {
        const i = String(iconName).toLowerCase();
        if (i.includes('archive') || i.includes('tecnico')) return <FileArchive className="w-6 h-6 text-ufaal-blue" />;
        if (i.includes('search') || i.includes('publica')) return <Search className="w-6 h-6 text-ufaal-blue" />;
        if (i.includes('text') || i.includes('guia')) return <FileText className="w-6 h-6 text-ufaal-blue" />;
        return <File className="w-6 h-6 text-ufaal-blue" />;
    };

    const handleDownload = (item: any) => {
        const url = item.archivo || item.enlace;
        if (url) {
            const finalUrl = url.startsWith('http') || url.startsWith('/') ? url : `http://localhost:5000${url}`;
            window.open(finalUrl, '_blank', 'noopener,noreferrer');
        } else {
            alert('El documento no tiene un enlace configurado.');
        }
    };

    return (
        <section id="investigacion" className="py-24 bg-ufaal-gray">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <FadeIn direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">{data.titulo}</h2>
                            <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-6"></div>
                            <p className="text-gray-600 font-light text-lg leading-relaxed">
                                {data.descripcion}
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
                    {categorias.map((resourceGroup: any, index: number) => (
                        <FadeIn key={resourceGroup.nombre || index} delay={0.3 + (index * 0.1)} direction="up" className="h-full">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col hover:border-ufaal-blue-light/30 transition-colors">

                                <div className="p-6 border-b border-gray-50 flex items-center gap-4 bg-gray-50/50">
                                    <div className="bg-white p-2 rounded-lg shadow-sm">
                                        {getIcon(resourceGroup.icono || resourceGroup.nombre)}
                                    </div>
                                    <h3 className="text-lg font-bold text-ufaal-text">{resourceGroup.nombre}</h3>
                                </div>

                                <div className="p-6 flex-grow flex flex-col gap-4">
                                    {resourceGroup.items?.map((item: any, idx: number) => (
                                        <div key={idx} className="group border border-gray-100 rounded-xl p-4 hover:bg-ufaal-blue/5 transition-colors cursor-pointer" onClick={() => handleDownload(item)}>
                                            <h4 className="text-sm font-medium text-gray-800 leading-snug mb-3 group-hover:text-ufaal-blue transition-colors title-min-h-small">
                                                {item.titulo}
                                            </h4>
                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded truncate max-w-[80px]">
                                                    {item.tipo || 'Enlace'}
                                                </span>
                                                <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-ufaal-blue transition-colors">
                                                    {item.tamaño || item.tamano || 'N/A'}
                                                    <Download className="w-3.5 h-3.5 shrink-0" />
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
