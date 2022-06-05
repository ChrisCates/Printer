import { join } from 'path'
import { read, write } from 'fs-jetpack'
import { Log } from '../helpers/log'

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

  const component = read(join(__dirname, '..', 'templates', 'component', 'component.template'))?.replaceAll('{{name}}', name).replaceAll('{{prefix}}', fileName)
  const componentPath = join(process.cwd(), path, `${fileName}.component.tsx`)
  const connect = read(join(__dirname, '..', 'templates', 'component', 'connect.template'))?.replaceAll('{{name}}', name).replaceAll('{{prefix}}', fileName)
  const connectPath = join(process.cwd(), path, `${fileName}.connect.tsx`)
  const style = read(join(__dirname, '..', 'templates', 'component', 'style.template'))?.replaceAll('{{name}}', name).replaceAll('{{prefix}}', fileName)
  const stylePath = join(process.cwd(), path, `${fileName}.style.tsx`)
  const test = read(join(__dirname, '..', 'templates', 'component', 'test.template'))?.replaceAll('{{name}}', name).replaceAll('{{prefix}}', fileName)
  const testPath = join(process.cwd(), path, `${fileName}.test.tsx`)
  const index = read(join(__dirname, '..', 'templates', 'component', 'index.template'))?.replaceAll('{{name}}', name).replaceAll('{{prefix}}', fileName)
  const indexPath = join(process.cwd(), path, 'index.tsx')

  write(componentPath, component || '')
  Log(`    ✅  Created ${fileName}.component.tsx`.green)
  write(connectPath, connect || '')
  Log(`    ✅  Created ${fileName}.connect.tsx`.green)
  write(stylePath, style || '')
  Log(`    ✅  Created ${fileName}.style.tsx`.green)
  write(testPath, test || '')
  Log(`    ✅  Created ${fileName}.test.tsx`.green)
  write(indexPath, index || '')
  Log('    ✅  Created index.tsx'.green)
}
