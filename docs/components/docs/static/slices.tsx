import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import options from '../options'
import slice from '../template/slice'
import reducer from '../template/reducer'

export default function Slices() {
  const [code, setCode] = useState(slice)
  const [active, setActive] = useState('slice')
  const [language, setLanguage] = useState('typescript')

  return (
    <>
      <h3>Creating Slices</h3>
      <p>
        You can run the following to create a new Slice. This generates a
        Printer styled Redux Slice. The following uses an example path of
        &quot;storage&quot;.
      </p>
      <div className="code">printer slice [path]</div>

      <div className="vscode">
        <div className="vscode-nav">
          <a className="header">
            <BiCodeAlt className="icon" />
            New Slice
          </a>
          <a
            className={`link ${active === 'slice' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(slice)
              setActive('slice')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            redux/slice/storage.tsx
          </a>
          <a
            className={`link ${active === 'reducer' ? 'active' : ''}`}
            onClick={(e) => {
              setCode(reducer)
              setActive('reducer')
              setLanguage('typescript')
            }}
          >
            <SiNextdotjs className="icon" />
            redux/reducer.tsx
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
