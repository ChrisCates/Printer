import { join } from 'path'
import { write } from 'fs-jetpack'

import { Log } from '../helpers/log'
import { ComponentTemplate } from '../templates/component/component'
import { ConnectTemplate } from '../templates/component/connect'
import { StyleTemplate } from '../templates/component/style'
import { TestTemplate } from '../templates/component/test'
import { IndexTemplate } from '../templates/component/index'

export async function generateComponent (path: string) {
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

  const component = ComponentTemplate(fileName, name)
  const componentPath = join(process.cwd(), path, `${fileName}.component.tsx`)
  const connect = ConnectTemplate(fileName, name)
  const connectPath = join(process.cwd(), path, `${fileName}.connect.tsx`)
  const style = StyleTemplate(fileName, name)
  const stylePath = join(process.cwd(), path, `${fileName}.style.tsx`)
  const test = TestTemplate(fileName, name)
  const testPath = join(process.cwd(), path, `${fileName}.test.tsx`)
  const index = IndexTemplate(fileName, name)
  const indexPath = join(process.cwd(), path, 'index.tsx')

  write(componentPath, component)
  Log(`    ✅  Created ${fileName}.component.tsx`.green)
  write(connectPath, connect)
  Log(`    ✅  Created ${fileName}.connect.tsx`.green)
  write(stylePath, style)
  Log(`    ✅  Created ${fileName}.style.tsx`.green)
  write(testPath, test)
  Log(`    ✅  Created ${fileName}.test.tsx`.green)
  write(indexPath, index)
  Log('    ✅  Created index.tsx'.green)
}
