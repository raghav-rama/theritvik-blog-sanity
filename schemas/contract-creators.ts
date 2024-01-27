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
        {
          name: 'contract_details',
          type: 'object',
          title: 'Contract Details',
          fields: [
            defineField({
              name: 'address',
              type: 'string',
              title: 'Address',
            }),
            {
              name: 'name',
              type: 'reference',
              to: [{type: 'nft'}],
            },
          ],
        },
      ],
    },
  ],
})
