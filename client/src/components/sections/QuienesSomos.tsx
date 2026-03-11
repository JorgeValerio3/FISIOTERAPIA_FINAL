
import { FadeIn } from '../ui/FadeIn';
import { Target, Eye, Heart, Clock } from 'lucide-react';

export function QuienesSomos() {
    const cards = [
        {
            icon: <Clock className="w-8 h-8 text-ufaal-blue" />,
            title: "Historia",
            desc: "Surgimos como una iniciativa de articulación regional ante la necesidad de consolidar un espacio formal de cooperación técnica y estandarización de buenas prácticas."
        },
        {
            icon: <Target className="w-8 h-8 text-ufaal-blue" />,
            title: "Misión",
            desc: "Promover la integración latinoamericana como eje estratégico para elevar la calidad de la rehabilitación acuática, fomentando la educación continua y la ética profesional."
        },
        {
            icon: <Eye className="w-8 h-8 text-ufaal-blue" />,
            title: "Visión",
            desc: "Ser un espacio de liderazgo científico, integración regional y proyección internacional, posicionando a la fisioterapia acuática de América Latina en escenarios globales."
        },
        {
            icon: <Heart className="w-8 h-8 text-ufaal-blue" />,
            title: "Valores",
            desc: "Ética, rigor científico, cooperación interinstitucional, integración regional y responsabilidad social."
        }
    ];

    return (
        <section id="quienes-somos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">Quiénes Somos</h2>
                        <div className="w-24 h-1 bg-ufaal-blue-light mx-auto rounded-full"></div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Official Text Column */}
                    <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
                        <FadeIn delay={0.1} direction="left">
                            <p>
                                <strong className="text-ufaal-blue font-semibold">La Unión de Fisioterapia Acuática de América Latina (UFAAL)</strong> es una organización científica regional que integra a profesionales, académicos e instituciones comprometidas con el desarrollo, fortalecimiento y posicionamiento de la fisioterapia acuática en el ámbito clínico, académico y comunitario en América Latina.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} direction="left">
                            <p>
                                Surge como una iniciativa de articulación regional ante la necesidad de consolidar un espacio formal de cooperación técnica, intercambio de conocimientos y estandarización de buenas prácticas basadas en la evidencia científica. La Unión promueve la integración latinoamericana como eje estratégico para elevar la calidad de la rehabilitación acuática y fortalecer la representación de la región en escenarios internacionales.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="left">
                            <p>
                                La Unión forma parte de la <strong>Organización Internacional de Fisioterapeutas Acuáticos (OIAPT)</strong>, grupo especializado reconocido como subgrupo oficial de <strong>World Physiotherapy (WP)</strong>, organismo mundial que representa a la profesión a nivel global. En este marco, la Unión actúa como estructura regional de coordinación, promoviendo los lineamientos científicos, éticos y profesionales establecidos por la comunidad internacional de la fisioterapia.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="left">
                            <p>
                                Nuestra organización funciona como plataforma de articulación académica y científica, fomentando la educación continua, la generación de documentos técnicos y el desarrollo de programas formativos que contribuyen al crecimiento profesional de los fisioterapeutas acuáticos en América Latina. Está conformada por representantes nacionales, comités técnicos y profesionales especializados que trabajan bajo principios de ética, rigor científico, cooperación interinstitucional, integración regional y responsabilidad social.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.5} direction="left">
                            <p className="font-medium text-ufaal-blue-light border-l-4 border-ufaal-blue-light pl-4 py-2 bg-gray-50 rounded-r-lg">
                                La Unión de Fisioterapia Acuática de América Latina (UFAAL) constituye un espacio de liderazgo científico, integración regional y proyección internacional, orientado al fortalecimiento de la fisioterapia acuática como área especializada dentro de la profesión.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Cards Column */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {cards.map((card, index) => (
                            <FadeIn key={card.title} delay={0.2 + (index * 0.1)} direction="right" className="h-full">
                                <div className="bg-ufaal-gray p-8 rounded-2xl h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                                    <div className="p-4 bg-white rounded-xl inline-block mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-ufaal-blue mb-4">{card.title}</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
