import { FadeIn } from '../components/ui/FadeIn';

export default function Privacidad() {
    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn direction="up">
                    <h1 className="text-4xl md:text-5xl font-bold text-ufaal-blue mb-8 tracking-tight">Políticas de Privacidad</h1>
                    <div className="w-24 h-1 bg-ufaal-blue-light rounded-full mb-12"></div>
                </FadeIn>

                <div className="prose prose-lg max-w-none text-gray-600 font-light space-y-8">
                    <FadeIn delay={0.1} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">1. Compromiso de Privacidad</h2>
                            <p>
                                La Unión de Fisioterapia Acuática de América Latina (UFAAL) se compromete a proteger la privacidad y seguridad de la información personal de sus afiliados, colaboradores y usuarios de nuestra plataforma digital. Esta política detalla nuestras prácticas de recopilación y uso de datos de acuerdo con los estándares internacionales de protección de la información.
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">2. Información Recopilada</h2>
                            <p>
                                Recopilamos información únicamente cuando es estrictamente necesario para el cumplimiento de nuestros objetivos institucionales, tales como:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Datos de contacto (Nombre, correo electrónico, teléfono) proporcionados voluntariamente en formularios.</li>
                                <li>Información académica y profesional para procesos de afiliación o certificación.</li>
                                <li>Datos de navegación técnica para mejorar la experiencia de usuario y seguridad del sitio.</li>
                            </ul>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.3} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">3. Uso de la Información</h2>
                            <p>
                                Los datos recopilados se utilizan exclusivamente para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Gestionar la comunicación institucional con los países miembros.</li>
                                <li>Informar sobre programas de formación, congresos y avances científicos.</li>
                                <li>Garantizar el correcto funcionamiento de la plataforma web y los servicios de soporte.</li>
                            </ul>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">4. Protección de Datos</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas y organizativas para evitar el acceso no autorizado, la pérdida o alteración de su información personal. UFAAL no vende, alquila ni comparte sus datos con terceros con fines comerciales.
                            </p>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up">
                        <section>
                            <h2 className="text-2xl font-bold text-ufaal-text mb-4 border-b border-gray-100 pb-2">5. Derechos del Usuario</h2>
                            <p>
                                Usted tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales de nuestras bases de datos en cualquier momento. Para ejercer estos derechos, puede contactarnos a través de nuestro correo institucional: <span className="text-ufaal-blue font-medium">ufaal2020@gmail.com</span>.
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
