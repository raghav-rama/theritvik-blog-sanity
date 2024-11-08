import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'contractCreators',
  title: 'Contract Creators',
  type: 'document',
  fields: [
    defineField({
      name: 'creatorName',
      type: 'string',
      title: 'Creator Name',
    }),
    defineField({
      name: 'creator',
      type: 'reference',
      title: 'Creator',
      to: [{type: 'users'}],
    }),
    defineField({
      name: 'contractAddresses',
      type: 'array',
      title: 'Contract Addresses',
      of: [
        defineArrayMember({
          name: 'contractDetails',
          type: 'object',
          title: 'Contract Details',
          fields: [
            defineField({
              name: 'address',
              type: 'string',
              title: 'Address',
            }),
            defineField({
              name: 'nft',
              title: 'NFT',
              type: 'reference',
              to: [{type: 'nft'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
