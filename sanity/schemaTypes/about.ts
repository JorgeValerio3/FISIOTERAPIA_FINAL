import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'about',
    title: 'Quiénes Somos (Misión y Visión)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título de Sección',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Contenido Principal',
            type: 'text',
        }),
        defineField({
            name: 'mission',
            title: 'Misión',
            type: 'text',
        }),
        defineField({
            name: 'vision',
            title: 'Visión',
            type: 'text',
        })
    ]
});
