import { join } from 'path'
import { list, read, write } from 'fs-jetpack'

import { Log } from '../helpers/log'
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

      if (process.env.NODE_ENV !== 'test') { Log(`    ✅  Merged prisma/${file}`.green) }
    }
  }

  write(schemaPath, mergedFile)
  Log('    ✅  Created prisma/schema.prisma'.green)
}
