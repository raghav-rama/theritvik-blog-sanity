import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'nft',
  title: 'NFT',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of NFT',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description of NFT',
    }),
    defineField({
      name: 'external_url',
      type: 'string',
      title: 'External URL',
    }),
    defineField({
      name: 'image',
      type: 'string',
      title: 'Image URL',
    }),
    defineField({
      name: 'attributes',
      type: 'array',
      title: 'Attributes',
      of: [
        defineArrayMember({
          name: 'traits',
          type: 'object',
          title: 'Traits',
          fields: [
            defineField({
              name: 'trait_type',
              type: 'string',
              title: 'Trait Type',
            }),
            defineField({
              name: 'value',
              type: 'string',
              title: 'Value',
            }),
          ],
        }),
      ],
    }),
  ],
})
