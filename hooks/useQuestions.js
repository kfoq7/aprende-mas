import { QuestionsContext } from '@/context/questions'
import { useContext } from 'react'

export function useQuestions() {
  const context = useContext(QuestionsContext)

  if (context === undefined) {
    throw new Error('useQuestions must be used within a QuestionsProvider')
  }

  return context
}
