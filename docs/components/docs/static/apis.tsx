import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import options from '../options'
import api from '../template/api'

export default function Pages() {
  const [code, setCode] = useState(api)
  const [active, setActive] = useState('api')
  const [language, setLanguage] = useState('typescript')

  return (
    <>
      <h3>Creating API Routes</h3>
      <p>
        You can run the following to create a standard new API route. This
        generates a Printer styled API route. The following uses an example path
        of &quot;test&quot;. API routes will automatically inject iron-session
        into the generated code.
      </p>
      <div className="code">printer api [path]</div>

      <div className="vscode">
        <div className="vscode-nav">
          <a className="header">
            <BiCodeAlt className="icon" />
            New API
          </a>
          <a
            className={`link ${active === 'api' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(api)
              setActive('api')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            pages/api/test.tsx
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
