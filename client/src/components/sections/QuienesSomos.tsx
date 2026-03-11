
import { FadeIn } from '../ui/FadeIn';
import { Target, Eye, Heart, Globe, TestTube, Users, ShieldCheck, Lightbulb, HandHeart } from 'lucide-react';

export function QuienesSomos() {
    const valores = [
        {
            icon: <Globe className="w-6 h-6 text-ufaal-blue" />,
            title: "Colaboración intercultural",
            desc: "Promovemos la cooperación entre profesionales, instituciones y países de América Latina, valorando la diversidad cultural y el intercambio de conocimientos."
        },
        {
            icon: <TestTube className="w-6 h-6 text-ufaal-blue" />,
            title: "Excelencia académica y científica",
            desc: "Impulsamos la formación continua, la investigación y la actualización profesional para garantizar prácticas terapéuticas fundamentadas en evidencia científica."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-ufaal-blue" />,
            title: "Compromiso bioético",
            desc: "Actuamos con responsabilidad ética, respeto por los principios de la bioética y compromiso con el bienestar de los pacientes y las comunidades."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-ufaal-blue" />,
            title: "Innovación terapéutica",
            desc: "Fomentamos el desarrollo de nuevas estrategias, metodologías y tecnologías aplicadas a la fisioterapia acuática para mejorar los resultados clínicos."
        },
        {
            icon: <HandHeart className="w-6 h-6 text-ufaal-blue" />,
            title: "Respeto por la dignidad humana",
            desc: "Reconocemos el valor intrínseco de cada persona, promoviendo una atención centrada en el paciente, inclusiva y humanizada."
        },
        {
            icon: <Users className="w-6 h-6 text-ufaal-blue" />,
            title: "Transparencia y responsabilidad",
            desc: "Promovemos una gestión institucional clara, ética y responsable, basada en la confianza, la integridad y el compromiso profesional."
        }
    ];

    return (
        <section id="quienes-somos" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Intro: Quiénes Somos & Filosofía */}
                <div className="mb-24">
                    <FadeIn direction="up">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-extrabold text-ufaal-blue tracking-tight mb-8">Quiénes Somos</h2>
                            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">
                                La Unión de Fisioterapia Acuática de América Latina (UFAAL) es una organización que integra a profesionales, académicos e instituciones comprometidas con el desarrollo y la promoción de la fisioterapia acuática en la región latinoamericana.
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-6">
                                Nuestro propósito es fomentar la colaboración científica, la formación profesional y el intercambio de conocimientos, impulsando el crecimiento de la fisioterapia acuática como herramienta terapéutica basada en evidencia.
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                                UFAAL trabaja para fortalecer la educación, la investigación y la práctica clínica en el medio acuático, promoviendo la integración regional hispano parlante y el avance de la rehabilitación física en beneficio de la salud y la calidad de vida de las personas.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                <div className="mb-32">
                    <FadeIn direction="up" delay={0.2}>
                        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-5xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-ufaal-blue mb-8 text-center tracking-tight">Filosofía Institucional</h3>
                            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed columns-1 md:columns-2 gap-12">
                                <p>
                                    La Unión de Fisioterapia Acuática de América Latina (UFAAL) sustenta su filosofía en el principio de que el agua constituye un medio terapéutico de alto valor científico y humano para la rehabilitación, la prevención y la optimización de la función física.
                                </p>
                                <p>
                                    Nuestra visión filosófica se fundamenta en la integración del conocimiento científico, la práctica clínica basada en evidencia y la cooperación regional, promoviendo una fisioterapia acuática desarrollada bajo principios de excelencia profesional, ética, responsabilidad social y compromiso con la salud de las poblaciones.
                                </p>
                                <p>
                                    La UFAAL concibe la diversidad cultural, social y sanitaria de América Latina como una fuente de enriquecimiento para el intercambio de conocimientos y el crecimiento de la disciplina, fomentando el diálogo académico, la innovación terapéutica y la formación continua de los profesionales de la rehabilitación.
                                </p>
                                <p>
                                    A través del trabajo colaborativo entre países, instituciones académicas y profesionales de la salud, la Unión impulsa el fortalecimiento de la fisioterapia acuática como un campo especializado de la fisioterapia contemporánea, orientado a mejorar la funcionalidad, la calidad de vida y el bienestar de las personas en toda la región latinoamericana.
                                </p>
                                <p className="font-medium text-ufaal-blue break-inside-avoid">
                                    Nuestra filosofía se expresa en el compromiso permanente con la excelencia científica, la práctica ética y el desarrollo sostenible de la fisioterapia acuática, consolidando una comunidad profesional que trabaja de manera integrada para avanzar en la rehabilitación y la salud en América Latina.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Misión y Visión Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
                    <FadeIn direction="left" delay={0.3} className="h-full">
                        <div className="bg-gradient-to-br from-ufaal-blue to-blue-800 p-10 rounded-[2.5rem] h-full text-white shadow-xl hover:-translate-y-2 transition-transform duration-500">
                            <div className="bg-white/10 p-4 rounded-2xl w-fit mb-8 backdrop-blur-md">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 tracking-tight">Misión</h3>
                            <p className="text-white/90 leading-relaxed font-light text-lg">
                                Promover el desarrollo, fortalecimiento y posicionamiento de la fisioterapia acuática en América Latina, impulsando la educación continua, la investigación científica y la práctica profesional ética. La UFAAL fomenta la colaboración entre profesionales, instituciones y organizaciones de la región, respetando la diversidad cultural y contribuyendo al mejoramiento de la salud, la rehabilitación y la calidad de vida de las comunidades.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="right" delay={0.4} className="h-full">
                        <div className="bg-white p-10 rounded-[2.5rem] h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-500">
                            <div className="bg-blue-50 p-4 rounded-2xl w-fit mb-8">
                                <Eye className="w-10 h-10 text-ufaal-blue" />
                            </div>
                            <h3 className="text-3xl font-bold text-ufaal-blue mb-6 tracking-tight">Visión</h3>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                Ser una red latinoamericana de referencia internacional en fisioterapia acuática, reconocida por impulsar la formación especializada, la investigación científica y la práctica clínica basada en evidencia, promoviendo estándares de excelencia, responsabilidad social y compromiso bioético en el ámbito de la rehabilitación en el medio acuático.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Valores */}
                <div className="max-w-6xl mx-auto">
                    <FadeIn direction="up">
                        <div className="text-center mb-16">
                            <Heart className="w-12 h-12 text-ufaal-blue mx-auto mb-6" />
                            <h3 className="text-3xl md:text-5xl font-bold text-ufaal-blue tracking-tight">Nuestros Valores</h3>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {valores.map((card, index) => (
                            <FadeIn key={card.title} delay={0.1 + (index * 0.1)} direction="up" className="h-full">
                                <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-100 group">
                                    <div className="p-4 bg-gray-50 rounded-2xl inline-block mb-6 group-hover:bg-blue-50 transition-colors">
                                        {card.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h4>
                                    <p className="text-gray-600 font-light leading-relaxed text-sm">
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
