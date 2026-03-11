import { useState, useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ArrowRight, Bell, Calendar, X, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Noticias() {
    const news = [
        {
            id: 1,
            type: "Comunicado Oficial",
            typeIcon: <Bell className="w-4 h-4" />,
            title: "Nueva Alianza Estratégica con la Universidad del Sur para Diplomados 2024",
            date: "15 de Octubre, 2023",
            excerpt: "La UFAAL y la Universidad del Sur firman un convenio de cooperación técnica y académica para el desarrollo de la especialidad en fisioterapia acuática.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
            content: (
                <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                        La <strong>Unión Fisioterapéutica de América Latina (UFAAL)</strong> tiene el honor de anunciar la firma de una nueva alianza estratégica con la <strong>Universidad del Sur</strong>. Este acuerdo histórico marca un paso significativo en nuestro compromiso continuo con la excelencia académica y la profesionalización de la fisioterapia acuática en toda la región.
                    </p>
                    <h4 className="text-xl font-bold text-ufaal-blue mt-8 mb-4">Objetivos del Convenio</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Desarrollar e implementar programas de diplomado especializados y actualizados.</li>
                        <li>Fomentar el intercambio de conocimientos y recursos académicos entre ambas instituciones.</li>
                        <li>Proporcionar a los miembros de UFAAL acceso prioritario y becas parciales para estos nuevos programas.</li>
                        <li>Promover la investigación conjunta en el campo de la hidroterapia.</li>
                    </ul>
                    <p>
                        A partir del primer trimestre del 2024, lanzaremos el primer <strong>Diplomado en Terapia Acuática Avanzada</strong>. Este programa contará con módulos teóricos en línea y prácticas presenciales intensivas, impartidos por expertos internacionales de renombre.
                    </p>
                    <p>
                        Agradecemos a todos los miembros de la mesa directiva y a los representantes de la Universidad del Sur que hicieron posible este logro. Próximamente compartiremos de forma oficial el folleto informativo y los requisitos de postulación a través de nuestros canales oficiales.
                    </p>
                </div>
            )
        },
        {
            id: 2,
            type: "Evento Próximo",
            typeIcon: <Calendar className="w-4 h-4" />,
            title: "Asamblea General Anual UFAAL 2024 - Modalidad Híbrida",
            date: "20 de Noviembre, 2023",
            excerpt: "Convocatoria oficial para todos los representantes nacionales y miembros activos para la revisión de estatutos y plan operativo anual.",
            image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600",
            content: (
                <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                        De acuerdo con lo establecido en nuestros estatutos institucionales, se convoca a todos los delegados nacionales, miembros del comité ejecutivo y profesionales asociados a la <strong>Asamblea General Anual UFAAL 2024</strong>.
                    </p>
                    <div className="bg-ufaal-blue/5 p-6 rounded-xl border border-ufaal-blue/10 my-8">
                        <h4 className="font-bold text-ufaal-blue mb-4 text-lg">Detalles de la Convocatoria</h4>
                        <div className="space-y-3">
                            <p className="flex items-center gap-3"><Calendar className="w-5 h-5 text-ufaal-blue shrink-0" /> <strong>Fecha:</strong> Sábado, 25 de Enero de 2024</p>
                            <p className="flex items-center gap-3"><Bell className="w-5 h-5 text-ufaal-blue shrink-0" /> <strong>Hora:</strong> 09:00 AM (Hora Central)</p>
                            <p className="flex items-center gap-3"><Bell className="w-5 h-5 text-ufaal-blue shrink-0" /> <strong>Modalidad:</strong> Híbrida (Presencial en Ciudad de México / Transmisión vía Zoom)</p>
                        </div>
                    </div>
                    <h4 className="text-xl font-bold text-ufaal-blue mt-8 mb-4">Agenda Principal</h4>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Presentación del informe anual de gestión y estado financiero 2023.</li>
                        <li>Votación y aprobación del Plan Operativo Anual (POA) 2024.</li>
                        <li>Elección rotativa de vocales regionales y actualización de comitivas.</li>
                        <li>Mesas de trabajo: Revisión de propuestas para la estandarización de competencias básicas.</li>
                    </ol>
                    <p>
                        La participación activa de nuestras representaciones es vital para el fortalecimiento de nuestra asociación. El enlace de registro para la participación remota y los documentos base de la asamblea serán enviados a los correos institucionales registrados en los próximos días. Esté atento a su bandeja de entrada.
                    </p>
                </div>
            )
        },
        {
            id: 3,
            type: "Logro Institucional",
            typeIcon: <Bell className="w-4 h-4" />,
            title: "Publicación del Primer Consenso Latinoamericano de Hidroterapia",
            date: "05 de Septiembre, 2023",
            excerpt: "El comité de investigación de la Unión celebra la publicación en la revista indexada de rehabilitación médica del documento base regional.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
            content: (
                <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                        Es con gran orgullo que anunciamos un hito trascendental para la fisioterapia en nuestra región: la publicación oficial del <strong>Primer Consenso Latinoamericano de Hidroterapia y Terapias Acuáticas</strong> en la prestigiosa <em>Revista Iberoamericana de Rehabilitación Médica</em>.
                    </p>
                    <p>
                        Este documento representa más de dos años de trabajo exhaustivo, revisiones sistemáticas y debates científicos estructurados por parte del Comité de Investigación de UFAAL, en conjunto con 45 expertos clínicos y académicos de 12 países diferentes. Nuestro objetivo siempre ha sido elevar el estándar de nuestra práctica clínica.
                    </p>
                    <h4 className="text-xl font-bold text-ufaal-blue mt-8 mb-4">Puntos Clave del Documento</h4>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Unificación de la terminología clínica a nivel regional para estandarizar la comunicación entre profesionales.</li>
                        <li>Establecimiento de las contraindicaciones absolutas y relativas fundamentadas en la evidencia científica actual más rigurosa.</li>
                        <li>Guías de ratios paciente-terapeuta sugeridos, ajustados según niveles de complejidad neurológica y motora.</li>
                        <li>Protocolos de bioseguridad e higiene estandarizados para el mantenimiento y uso de piscinas terapéuticas, asegurando el bienestar de los pacientes.</li>
                    </ul>
                    <div className="bg-green-50 text-green-800 p-5 rounded-xl border border-green-200 mt-6 font-medium">
                        El acceso al documento completo es de carácter gratuito (Open Access) para promover la diseminación del conocimiento clínico basado en evidencia y garantizar que todos los profesionales puedan beneficiarse de este esfuerzo colectivo.
                    </div>
                    <p className="mt-6">
                        Este logro no solo profesionaliza nuestro gremio, sino que posiciona a Latinoamérica como un referente mundial activo en la producción científica sobre terapias en el medio acuático. Agradecemos profundamente a cada uno de los autores colaboradores por su dedicación inquebrantable a nuestra profesión.
                    </p>
                </div>
            )
        }
    ];

    const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);
    const [showAllNews, setShowAllNews] = useState(false);

    // Bloquear scroll al abrir modales
    useEffect(() => {
        if (selectedNews || showAllNews) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedNews, showAllNews]);

    return (
        <section id="noticias" className="py-24 bg-ufaal-gray/50 relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <FadeIn direction="up">
                            <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">Noticias y Actualidad</h2>
                            <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-6"></div>
                            <p className="text-gray-600 font-light text-lg leading-relaxed">
                                Mantente informado sobre los últimos comunicados institucionales y convocatorias de la región.
                            </p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.2} direction="left" className="shrink-0 hidden md:block">
                        <button
                            onClick={() => setShowAllNews(true)}
                            className="text-ufaal-blue font-semibold flex items-center gap-2 hover:text-ufaal-blue-light transition-colors group"
                        >
                            Ver todas las noticias
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <FadeIn key={item.id} delay={0.3 + (index * 0.1)} direction="up" className="h-full">
                            <div
                                onClick={() => setSelectedNews(item)}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                    <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm text-ufaal-blue font-bold px-3 py-1.5 rounded-md text-xs shadow-sm flex items-center gap-1.5">
                                        {item.typeIcon}
                                        {item.type}
                                    </div>
                                    <div className="absolute inset-0 bg-ufaal-blue/0 group-hover:bg-ufaal-blue/20 transition-colors duration-300 z-10" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-sm font-medium text-gray-400 mb-3">{item.date}</p>

                                    <h3 className="text-xl font-bold text-ufaal-text mb-4 leading-snug group-hover:text-ufaal-blue transition-colors title-min-h-small">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {item.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <span className="text-ufaal-blue-light text-sm font-semibold flex items-center gap-1.5 group/link">
                                            Leer más
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Botón para pantallas pequeñas */}
                <div className="mt-12 flex justify-center md:hidden">
                    <button
                        onClick={() => setShowAllNews(true)}
                        className="bg-white border border-gray-200 text-ufaal-blue px-6 py-3 rounded-full shadow-sm font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors group"
                    >
                        Ver todas las noticias
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>

            {/* Modal de Detalle de Noticia */}
            <AnimatePresence>
                {selectedNews && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedNews(null)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
                            className="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative z-10"
                        >
                            <button
                                onClick={() => setSelectedNews(null)}
                                className="absolute top-4 right-4 z-30 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 backdrop-blur-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative h-56 sm:h-72 shrink-0">
                                <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="bg-ufaal-blue text-white font-bold px-3 py-1.5 rounded-md text-xs shadow-sm flex items-center gap-1.5">
                                            {selectedNews.typeIcon}
                                            {selectedNews.type}
                                        </span>
                                        <span className="text-white/90 text-sm font-medium">{selectedNews.date}</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                                        {selectedNews.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-6 sm:p-10 overflow-y-auto bg-gray-50/50">
                                <div className="max-w-3xl mx-auto">
                                    {selectedNews.content}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Modal de Todas las Noticias (Pantalla Completa) */}
            <AnimatePresence>
                {showAllNews && (
                    <motion.div
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.7 }}
                        className="fixed inset-0 z-[100] bg-ufaal-gray overflow-y-auto"
                    >
                        <div className="bg-white py-6 px-6 sm:px-12 shadow-sm sticky top-0 z-20 flex justify-between items-center border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-ufaal-blue">Archivo de Noticias</h2>
                            <button
                                onClick={() => setShowAllNews(false)}
                                className="text-gray-500 hover:text-ufaal-blue hover:bg-gray-100 p-2 rounded-full transition-colors flex items-center gap-2"
                            >
                                <span className="font-semibold text-sm hidden sm:block">Volver</span>
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="max-w-5xl mx-auto py-12 px-6">
                            <div className="space-y-8">
                                {news.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow cursor-pointer group"
                                        onClick={() => {
                                            setSelectedNews(item);
                                        }}
                                    >
                                        <div className="md:w-1/3 shrink-0 rounded-xl overflow-hidden relative h-48 md:h-auto">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                            <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm text-ufaal-blue font-bold px-2 py-1 rounded-md text-[10px] shadow-sm flex items-center gap-1">
                                                {item.typeIcon}
                                                {item.type}
                                            </div>
                                        </div>

                                        <div className="flex flex-col flex-grow justify-center">
                                            <p className="text-sm font-medium text-gray-400 mb-2">{item.date}</p>
                                            <h3 className="text-2xl font-bold text-ufaal-text mb-4 group-hover:text-ufaal-blue transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {item.excerpt}
                                            </p>
                                            <div className="mt-auto flex justify-end">
                                                <span className="text-ufaal-blue-light font-semibold flex items-center gap-1.5 group-hover:underline">
                                                    Leer artículo completo
                                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-16 text-center">
                                <p className="text-gray-400">Has llegado al final del archivo.</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
