import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of User',
    }),
    defineField({
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    }),
    defineField({
      name: 'nonce',
      type: 'number',
      title: 'Nonce',
    }),
    defineField({
      name: 'signature',
      type: 'string',
      title: 'Signature',
    }),
    defineField({
      name: 'lastLogin',
      type: 'datetime',
      title: 'Last Login',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    }),
  ],
})
