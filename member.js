function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'object',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'role',
        media: 'image',
      },
    },
  };
}