import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import Paragraph from '@/components/paragraph'

const Home = () => {
  return (
    <Container p={6}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, Welcome to our math course for free
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Aprende +
          </Heading>
          <p>We will help improve your habilitis</p>
        </Box>

        <Box textAlign="center" my={4}>
          <Button
            as={NextLink}
            href="https://aprende-mas.vercel.app/quiz"
            rightIcon={<CheckIcon />}
            colorScheme="teal"
          >
            Get started
          </Button>
        </Box>
      </Box>

      <div>
        <Heading as="h3" variant="section-title">
          Our mision
        </Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Paragraph>
      </div>

      <div>
        <Heading as="h3" variant="section-title">
          Temas
        </Heading>
        <Paragraph>Armetica - Algebra</Paragraph>
      </div>
    </Container>
  )
}

export default Home
