import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contract_creators',
  title: 'Contract Creators',
  type: 'document',
  fields: [
    defineField({
      name: 'creator',
      type: 'string',
      title: 'Creator',
    }),
    {
      name: 'contract_addresses',
      type: 'array',
      title: 'Contract Addresses',
      of: [
        defineField({
          name: 'contract_address',
          type: 'string',
          title: 'Contract Address',
        }),
      ],
    },
  ],
})
