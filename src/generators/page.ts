import { join } from 'path'
import { read, write } from 'fs-jetpack'
import { Log } from '../helpers/log'

export async function generatePage (path: string) {
  const pathArray = path.split('/')
  const fileName = pathArray[pathArray.length - 1]
  let urls = []
  let name = fileName.replace(/[^\w\s]/gi, '')
  let pageTemplate = ''

  if (path.match(/\[(.*?)\]/g)) {
    urls = path.match(/\[(.*?)\]/g) as string[]
    urls = urls.map(url => url.replace(/\[/g, '').replace(/\]/g, ''))
    name = name[0].toUpperCase() + name.substring(1)

    pageTemplate = read(join(__dirname, '..', 'templates', 'page.url.template'))?.replaceAll('{{name}}', name).replaceAll('{{url}}', urls.join(', ')) || ''
  } else {
    if (fileName.indexOf('.') !== -1) {
      name = fileName.split('.').map(word => word[0].toUpperCase() + word.substring(1)).join('')
    } else if (fileName.indexOf('-') !== -1) {
      name = fileName.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join('')
    } else {
      name = name[0].toUpperCase() + name.substring(1)
    }

    pageTemplate = read(join(__dirname, '..', 'templates', 'page.template'))?.replaceAll('{{name}}', name) || ''
  }

  const pagePath = join(process.cwd(), 'pages', `${path}.tsx`)

  write(pagePath, pageTemplate)
  Log(`    ✅  Created pages/${path}.tsx`.green)
}
