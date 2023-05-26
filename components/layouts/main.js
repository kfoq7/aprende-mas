import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

export default function Main({ children, router }) {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Aprende +</title>
      </Head>

      <Navbar router={router} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
