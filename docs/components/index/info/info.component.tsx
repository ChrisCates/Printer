import { Container } from 'components/theme'
import Link from 'next/link'
import { InfoStyle } from './info.style'

export interface InfoI {}

export function InfoComponent({}: InfoI) {
  return (
    <InfoStyle>
      <Container>
        <h3>Why Printer?</h3>
        <p>
          Every front end project involves a lot of boilerplate. Printer reduces
          the need to spend time writing boilerplate to almost zero. The
          principle approach of Printer is to automate anything trivial in
          Next.js development.
        </p>
        <h3>How do you use Printer?</h3>
        <p>
          Install it by running the command below. Then follow the{' '}
          <Link href="/docs">
            <a>docs over here.</a>
          </Link>
        </p>
        <div className="code">npm install -g @chriscates/printer</div>
        <h3>Free to use</h3>
        <p>Just don&apos;t fork it and claim it as yours. Thank you.</p>
      </Container>
    </InfoStyle>
  )
}
