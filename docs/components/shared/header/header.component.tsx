import Link from 'next/link'
import { Container } from 'components/theme'
import { BiBookBookmark } from 'react-icons/bi'
import { IoMdSchool } from 'react-icons/io'
import { FaGithubAlt } from 'react-icons/fa'
import { HeaderStyle } from './header.style'

export interface HeaderI {}

export function HeaderComponent({}: HeaderI) {
  return (
    <HeaderStyle>
      <Container className="container">
        <Link href="/">
          <a className="brand">
            <img src="/assets/image/printer.png" />
            <h2>Printer</h2>
          </a>
        </Link>

        <div className="menu">
          <Link href="/docs">
            <a className="item">
              <BiBookBookmark className="icon" />
              <span>Docs</span>
            </a>
          </Link>
          <a
            className="item"
            href="https://github.com/ChrisCates/Printer"
            target="github"
          >
            <FaGithubAlt className="icon" />
            <span>Github</span>
          </a>
        </div>
      </Container>
    </HeaderStyle>
  )
}
