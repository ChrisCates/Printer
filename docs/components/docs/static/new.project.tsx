import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { ImCss3 } from 'react-icons/im'
import { BiCodeAlt, BiCog, BiGitBranch } from 'react-icons/bi'
import { SiBabel, SiNpm, SiNextdotjs } from 'react-icons/si'
import options from '../options'
import AppTemplate from 'templates/_app.template'
import DocumentTemplate from 'templates/_document.template'
import IndexTemplate from 'templates/index.template'
import SessionTemplate from 'templates/session.template'
import ResetTemplate from 'templates/reset.template'
import PrinterTemplate from 'templates/printer.template'
import PackageTemplate from 'templates/package.template'
import BabelTemplate from 'templates/babelrc.template'
import ReduxWrapperTemplate from 'templates/wrapper.template'
import ReduxReducerTemplate from 'templates/reducer.template'
import GitIgnoreTemplate from 'templates/gitignore.template'
import TSConfigTemplate from 'templates/tsconfig.template'
import PrecommitTemplate from 'templates/precommit.template'
import EslintrcTemplate from 'templates/eslintrc.template'

export default function NewProject() {
  const [code, setCode] = useState(PackageTemplate)
  const [active, setActive] = useState('package.json')
  const [language, setLanguage] = useState('json')

  return (
    <>
      <h3>Creating A New Project</h3>
      <p>
        You can run the following to create a new project. This generates a
        baseline Printer template for you to get started developing.
      </p>
      <div className="code">printer new [path]</div>

      <div className="vscode">
        <div className="vscode-nav">
          <a className="header">
            <BiCodeAlt className="icon" />
            New Project
          </a>
          <a
            className={`link ${active === 'package.json' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(PackageTemplate)
              setActive('package.json')
              setLanguage('json')
            }}
          >
            <SiNpm className="icon" />
            package.json
          </a>
          <a
            className={`link ${active === '_app.tsx' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(AppTemplate)
              setActive('_app.tsx')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            pages/_app.tsx
          </a>
          <a
            className={`link ${active === '_document.tsx' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(DocumentTemplate)
              setActive('_document.tsx')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            pages/_document.tsx
          </a>
          <a
            className={`link ${active === 'pages/index.tsx' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(IndexTemplate)
              setActive('pages/index.tsx')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            pages/index.tsx
          </a>
          <a
            className={`link ${active === 'util/session.ts' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(SessionTemplate)
              setActive('util/session.ts')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            util/session.ts
          </a>
          <a
            className={`link ${active === 'wrapper.tsx' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(ReduxWrapperTemplate)
              setActive('wrapper.tsx')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            redux/wrapper.tsx
          </a>
          <a
            className={`link ${active === 'reducer.tsx' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(ReduxReducerTemplate)
              setActive('reducer.tsx')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            redux/reducer.tsx
          </a>
          <a
            className={`link ${active === 'reset.css' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(ResetTemplate)
              setActive('reset.css')
              setLanguage('css')
            }}
          >
            <ImCss3 className="icon" />
            public/assets/css/reset.css
          </a>
          <a
            className={`link ${active === 'fonts.css' ? 'active' : ''}`}
            onClick={(e) => {
              setCode('')
              setActive('fonts.css')
              setLanguage('css')
            }}
          >
            <ImCss3 className="icon" />
            public/assets/css/fonts.css
          </a>
          <a
            className={`link ${active === 'printer.css' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(PrinterTemplate)
              setActive('printer.css')
              setLanguage('css')
            }}
          >
            <ImCss3 className="icon" />
            public/assets/css/printer.css
          </a>
          <a
            className={`link ${active === 'tsconfig.json' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(TSConfigTemplate)
              setActive('tsconfig.json')
              setLanguage('json')
            }}
          >
            <BiCog className="icon" />
            tsconfig.json
          </a>
          <a
            className={`link ${active === 'husky' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(PrecommitTemplate)
              setActive('husky')
              setLanguage('shell')
            }}
          >
            <BiCog className="icon" />
            .husky/pre-commit
          </a>
          <a
            className={`link ${active === 'eslint' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(EslintrcTemplate)
              setActive('eslint')
              setLanguage('javascript')
            }}
          >
            <BiCog className="icon" />
            .eslintrc.js
          </a>
          <a
            className={`link ${active === '.babelrc' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(BabelTemplate)
              setActive('.babelrc')
              setLanguage('json')
            }}
          >
            <SiBabel className="icon" />
            .babelrc
          </a>
          <a
            className={`link ${active === '.gitignore' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(GitIgnoreTemplate)
              setActive('.gitignore')
              setLanguage('shell')
            }}
          >
            <BiGitBranch className="icon" />
            .gitignore
          </a>
          <a className="link">
            <BiGitBranch className="icon" />
            .gitkeep
          </a>
          <a className="link">
            <BiGitBranch className="icon" />
            public/.gitkeep
          </a>
        </div>
        <div className="vscode-content">
          <Editor
            width="100%"
            height="100%"
            theme="vs-dark"
            loading=""
            options={options}
            language={language}
            value={code}
          />
        </div>
      </div>
    </>
  )
}
