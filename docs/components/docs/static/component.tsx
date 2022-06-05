import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import options from '../options'
import component from 'templates/component.template'
import connect from 'templates/connect.template'
import style from 'templates/style.template'
import test from 'templates/test.template'
import index from 'templates/index.template'

export default function Components() {
  const [code, setCode] = useState(component)
  const [active, setActive] = useState('component')
  const [language, setLanguage] = useState('typescript')

  return (
    <>
      <h3>Creating A New Component</h3>
      <p>
        You can run the following to create a new component. This generates a
        Printer styled component. The following uses an example path of
        &quot;test&quot;.
      </p>
      <div className="code">printer component [path]</div>

      <div className="vscode">
        <div className="vscode-nav">
          <a className="header">
            <BiCodeAlt className="icon" />
            New Component
          </a>
          <a
            className={`link ${active === 'component' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(component)
              setActive('component')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            test/test.component.tsx
          </a>
          <a
            className={`link ${active === 'connect' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(connect)
              setActive('connect')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            test/test.connect.tsx
          </a>
          <a
            className={`link ${active === 'style' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(style)
              setActive('style')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            test/test.style.tsx
          </a>
          <a
            className={`link ${active === 'test' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(test)
              setActive('test')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            test/test.test.tsx
          </a>
          <a
            className={`link ${active === 'index' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(index)
              setActive('index')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            test/index.tsx
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
