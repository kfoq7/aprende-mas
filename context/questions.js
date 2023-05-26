import { createContext } from 'react'
import { useQuestionReducer } from '@/reducers/questions'

export const QuestionsContext = createContext()

export function QuestionsProvider({ children }) {
  const reducer = useQuestionReducer()

  return (
    <QuestionsContext.Provider
      value={{
        ...reducer
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}
