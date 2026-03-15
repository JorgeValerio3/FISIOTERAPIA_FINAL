import { useState } from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { clsx } from 'clsx';

const faqs = [
    {
        question: "¿Cómo puedo afiliarme a UFAAL?",
        answer: "La afiliación se realiza a través de los delegados nacionales de cada país. Puede contactar al representante de su región en la sección de 'Países Miembros' o enviarnos un correo electrónico a ufaal2020@gmail.com solicitando información sobre los requisitos específicos para su país."
    },
    {
        question: "¿UFAAL ofrece certificaciones internacionales?",
        answer: "Sí, UFAAL, en colaboración con el área de Formación y docentes internacionales certificados, organiza programas de capacitación por niveles. Estas formaciones están alineadas con los estándares de la IOAPT y World Physiotherapy."
    },
    {
        question: "¿Tienen convenios con universidades?",
        answer: "Actualmente trabajamos en estrecha colaboración con diversas instituciones académicas líderes en América Latina para promover la investigación y la inclusión de la fisioterapia acuática en los planes de estudio de pregrado y posgrado."
    },
    {
        question: "¿Quiénes pueden participar en los congresos de UFAAL?",
        answer: "Nuestros eventos están abiertos a fisioterapeutas, kinesiólogos, estudiantes de último año y profesionales de la salud interesados en la rehabilitación acuática. Los miembros afiliados disfrutan de beneficios y descuentos exclusivos en las inscripciones."
    },
    {
        question: "¿Cómo puedo publicar una investigación en su repositorio?",
        answer: "Si usted tiene un trabajo de investigación original relacionado con la fisioterapia acuática, puede enviarlo a nuestro Eje de Investigación Científica para revisión. Una vez validado por el comité, podrá ser publicado en nuestra plataforma digital."
    }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-gray-100 last:border-0 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between gap-4 text-left hover:text-ufaal-blue transition-colors group"
            >
                <span className={clsx("text-lg font-medium transition-colors", isOpen ? "text-ufaal-blue" : "text-ufaal-text")}>
                    {question}
                </span>
                <ChevronDown className={clsx("w-5 h-5 shrink-0 transition-transform duration-300", isOpen && "rotate-180 text-ufaal-blue")} />
            </button>
            <div 
                className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <p className="text-gray-600 font-light leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn direction="up">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-ufaal-blue/5 rounded-2xl text-ufaal-blue">
                            <HelpCircle className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-ufaal-blue tracking-tight">Preguntas Frecuentes</h1>
                    </div>
                    <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-12"></div>
                    <p className="text-gray-600 text-lg font-light mb-12">
                        Resolvemos tus dudas principales sobre nuestra organización, procesos de calidad y participación regional.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} direction="up" className="bg-ufaal-gray/30 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <div className="divide-y divide-gray-100">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </FadeIn>

                <FadeIn delay={0.4} direction="up" className="mt-16 text-center">
                    <div className="bg-ufaal-blue p-10 rounded-3xl text-white shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
                        <p className="text-blue-100 font-light mb-8 max-w-lg mx-auto">
                            Nuestro equipo de soporte está listo para ayudarte con cualquier consulta adicional que tengas.
                        </p>
                        <a 
                            href="#/contacto" 
                            className="inline-block px-10 py-4 bg-white text-ufaal-blue rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg active:scale-95"
                        >
                            Contactar Soporte
                        </a>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
