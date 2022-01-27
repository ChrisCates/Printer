import { join } from 'path'
import { write } from 'fs-jetpack'

import { Log } from '../helpers/log'
import { PrismaTemplate } from '../templates/prisma/prisma'
import { SchemaTemplate } from '../templates/prisma/schema'
import { EnvTemplate } from '../templates/prisma/env'

export async function generatePrisma () {
  const prismaPath = join(process.cwd(), 'prisma', 'prisma.tsx')
  const schemaPath = join(process.cwd(), 'prisma', 'schema.prisma')
  const envPath = join(process.cwd(), '.env')

  write(prismaPath, PrismaTemplate)
  Log('    ✅  Created prisma/prisma.tsx'.green)
  write(schemaPath, SchemaTemplate)
  Log('    ✅  Created prisma/schema.prisma'.green)
  write(envPath, EnvTemplate)
  Log('    ✅  Created .env'.green)
}
