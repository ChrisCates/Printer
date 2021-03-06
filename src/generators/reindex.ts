import { join } from 'path'
import { inspect, list, read, write } from 'fs-jetpack'
import { Log } from '../helpers/log'

export async function reindexComponents (path: string) {
  const pathData = inspect(path)

  if (pathData && pathData.type === 'dir') {
    const items = list(path)

    if (items) {
      for (const item of items) {
        const subPath = join(path, item)
        const subPathData = inspect(subPath)

        if (subPathData && subPathData.type === 'dir') {
          reindexComponents(subPath)
        } else if (subPathData) {
          if (subPathData.name.indexOf('.component.tsx') !== -1) {
            const pathArray = path.split('/')
            const fileName = pathArray[pathArray.length - 1]
            let name = fileName.replace(/[^\w\s]/gi, '')

            if (fileName.indexOf('.') !== -1) {
              name = fileName.split('.').map(word => word[0].toUpperCase() + word.substring(1)).join('')
            } else if (fileName.indexOf('-') !== -1) {
              name = fileName.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join('')
            } else {
              name = name[0].toUpperCase() + name.substring(1)
            }

            const index = read(join(__dirname, '..', 'templates', 'component', 'index.template'))?.replaceAll('{{name}}', name).replaceAll('{{prefix}}', fileName)
            const indexPath = join(process.cwd(), path, 'index.tsx')

            write(indexPath, index || '')
            Log(`    ✅  Created ${join(path, 'index.tsx')}`.green)
          }
        }
      }
    }
  }
}
