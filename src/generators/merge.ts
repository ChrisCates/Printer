import { join } from 'path'
import { list, read, write } from 'fs-jetpack'

import { SchemaTemplate } from '../templates/prisma/schema'

export async function mergePrisma () {
  const schemaPath = join(process.cwd(), 'prisma', 'schema.prisma')
  const files = list(join(process.cwd(), 'prisma'))
  let mergedFile = SchemaTemplate

  for (const file in files) {
    if (file !== 'schema.prisma' && file !== 'prisma.tsx' && file.indexOf('.prisma') !== -1) {
      const filePath = join(process.cwd(), 'prisma', file)
      const fileContents = read(filePath)

      mergedFile += '\n'
      mergedFile += fileContents
      console.log(`    ✅  Merged prisma/${file}`.green)
    }
  }

  write(schemaPath, mergedFile)
  console.log('    ✅  Created prisma/schema.prisma'.green)
}
