export interface Project {
  id: string
  title: string
  slug: string
  category: '2D' | '3D' | 'Games' | 'Concept' | 'Graphic Design'
  description: string
  full_description: string
  tools: string[]
  cover_image?: string
  gallery?: string[]
  order?: number
  created?: string
  updated?: string
  // Computed preview image URL
  preview_url?: string
  before_image?: string
  after_image?: string
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'mock-1',
    title: 'Guardião Ancestral (3D Game Character)',
    slug: 'guardiao-ancestral-3d',
    category: '3D',
    description:
      'Personagem 3D completo "Game Ready" para Unreal Engine 5 com retopologia otimizada e PBR 4K.',
    full_description:
      'Projeto autoral focado na criação de um personagem guardião para um RPG de ação em Unreal Engine 5. O processo envolveu pesquisa conceitual no Clip Studio Paint, modelagem base e escultura detalhada de tecidos e armaduras no ZBrush, retopologia e UVs no Blender, e pintura de texturas PBR realistas no Substance Painter. Finalizado com rig customizado e shaders de cabelos/peles em Unreal Engine 5.',
    tools: ['ZBrush', 'Blender', 'Substance Painter', 'Unreal Engine 5', 'Clip Studio Paint'],
    preview_url:
      'https://img.usecurling.com/p/800/600?q=3d%20character%20warrior%20sculpture&color=black',
    before_image: 'https://img.usecurling.com/p/800/600?q=wireframe%203d%20model&color=gray',
    after_image: 'https://img.usecurling.com/p/800/600?q=3d%20render%20game%20character&color=red',
    order: 1,
  },
  {
    id: 'mock-2',
    title: 'Cyberpunk District 9 (Environment Concept)',
    slug: 'cyberpunk-district-concept',
    category: 'Concept',
    description:
      'Arte conceitual de ambiente futurista com estética grafite, chuvas intensas e iluminação dramática.',
    full_description:
      'Concept art de um distrito cyberpunk decadente focado em composição, atmosfera e narrativas visuais. A base 3D foi criada no Blender para estabelecer blocagem de perspectiva e luz, seguida de photobashing e pintura digital pesada no Photoshop e Clip Studio Paint, incorporando marcas de tinta e pichações cyberpunk exclusivas.',
    tools: ['Photoshop', 'Clip Studio Paint', 'Blender'],
    preview_url:
      'https://img.usecurling.com/p/800/600?q=cyberpunk%20city%20concept%20art&color=black',
    before_image: 'https://img.usecurling.com/p/800/600?q=sketch%20drawing%20city&color=gray',
    after_image: 'https://img.usecurling.com/p/800/600?q=cyberpunk%20rainy%20city%20art&color=red',
    order: 2,
  },
  {
    id: 'mock-3',
    title: 'Ruínas de Scarlet (Unreal Engine 5 Level)',
    slug: 'ruinas-de-scarlet-ue5',
    category: 'Games',
    description: 'Level Design e Environment Art construído com Nanite e Lumen em Unreal Engine 5.',
    full_description:
      'Cenário completo criado para um jogo de aventura em primeira pessoa. O projeto abrangeu a criação da vegetação, estruturas de pedra esculpidas no ZBrush, PBR Trim Sheets desenvolvidas no Substance Designer e composição de nível com iluminação dinâmica Lumen em tempo real.',
    tools: ['Unreal Engine 5', 'Blender', 'ZBrush', 'Substance Designer', 'Substance Painter'],
    preview_url:
      'https://img.usecurling.com/p/800/600?q=unreal%20engine%20fantasy%20ruins&color=black',
    before_image: 'https://img.usecurling.com/p/800/600?q=blockout%20level%20design&color=gray',
    after_image: 'https://img.usecurling.com/p/800/600?q=unreal%20engine%205%20lighting&color=red',
    order: 3,
  },
  {
    id: 'mock-4',
    title: 'Mecha Valkyrie (2D Character Design)',
    slug: 'mecha-valkyrie-2d',
    category: '2D',
    description:
      'Design de personagem 2D focado em estética mech com acabamento de tinta e rascunhos de sketchbook.',
    full_description:
      'Model sheet e ilustração promocional da personagem "Mecha Valkyrie". Inclui exploração de silhueta, variações de paleta de cores, orthographics para futura modelagem 3D e renderização 2D detalhada produzida no Clip Studio Paint e Photoshop.',
    tools: ['Clip Studio Paint', 'Photoshop'],
    preview_url:
      'https://img.usecurling.com/p/800/600?q=2d%20anime%20mecha%20character%20art&color=black',
    before_image: 'https://img.usecurling.com/p/800/600?q=pencil%20sketch%20character&color=gray',
    after_image: 'https://img.usecurling.com/p/800/600?q=digital%20painting%20heroine&color=red',
    order: 4,
  },
  {
    id: 'mock-5',
    title: 'Conjunto de Relíquias Místicas (Prop Asset Pack)',
    slug: 'reliquias-misticas-props',
    category: '3D',
    description:
      'Pacote de props estilizados e low-poly prontos para integração na Unity e Unreal Engine.',
    full_description:
      'Conjunto de 12 relíquias antigas estilizadas para jogos. Escultura high-poly no ZBrush, retopologia limpa com baked normals no Blender e texturização hand-painted / PBR estilizada no Substance Painter e 3DCoat.',
    tools: ['Blender', 'ZBrush', 'Substance Painter', '3DCoat', 'Unity'],
    preview_url: 'https://img.usecurling.com/p/800/600?q=3d%20game%20props%20weapons&color=black',
    before_image: 'https://img.usecurling.com/p/800/600?q=low%20poly%20mesh&color=gray',
    after_image: 'https://img.usecurling.com/p/800/600?q=textured%203d%20sword&color=red',
    order: 5,
  },
  {
    id: 'mock-6',
    title: 'Identidade Visual & Branding Scarlet Studio',
    slug: 'scarlet-studio-branding',
    category: 'Graphic Design',
    description:
      'Identidade visual completa do estúdio de jogos, combinando traço de tinta, grafite e tipografia elegante.',
    full_description:
      'Projeto de branding e identidade visual para o Scarlet Studio. Envolveu criação do monograma característico feito à mão, manual da marca, aplicações em merchandising, UI para jogos e direção de arte em tons grafite e vermelho escarlate.',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    preview_url:
      'https://img.usecurling.com/p/800/600?q=dark%20branding%20design%20red%20logo&color=black',
    order: 6,
  },
  {
    id: 'mock-7',
    title: 'Criatura Fantástica (Sculpt & Texture)',
    slug: 'criatura-fantastica-sculpt',
    category: 'Concept',
    description:
      'Estudo anatômico e escultura digital de criatura orgânica com render cinematográfico.',
    full_description:
      'Escultura orgânica desenvolvida no ZBrush explorando detalhes de pele, escamas e anatomia fantástica. Texturização detalhada com Substance Painter e composição de estúdio finalizada com iluminação de três pontos e render no Blender Cycles.',
    tools: ['ZBrush', 'Substance Painter', 'Blender', 'Photoshop'],
    preview_url:
      'https://img.usecurling.com/p/800/600?q=monster%203d%20sculpture%20zbrush&color=black',
    order: 7,
  },
]
