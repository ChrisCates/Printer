import { DocEnum } from 'redux/slice/slice.docs'
import { NavStyle } from './nav.style'

export interface NavI {
  selected: DocEnum
  setSelected(payload: DocEnum): void
}

export function NavComponent({ selected, setSelected }: NavI) {
  return (
    <NavStyle>
      <a className="brand">
        <img src="/assets/image/printer.png" />
        <h2>Docs</h2>
      </a>

      <h3>Introduction</h3>
      <a className={`link ${selected === DocEnum.GettingStarted ? 'active' : ''}`} onClick={e => setSelected(DocEnum.GettingStarted)}>Getting Started</a>
      <a className={`link ${selected === DocEnum.Structure ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Structure)}>The Structure</a>

      <h3>Code Generation</h3>
      <a className={`link ${selected === DocEnum.New ? 'active' : ''}`} onClick={e => setSelected(DocEnum.New)}>New Project</a>
      <a className={`link ${selected === DocEnum.Components ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Components)}>Components</a>
      <a className={`link ${selected === DocEnum.Pages ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Pages)}>Pages</a>
      <a className={`link ${selected === DocEnum.Api ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Api)}>API Routes</a>
      <a className={`link ${selected === DocEnum.Slices ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Slices)}>Slices</a>
      <a className={`link ${selected === DocEnum.Prisma ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Prisma)}>Prisma</a>

      <h3>The Future</h3>
      <a className={`link ${selected === DocEnum.Types ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Types)}>Types</a>
      <a className={`link ${selected === DocEnum.Injectables ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Injectables)}>Injectables</a>
      <a className={`link ${selected === DocEnum.Overwrites ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Overwrites)}>Overwrites</a>
      <a className={`link ${selected === DocEnum.Themes ? 'active' : ''}`} onClick={e => setSelected(DocEnum.Themes)}>Themes</a>
    </NavStyle>
  )
}
