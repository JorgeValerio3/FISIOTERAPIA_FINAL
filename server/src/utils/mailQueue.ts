import { EmailData, sendContactEmail } from './mailer';

class MailQueue {
    private queue: EmailData[] = [];
    private isRunning: boolean = false;
    private isStopping: boolean = false;

    /**
     * Enqueues a new email to be processed.
     */
    public enqueue(data: EmailData): void {
        if (this.isStopping) {
            console.warn('Advertencia: Intentando encolar un email mientras el servidor se está apagando.');
            return;
        }
        this.queue.push(data);
        console.log(`[Queue] Email encolado satisfactoriamente. Pendientes: ${this.queue.length}`);
    }

    /**
     * Starts the background worker loop.
     */
    public async start(): Promise<void> {
        if (this.isRunning) return;
        this.isRunning = true;
        this.isStopping = false;
        console.log('[Queue] Worker de correos iniciado.');
        
        // El bucle corre de forma asíncrona en segundo plano
        this.workerLoop();
    }

    /**
     * Gracefully stops the worker, waiting for the queue to empty.
     */
    public async stop(): Promise<void> {
        console.log('[Queue] Iniciando apagado gradual del worker...');
        this.isStopping = true;

        // Esperar a que la cola se vacíe antes de marcar como detenido
        while (this.queue.length > 0) {
            console.log(`[Queue] Esperando a procesar ${this.queue.length} correos restantes...`);
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        this.isRunning = false;
        console.log('[Queue] Worker detenido limpiamente.');
    }

    /**
     * The infinite loop that listens to the queue.
     */
    private async workerLoop(): Promise<void> {
        while (this.isRunning || this.queue.length > 0) {
            if (this.queue.length > 0) {
                const mailData = this.queue.shift();
                if (mailData) {
                    try {
                        console.log(`[Queue] Procesando envío para: ${mailData.email}`);
                        await sendContactEmail(mailData);
                        console.log(`[Queue] Envío exitoso. Restantes en cola: ${this.queue.length}`);
                    } catch (error) {
                        console.error(`[Queue] Error al procesar email para ${mailData.email}:`, error);
                        // Aquí se podría implementar una lógica de reintento si fuera necesario
                    }
                }
            } else {
                // Si no hay nada en cola, esperar un poco antes de volver a revisar (polling corto)
                // En una arquitectura más avanzada usaríamos un Event Emitter para evitar el polling
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Si estamos en proceso de apagado y la cola está vacía, terminar el bucle
                if (this.isStopping && this.queue.length === 0) break;
            }
        }
    }
}

// Exportamos una única instancia (Singleton) para toda la aplicación
export const mailQueue = new MailQueue();
