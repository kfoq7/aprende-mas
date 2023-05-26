import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'
import Layout from '@/components/layouts/article'
import ProgressBar from '@/components/progress-bar'
import QuestionCard from '@/components/question-card'
import { useQuestions } from '@/hooks/useQuestions'

export default function Quiz() {
  const { question, totalQuestions, currentQuestion, gameOver } = useQuestions()
  const router = useRouter()

  if (gameOver) {
    return router.push('game-over')
  }

  return (
    <Layout title="Quiz">
      <Container p={4}>
        <ProgressBar total={totalQuestions} amount={currentQuestion} />

        {question && <QuestionCard />}
      </Container>
    </Layout>
  )
}
