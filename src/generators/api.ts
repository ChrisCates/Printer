import { join } from 'path'
import { write } from 'fs-jetpack'

import { Log } from '../helpers/log'
import { ApiTemplate } from '../templates/api'

export async function generateApi (path: string) {
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

  const apiTemplate = ApiTemplate(name)
  const apiPath = join(process.cwd(), 'pages', 'api', `${path}.tsx`)

  write(apiPath, apiTemplate)
  Log(`    ✅  Created pages/api/${path}.tsx`.green)
}
