migrate(
  (app) => {
    const collection = new Collection({
      name: 'projects',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true },
        {
          name: 'category',
          type: 'select',
          required: true,
          values: ['2D', '3D', 'Games', 'Concept', 'Graphic Design'],
          maxSelect: 1,
        },
        { name: 'description', type: 'text', required: true },
        { name: 'full_description', type: 'text', required: true },
        {
          name: 'tools',
          type: 'select',
          required: false,
          values: [
            'Blender',
            'ZBrush',
            'Substance Painter',
            'Substance Designer',
            '3DCoat',
            'Clip Studio Paint',
            'Photoshop',
            'Illustrator',
            'Unity',
            'Unreal Engine 5',
            'Figma',
          ],
          maxSelect: 11,
        },
        {
          name: 'cover_image',
          type: 'file',
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        },
        {
          name: 'gallery',
          type: 'file',
          maxSelect: 10,
          maxSize: 5242880,
          mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        },
        { name: 'order', type: 'number' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_projects_category ON projects (category)',
        'CREATE UNIQUE INDEX idx_projects_slug ON projects (slug)',
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('projects')
    app.delete(collection)
  },
)
