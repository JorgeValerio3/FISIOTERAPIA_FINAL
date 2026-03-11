import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'member',
    title: 'Representante de País',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'country',
            title: 'País',
            type: 'string',
        }),
        defineField({
            name: 'photo',
            title: 'Foto de Perfil',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'profile',
            title: 'Perfil Profesional',
            type: 'text',
        }),
        defineField({
            name: 'contact',
            title: 'Correo de Contacto',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Teléfono',
            type: 'string',
        })
    ]
});
