import { join } from 'path'
import { write } from 'fs-jetpack'

import { Log } from '../helpers/log'
import { NewSchemaTemplate } from '../templates/prisma/new.schema'

export async function generatePrismaSchema (name: string) {
  const schemaPath = join(process.cwd(), 'prisma', `${name}.prisma`)

  write(schemaPath, NewSchemaTemplate(name))
  Log(`    ✅  Created prisma/${name}.schema`.green)
}
