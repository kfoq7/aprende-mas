import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/layouts/main'
import theme from '@/lib/theme'
import { QuestionsProvider } from '@/context/questions'

export default function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <QuestionsProvider>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </QuestionsProvider>
    </ChakraProvider>
  )
}
