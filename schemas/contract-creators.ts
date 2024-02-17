import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contractCreators',
  title: 'Contract Creators',
  type: 'document',
  fields: [
    {
      name: 'creatorName',
      type: 'string',
      title: 'Creator Name',
    },
    {
      name: 'creator',
      type: 'reference',
      title: 'Creator',
      to: [{type: 'users'}],
    },
    {
      name: 'contractAddresses',
      type: 'array',
      title: 'Contract Addresses',
      of: [
        {
          name: 'contractDetails',
          type: 'object',
          title: 'Contract Details',
          fields: [
            defineField({
              name: 'address',
              type: 'string',
              title: 'Address',
            }),
            {
              name: 'nft',
              title: 'NFT',
              type: 'reference',
              to: [{type: 'nft'}],
            },
          ],
        },
      ],
    },
  ],
})
