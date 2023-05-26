import { Button } from '@chakra-ui/react'

export default function AnswerButton({ children }) {
  return (
    <Button colorScheme="teal" w="100%">
      {children}
    </Button>
  )
}
