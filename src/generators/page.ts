import { join } from 'path'
import { write } from 'fs-jetpack'

import { Log } from '../helpers/log'
import { PageTemplate } from '../templates/page'
import { PageUrlTemplate } from '../templates/page.url'

export async function generatePage (path: string) {
  const pathArray = path.split('/')
  const fileName = pathArray[pathArray.length - 1]
  let urls = []
  let name = fileName.replace(/[^\w\s]/gi, '')
  let pageTemplate = PageTemplate(name)

  if (path.match(/\[(.*?)\]/g)) {
    urls = path.match(/\[(.*?)\]/g) as string[]
    urls = urls.map(url => url.replace(/\[/g, '').replace(/\]/g, ''))
    name = name[0].toUpperCase() + name.substring(1)
    pageTemplate = PageUrlTemplate(name, urls)
  } else if (fileName.indexOf('.') !== -1) {
    name = fileName.split('.').map(word => word[0].toUpperCase() + word.substring(1)).join('')
    pageTemplate = PageTemplate(name)
  } else if (fileName.indexOf('-') !== -1) {
    name = fileName.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join('')
    pageTemplate = PageTemplate(name)
  } else {
    name = name[0].toUpperCase() + name.substring(1)
    pageTemplate = PageTemplate(name)
  }

  const pagePath = join(process.cwd(), 'pages', `${path}.tsx`)

  write(pagePath, pageTemplate)
  Log(`    ✅  Created pages/${path}.tsx`.green)
}
