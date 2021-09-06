import Head from 'next/head'
import Layout from '../components/Layout'
import { Container, Row, Card, Button } from 'react-bootstrap'


const Testando = <h1>Testando JSX</h1>
export default function Teste() {
  return (

    <Layout>
      <Card>
        <Button>
          <h1>Página</h1>
        </Button>
        {Testando}
      </Card>
    </Layout>
  )
}