import Link from 'next/link'
import { FiGithub, FiBook } from 'react-icons/fi'
import { TitleStyle } from './title.style'

export interface TitleI {}

export function TitleComponent({}: TitleI) {
  return (
    <TitleStyle>
      <div className="brand">
        <img src="/assets/image/printer.png" />
        <div className="text">
          <h1>Printer</h1>
          <p>A code generation tool for Next.js, Redux, Prisma Development.</p>
          <div className="buttons">
            <a
              className="button"
              href="https://github.com/ChrisCates/Printer"
              target="github"
            >
              <FiGithub className="i" />
              Github
            </a>
            <Link href="/docs">
              <a className="button">
                <FiBook className="i" />
                Docs
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="window">
          <div className="window-buttons">
            <div className="window-button red" />
            <div className="window-button yellow" />
            <div className="window-button green" />
          </div>
          <div className="window-inner">
            <textarea
              value={`λ printer new project
👷  Generating new Printer project
    ✅  Created .babelrc
    ✅  Created .gitignore
    ✅  Created .gitkeep
    ✅  Created public/.gitkeep
    ✅  Created pages/_app.tsx
    ✅  Created pages/_document.tsx
    ✅  Created pages/index.tsx
    ✅  Created package.json
    ✅  Created redux/redux.wrapper.tsx
    ✅  Created redux/redux.reducer.tsx
    ✅  Created redux/reducers.json
    ✅  Created tsconfig.json`}
            />
          </div>
        </div>
      </div>
    </TitleStyle>
  )
}
