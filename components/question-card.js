import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { useQuestions } from '@/hooks/useQuestions'

export default function QuestionCard() {
  const { question, nextQuestion } = useQuestions()

  return (
    <Box
      p={4}
      m={3}
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.500')}
    >
      <Heading as="h3" size="lg" textAlign="justify">
        {question.question}
      </Heading>

      <SimpleGrid columns={[2, null, 3]} spacing="20px" p={3} mb="10px">
        {question.anwsers.map(answer => (
          <Box key={answer} h="8">
            <Button colorScheme="teal" w="100%" mt={2} onClick={() => {}}>
              {answer}
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      <Box p={4}>
        <Button colorScheme="purple" w="100%" onClick={nextQuestion}>
          Next
        </Button>
      </Box>
    </Box>
  )
}
