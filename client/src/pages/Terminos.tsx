import { FadeIn } from '../components/ui/FadeIn';

export default function Terminos() {
    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn direction="up">
                    <h1 className="text-4xl md:text-5xl font-bold text-ufaal-blue mb-8 tracking-tight">Términos y Condiciones</h1>
                    <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-12"></div>
                </FadeIn>

                <div className="prose prose-lg max-w-none text-gray-600 font-light space-y-8">
                    <FadeIn delay={0.1} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">1. Aceptación de los Términos</h2>
                            <p>
                                Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestra plataforma.
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">2. Propiedad Intelectual</h2>
                            <p>
                                Todo el contenido presente en este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, audios, videos y documentos científicos, es propiedad de UFAAL o de sus respectivos autores y está protegido por las leyes de derechos de autor y propiedad intelectual internacionales. Se prohíbe la reproducción total o parcial sin autorización expresa.
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">3. Uso de la Información</h2>
                            <p>
                                El material proporcionado en este sitio tiene fines exclusivamente educativos e informativos sobre la fisioterapia acuática. No constituye consejo médico profesional ni sustituye la evaluación clínica personalizada.
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">4. Limitación de Responsabilidad</h2>
                            <p>
                                UFAAL no se hace responsable de las consecuencias derivadas del uso inadecuado de la información aquí contenida, ni de los daños directos o indirectos que puedan surgir del acceso a nuestra plataforma o de la imposibilidad de acceder a la misma.
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">5. Modificaciones</h2>
                            <p>
                                La organización se reserva el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar periódicamente esta sección para estar al tanto de los cambios realizados.
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up">
                        <p className="pt-8 text-sm text-gray-400 italic">
                            Última actualización: 15 de marzo de 2026.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
