migrate(
  (app) => {
    const projects = app.findCollectionByNameOrId('projects')

    const seedData = [
      {
        title: 'Guardião Ancestral (3D Game Character)',
        slug: 'guardiao-ancestral-3d',
        category: '3D',
        description:
          "Personagem 3D completo 'Game Ready' para Unreal Engine 5 com retopologia otimizada e PBR 4K.",
        full_description:
          'Projeto autoral focado na criação de um personagem guardião para um RPG de ação em Unreal Engine 5. O processo envolveu pesquisa conceitual no Clip Studio Paint, modelagem base e escultura detalhada de tecidos e armaduras no ZBrush, retopologia e UVs no Blender, e pintura de texturas PBR realistas no Substance Painter. Finalizado com rig customizado e shaders de cabelos/peles em Unreal Engine 5.',
        tools: ['ZBrush', 'Blender', 'Substance Painter', 'Unreal Engine 5', 'Clip Studio Paint'],
        order: 1,
      },
      {
        title: 'Cyberpunk District 9 (Environment Concept)',
        slug: 'cyberpunk-district-concept',
        category: 'Concept',
        description:
          'Arte conceitual de ambiente futurista com estética grafite, chuvas intensas e iluminação dramática.',
        full_description:
          'Concept art de um distrito cyberpunk decadente focado em composição, atmosfera e narrativas visuais. A base 3D foi criada no Blender para estabelecer blocagem de perspectiva e luz, seguida de photobashing e pintura digital pesada no Photoshop e Clip Studio Paint, incorporando marcas de tinta e pichações cyberpunk exclusivas.',
        tools: ['Photoshop', 'Clip Studio Paint', 'Blender'],
        order: 2,
      },
      {
        title: 'Ruínas de Scarlet (Unreal Engine 5 Level)',
        slug: 'ruinas-de-scarlet-ue5',
        category: 'Games',
        description:
          'Level Design e Environment Art construído com Nanite e Lumen em Unreal Engine 5.',
        full_description:
          'Cenário completo criado para um jogo de aventura em primeira pessoa. O projeto abrangeu a criação da vegetação, estruturas de pedra esculpidas no ZBrush, PBR Trim Sheets desenvolvidas no Substance Designer e composição de nível com iluminação dinâmica Lumen em tempo real.',
        tools: ['Unreal Engine 5', 'Blender', 'ZBrush', 'Substance Designer', 'Substance Painter'],
        order: 3,
      },
      {
        title: 'Mecha Valkyrie (2D Character Design)',
        slug: 'mecha-valkyrie-2d',
        category: '2D',
        description:
          'Design de personagem 2D focado em estética mech com acabamento de tinta e rascunhos de sketchbook.',
        full_description:
          "Model sheet e ilustração promocional da personagem 'Mecha Valkyrie'. Inclui exploração de silhueta, variações de paleta de cores, orthographics para futura modelagem 3D e renderização 2D detalhada produzida no Clip Studio Paint e Photoshop.",
        tools: ['Clip Studio Paint', 'Photoshop'],
        order: 4,
      },
      {
        title: 'Conjunto de Relíquias Místicas (Prop Asset Pack)',
        slug: 'reliquias-misticas-props',
        category: '3D',
        description:
          'Pacote de props estilizados e low-poly prontos para integração na Unity e Unreal Engine.',
        full_description:
          'Conjunto de 12 relíquias antigas estilizadas para jogos. Escultura high-poly no ZBrush, retopologia limpa com baked normals no Blender e texturização hand-painted / PBR estilizada no Substance Painter e 3DCoat.',
        tools: ['Blender', 'ZBrush', 'Substance Painter', '3DCoat', 'Unity'],
        order: 5,
      },
      {
        title: 'Identidade Visual & Branding Scarlet Studio',
        slug: 'scarlet-studio-branding',
        category: 'Graphic Design',
        description:
          'Identidade visual completa do estúdio de jogos, combinando traço de tinta, grafite e tipografia elegante.',
        full_description:
          'Projeto de branding e identidade visual para o Scarlet Studio. Envolveu criação do monograma característico feito à mão, manual da marca, aplicações em merchandising, UI para jogos e direção de arte em tons grafite e vermelho escarlate.',
        tools: ['Illustrator', 'Photoshop', 'Figma'],
        order: 6,
      },
      {
        title: 'Criatura Fantástica (Sculpt & Texture)',
        slug: 'criatura-fantastica-sculpt',
        category: 'Concept',
        description:
          'Estudo anatômico e escultura digital de criatura orgânica com render cinematográfico.',
        full_description:
          'Escultura orgânica desenvolvida no ZBrush explorando detalhes de pele, escamas e anatomia fantástica. Texturização detalhada com Substance Painter e composição de estúdio finalizada com iluminação de três pontos e render no Blender Cycles.',
        tools: ['ZBrush', 'Substance Painter', 'Blender', 'Photoshop'],
        order: 7,
      },
    ]

    seedData.forEach((item) => {
      try {
        app.findFirstRecordByData('projects', 'slug', item.slug)
      } catch (_) {
        const record = new Record(projects)
        record.set('title', item.title)
        record.set('slug', item.slug)
        record.set('category', item.category)
        record.set('description', item.description)
        record.set('full_description', item.full_description)
        record.set('tools', item.tools)
        record.set('order', item.order)
        app.save(record)
      }
    })
  },
  (app) => {
    const seedSlugs = [
      'guardiao-ancestral-3d',
      'cyberpunk-district-concept',
      'ruinas-de-scarlet-ue5',
      'mecha-valkyrie-2d',
      'reliquias-misticas-props',
      'scarlet-studio-branding',
      'criatura-fantastica-sculpt',
    ]

    seedSlugs.forEach((slug) => {
      try {
        const record = app.findFirstRecordByData('projects', 'slug', slug)
        app.delete(record)
      } catch (_) {}
    })
  },
)
