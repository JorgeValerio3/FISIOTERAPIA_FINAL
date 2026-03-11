/**
 * CMS Service
 * 
 * Esta capa de abstracción permite en el futuro cambiar el origen de los datos.
 * Actualmente (V1) devuelve la data estática importada de local (membersData.ts).
 * Cuando se configure Sanity.io u otro Headless CMS, se debe sustituir la implementación
 * de estas funciones para hacer fetch a la API externa mediante su respectivo cliente
 * (ej. @sanity/client) sin romper los componentes de React que lo consumen.
 */

import { countriesData, CountryData } from '../data/membersData';

export const cmsService = {
    /**
     * Obtiene la lista de representantes por país.
     * En el futuro, esto ejecutará un GROQ query como:
     * await sanityClient.fetch('*[_type == "member"]')
     */
    getCountriesAndMembers: async (): Promise<CountryData[]> => {
        // Simulamos un comportamiento asíncrono para mantener la estructura de API
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(countriesData);
            }, 500);
        });
    },

    /**
     * Obtiene los textos de misión y visión
     */
    getAboutContent: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    mission: "Promover el desarrollo, fortalecimiento y posicionamiento...",
                    vision: "Ser una red latinoamericana de referencia internacional...",
                });
            }, 500);
        });
    }
};
