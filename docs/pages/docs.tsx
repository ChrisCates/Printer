import { Container } from 'components/theme'
import { Header } from 'components/shared/header'
import { Footer } from 'components/shared/footer'
import { Nav } from 'components/docs/nav'
import { Content } from 'components/docs/content'

export default function Index() {
  return (
    <>
      <Header />
      <Container className="flex-wrap" style={{ minWidth: '1200px' }}>
        <Nav />
        <Content />
      </Container>
      <Footer />
    </>
  )
}
