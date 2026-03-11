
import { FadeIn } from '../ui/FadeIn';
import { BookOpen, Laptop, Landmark } from 'lucide-react';

export function Formacion() {
    const formationItems = [
        {
            title: "Cursos Internacionales",
            icon: <Laptop className="w-8 h-8 text-ufaal-blue" />,
            desc: "Programas de educación continua avalados por expertos regionales en diversas especialidades de la rehabilitación."
        },
        {
            title: "Certificaciones Integrales",
            icon: <AwardIcon className="w-8 h-8 text-ufaal-blue" />,
            desc: "Avales clínicos en terapia acuática bajo estándares globales reconocidos por la WP."
        },
        {
            title: "Programas Educativos",
            icon: <BookOpen className="w-8 h-8 text-ufaal-blue" />,
            desc: "Módulos formativos para pregrado y posgrado buscando estandarizar el currículo académico latinoamericano."
        },
        {
            title: "Alianzas Universitarias",
            icon: <Landmark className="w-8 h-8 text-ufaal-blue" />,
            desc: "Convenios con instituciones de educación superior para el desarrollo de diplomados y especializaciones."
        }
    ];

    return (
        <section id="formacion" className="py-24 bg-white relative overflow-hidden">
            {/* Elemento de diseño de fondo */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-ufaal-gray z-0 hidden lg:block rounded-bl-[150px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-left mb-16 max-w-2xl">
                    <FadeIn direction="right">
                        <h2 className="text-3xl md:text-5xl font-bold text-ufaal-blue mb-6 tracking-tight">Formación Académica</h2>
                        <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-6"></div>
                        <p className="text-gray-600 font-light text-lg leading-relaxed">
                            El posicionamiento y crecimiento de la fisioterapia acuática require educación de vanguardia y excelencia. Brindamos plataformas para el desarrollo profesional.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {formationItems.map((item, index) => (
                        <FadeIn key={item.title} delay={0.2 + (index * 0.1)} direction="up">
                            <div className="flex gap-6 items-start p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-ufaal-blue-light/30 transition-all group">
                                <div className="p-4 bg-ufaal-gray rounded-xl group-hover:bg-ufaal-blue/5 transition-colors shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-ufaal-text mb-3">{item.title}</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101" />
            <path d="m10.172 13.828a4 4 0 0 1 5.656 0l4 4a4 4 0 0 1-5.656 5.656l-1.102-1.101" />
        </svg>
    );
}
