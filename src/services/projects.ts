import pb from '@/lib/pocketbase/client'
import { Project, MOCK_PROJECTS } from '@/types/project'

export async function getProjects(): Promise<Project[]> {
  try {
    const records = await pb.collection('projects').getFullList<Project>({
      sort: 'order',
    })

    if (records.length === 0) {
      return MOCK_PROJECTS
    }

    return records.map((record, index) => {
      const coverUrl = record.cover_image
        ? pb.files.getURL(record, record.cover_image)
        : MOCK_PROJECTS[index % MOCK_PROJECTS.length].preview_url

      const beforeImg = MOCK_PROJECTS[index % MOCK_PROJECTS.length].before_image
      const afterImg = MOCK_PROJECTS[index % MOCK_PROJECTS.length].after_image

      return {
        ...record,
        preview_url: coverUrl,
        before_image: beforeImg,
        after_image: afterImg,
      }
    })
  } catch (error) {
    console.warn('Using mock projects due to fetch error/offline backend:', error)
    return MOCK_PROJECTS
  }
}

export async function getProjectById(idOrSlug: string): Promise<Project | null> {
  try {
    // Try by ID first
    let record: Project | null = null
    try {
      record = await pb.collection('projects').getOne<Project>(idOrSlug)
    } catch {
      record = await pb.collection('projects').getFirstListItem<Project>(`slug="${idOrSlug}"`)
    }

    if (record) {
      const coverUrl = record.cover_image
        ? pb.files.getURL(record, record.cover_image)
        : 'https://img.usecurling.com/p/800/600?q=game%20art%20dark&color=black'

      const galleryUrls = record.gallery?.map((file) => pb.files.getURL(record, file)) || []

      return {
        ...record,
        preview_url: coverUrl,
        gallery:
          galleryUrls.length > 0
            ? galleryUrls
            : [
                coverUrl,
                'https://img.usecurling.com/p/800/600?q=wireframe%203d%20model&color=black',
                'https://img.usecurling.com/p/800/600?q=concept%20art%20detail&color=red',
                'https://img.usecurling.com/p/800/600?q=game%20engine%20viewport&color=black',
              ],
      }
    }
  } catch (err) {
    console.warn('Searching in mock projects:', err)
  }

  const mock = MOCK_PROJECTS.find((p) => p.id === idOrSlug || p.slug === idOrSlug)
  if (mock) {
    return {
      ...mock,
      gallery: [
        mock.preview_url || '',
        mock.before_image || 'https://img.usecurling.com/p/800/600?q=sketch%20process&color=gray',
        mock.after_image || 'https://img.usecurling.com/p/800/600?q=render%20final&color=red',
      ],
    }
  }

  return null
}
