module.exports = {
  name: 'person',
  label: 'People',
  pluralLabel: 'People',
  addFields: [
    {
      name: 'title',
      label: 'Full Name',
      type: 'string',
      required: true
    },
    {
      name: 'firstName',
      label: 'First Name',
      type: 'string',
      required: true
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'string',
      required: true
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'string',
      required: true
    },
    {
      name: 'bio',
      label: 'Biography',
      type: 'string',
      required: true,
      textarea: true
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        aspectRatio: [ 4, 3 ],
        minSize: [ 400, 300 ],
        limit: [ 1 ]
      }
    }
  ]
};
