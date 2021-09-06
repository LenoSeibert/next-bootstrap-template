import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
export default function Layout({ title, keywords, description, children }) {
  return (
    <Container className="md-container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </Container>
  )
}
Layout.defaultProps = {
  title: 'Titulo',
  description: 'Descrição padrão da pagina',
  keywords: 'Palavra Chave, Palavra Chave, Palavra Chave, Palavra Chave, ',
}
