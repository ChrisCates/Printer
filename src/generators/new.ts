import { join } from 'path'
import { write } from 'fs-jetpack'

import { Log } from '../helpers/log'
import { AppTemplate } from '../templates/new/_app'
import { DocumentTemplate } from '../templates/new/_document'
import { BabelTemplate } from '../templates/new/babel'
import { GitIgnoreTemplate } from '../templates/new/gitignore'
import { IndexTemplate } from '../templates/new/index'
import { PackageTemplate } from '../templates/new/package'
import { ReduxWrapperTemplate } from '../templates/new/redux.wrapper'
import { ReduxReducerTemplate } from '../templates/new/redux.reducer'
import { TSConfigTemplate } from '../templates/new/tsconfig'
import { PrecommitTemplate } from '../templates/new/precommit'
import { EslintrcTemplate } from '../templates/new/eslintrc'
import { ThemeTemplate } from '../templates/new/theme'
import { UtilSessionTemplate } from '../templates/new/util.session'

export async function generateNewProject (path: string = '.') {
  const appPath = join(process.cwd(), path, 'pages', '_app.tsx')
  const documentPath = join(process.cwd(), path, 'pages', '_document.tsx')
  const babelPath = join(process.cwd(), path, '.babelrc')
  const gitignorePath = join(process.cwd(), path, '.gitignore')
  const gitkeepPath = join(process.cwd(), path, '.gitkeep')
  const gitkeepPublicPath = join(process.cwd(), path, 'public', '.gitkeep')
  const indexPath = join(process.cwd(), path, 'pages', 'index.tsx')
  const themePath = join(process.cwd(), path, 'components', 'theme.tsx')
  const utilSessionPath = join(process.cwd(), path, 'util', 'session.ts')
  const packagePath = join(process.cwd(), path, 'package.json')
  const wrapperPath = join(process.cwd(), path, 'redux', 'redux.wrapper.tsx')
  const reducerPath = join(process.cwd(), path, 'redux', 'redux.reducer.tsx')
  const reducersPath = join(process.cwd(), path, 'redux', 'reducers.json')
  const tsconfigPath = join(process.cwd(), path, 'tsconfig.json')
  const precommitPath = join(process.cwd(), path, '.husky', 'pre-commit')
  const eslintrcPath = join(process.cwd(), path, '.eslintrc.js')

  write(babelPath, BabelTemplate)
  Log('    ✅  Created .babelrc'.green)
  write(gitignorePath, GitIgnoreTemplate)
  Log('    ✅  Created .gitignore'.green)
  write(gitkeepPath, '')
  Log('    ✅  Created .gitkeep'.green)
  write(gitkeepPublicPath, '')
  Log('    ✅  Created public/.gitkeep'.green)
  write(appPath, AppTemplate)
  Log('    ✅  Created pages/_app.tsx'.green)
  write(documentPath, DocumentTemplate)
  Log('    ✅  Created pages/_document.tsx'.green)
  write(indexPath, IndexTemplate)
  Log('    ✅  Created pages/index.tsx'.green)
  write(themePath, ThemeTemplate)
  Log('    ✅  Created components/theme.tsx'.green)
  write(utilSessionPath, UtilSessionTemplate)
  Log('    ✅  Created util/util.session.ts'.green)
  write(packagePath, PackageTemplate)
  Log('    ✅  Created package.json'.green)
  write(wrapperPath, ReduxWrapperTemplate)
  Log('    ✅  Created redux/redux.wrapper.tsx'.green)
  write(reducerPath, ReduxReducerTemplate)
  Log('    ✅  Created redux/redux.reducer.tsx'.green)
  write(reducersPath, '[]')
  Log('    ✅  Created redux/reducers.json'.green)
  write(tsconfigPath, TSConfigTemplate)
  Log('    ✅  Created tsconfig.json'.green)
  write(precommitPath, PrecommitTemplate)
  Log('    ✅  Created .husky/pre-commit'.green)
  write(eslintrcPath, EslintrcTemplate)
  Log('    ✅  Created .eslintrc.js'.green)
}
