import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import Layout from '@/components/layouts/article'
import { useQuestions } from '@/hooks/useQuestions'

export default function GameOver() {
  const { questions, totalQuestions } = useQuestions()
  const colorBackground = useColorModeValue('whiteAlpha.900', 'whiteAlpha.500')

  console.log({ questions })

  return (
    <Layout>
      <Container>
        <Heading fontSize={20} mb={4}>
          Respustas
        </Heading>

        <Box boxShadow="base" p={6} rounded="md">
          <Box mb={4}>
            <Heading as="h3" fontSize="4xl">
              Game over!
            </Heading>
            <Box as="h3" fontSize="xl">
              Tu score es: {4}/{totalQuestions}
            </Box>
          </Box>

          {questions &&
            questions.map(question => (
              <Box
                key={question.correct_answer}
                borderRadius="lg"
                bg={colorBackground}
                p={6}
                m={4}
              >
                <div className="answer-list">
                  <Box fontSize="md" fontWeight="bold">
                    Q: {question.question}
                  </Box>
                  <ul>
                    <li>You answered: {question.anwsers[1]}</li>
                    <li>Correct answer: {question.correct_answer}</li>
                  </ul>
                </div>
              </Box>
            ))}
        </Box>
      </Container>
    </Layout>
  )
}
