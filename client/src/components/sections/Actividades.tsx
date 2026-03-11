import { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Calendar, MapPin, TrendingUp, Award, Users, BookOpen, Presentation, Video, Globe } from 'lucide-react';

const categories = [
    "Todos",
    "Congresos",
    "Certificaciones",
    "Talleres",
    "Seminarios web",
    "Reuniones científicas",
    "Proyectos comunitarios"
];

const activitiesData = [
    {
        id: 1,
        title: "I Congreso Latinoamericano de Rehabilitación Acuática",
        category: "Congresos",
        date: "12-14 Noviembre, 2023",
        country: "Brasil",
        image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800",
        description: "Tres días de ponencias internacionales con expertos de WP y OIAPT abordando protocolos actualizados en neurología y ortopedia acuática.",
        impact: "+500 Asistentes de 12 países."
    },
    {
        id: 2,
        title: "Certificación Internacional en Terapia Específica en el Agua (WST)",
        category: "Certificaciones",
        date: "15-20 Mayo, 2024",
        country: "Colombia",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
        description: "Programa intensivo teórico-práctico de 50 horas enfocado en el concepto Halliwick para terapeutas físicos buscando la especialización clínica.",
        impact: "45 Nuevos especialistas certificados en la región andina."
    },
    {
        id: 3,
        title: "Taller Práctico: Estimulación Temprana Acuática",
        category: "Talleres",
        date: "05 Agosto, 2023",
        country: "México",
        image: "https://images.unsplash.com/photo-1519340241574-2c61ce34d3d3?auto=format&fit=crop&q=80&w=800",
        description: "Taller inmersivo de un día diseñado para fisioterapeutas pediatras buscando integrar el medio acuático en protocolos de intervención temprana.",
        impact: "150 familias beneficiadas indirectamente."
    },
    {
        id: 4,
        title: "Simposio Virtual: Evidencia Científica en Hidroterapia 2024",
        category: "Seminarios web",
        date: "22 Febrero, 2024",
        country: "Virtual",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        description: "Jornada gratuita de actualización bibliográfica con presentaciones de los últimos paper científicos publicados por el comité de investigación de UFAAL.",
        impact: "+1,200 profesionales conectados en Latinoamérica y España."
    },
    {
        id: 5,
        title: "Mesa Técnica de Trabajo UFAAL-WP",
        category: "Reuniones científicas",
        date: "10 Octubre, 2023",
        country: "Argentina",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        description: "Reunión de alto nivel con delegados de la World Physiotherapy para la estandarización de mallas curriculares universitarias en pregrado y posgrado.",
        impact: "Firma del primer Consenso Regional UFAAL 2024."
    },
    {
        id: 6,
        title: "Programa Piloto: Fisioterapia Acuática para Adultos Mayores",
        category: "Proyectos comunitarios",
        date: "Periodo 2023-2024",
        country: "Chile",
        image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=800",
        description: "Iniciativa gratuita desarrollada en alianza con municipios locales para promover el envejecimiento activo mediante ejercicios de bajo impacto en el agua.",
        impact: "7 Inserciones comunitarias con +200 adultos intervenidos."
    }
];

export function Actividades() {
    const [activeTab, setActiveTab] = useState("Todos");

    const filteredActivities = activeTab === "Todos"
        ? activitiesData
        : activitiesData.filter(item => item.category === activeTab);

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Congresos': return <Presentation className="w-5 h-5" />;
            case 'Certificaciones': return <Award className="w-5 h-5" />;
            case 'Talleres': return <Users className="w-5 h-5" />;
            case 'Seminarios web': return <Video className="w-5 h-5" />;
            case 'Reuniones científicas': return <BookOpen className="w-5 h-5" />;
            case 'Proyectos comunitarios': return <Globe className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <section id="actividades" className="py-24 bg-ufaal-gray/50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">Actividades Realizadas</h2>
                        <div className="w-24 h-1 bg-ufaal-blue-light mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">
                            Impulsamos el crecimiento académico y científico de la fisioterapia acuática mediante espacios de formación y cooperación técnica de alto impacto regional.
                        </p>
                    </FadeIn>
                </div>

                {/* Tabs Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category, index) => (
                        <FadeIn key={category} delay={0.1 + (index * 0.05)} direction="down">
                            <button
                                onClick={() => setActiveTab(category)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === category
                                    ? 'bg-ufaal-blue text-white shadow-md'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-ufaal-blue'
                                    }`}
                            >
                                {getCategoryIcon(category)}
                                {category}
                            </button>
                        </FadeIn>
                    ))}
                </div>

                {/* Activity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredActivities.map((activity, index) => (
                        <FadeIn key={activity.id} delay={0.2 + (index * 0.1)} direction="up">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full flex flex-col">
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-ufaal-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                    <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-ufaal-blue font-bold px-4 py-1.5 rounded-full text-xs shadow-sm flex items-center gap-1.5">
                                        {getCategoryIcon(activity.category)}
                                        {activity.category}
                                    </span>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between gap-4 mb-4 text-xs font-medium text-gray-400">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4 text-ufaal-blue-light" />
                                            {activity.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-ufaal-blue-light" />
                                            {activity.country}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-ufaal-text mb-4 leading-snug line-clamp-2 title-min-h">
                                        {activity.title}
                                    </h3>

                                    <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">
                                        {activity.description}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100 flex items-start gap-3 mt-auto">
                                        <TrendingUp className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-sm font-medium text-gray-800">
                                            <span className="text-gray-500 font-normal block mb-0.5">Impacto generado:</span>
                                            {activity.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {filteredActivities.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No se encontraron actividades en esta categoría.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
