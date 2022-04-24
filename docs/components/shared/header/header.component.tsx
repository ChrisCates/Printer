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
              Docs
            </a>
          </Link>
          {/*
            <Link href="/guides">
              <a className="item">
                <IoMdSchool className="icon" />
                Guides
              </a>
            </Link>
            */}
          <a
            className="item"
            href="https://github.com/ChrisCates/Printer"
            target="github"
          >
            <FaGithubAlt className="icon" />
            Github
          </a>
        </div>
      </Container>
    </HeaderStyle>
  )
}
