import { defineType, defineField } from 'sanity';

export const redirectType = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      type: 'string',
    }),
    defineField({
      name: 'destination',
      type: 'string',
    }),
    defineField({
      name: 'isPermanent',
      type: 'boolean',
    }),
  ],
});
