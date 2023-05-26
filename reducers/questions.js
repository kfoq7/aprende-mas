import { useReducer, useEffect } from 'react'
import { getQuestionList } from '@/services/questions'

const questions = []

const initialState = {
  question: null,
  questions,
  totalQuestions: questions.length,
  currentQuestion: 0,
  gameOver: false
}

const QUESTIONS_ACTION_TYPES = {
  INIT_QUESTIONS: 'INIT_QUESTIONS',
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREVIOUS_QUESTION: 'PREVIOUS_QUESTION'
}

const UPDATE_STATE_BY_ACTION = {
  [QUESTIONS_ACTION_TYPES.INIT_QUESTIONS]: (state, action) => {
    const { questions } = action.payload
    const questionsMapping = questions.map(question => {
      const { incorrect_answers, correct_answer } = question

      return {
        ...question,
        anwsers: [...incorrect_answers, correct_answer]
      }
    })

    return {
      ...state,
      questions: questionsMapping,
      totalQuestions: questions.length,
      question: questionsMapping[state.currentQuestion]
    }
  },
  [QUESTIONS_ACTION_TYPES.NEXT_QUESTION]: (state, action) => {
    const { questions } = state
    const { currentQuestion } = action.payload

    return {
      ...state,
      currentQuestion,
      question: questions[currentQuestion],
      gameOver: currentQuestion === questions.length
    }
  },
  [QUESTIONS_ACTION_TYPES.PREVIOUS_QUESTION]: (state, action) => {
    const { currentQuestion } = action.payload
    return {
      ...state,
      currentQuestion,
      question: state.questions[currentQuestion]
    }
  }
}

const reducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}

export function useQuestionReducer() {
  const [
    { question, questions, currentQuestion, totalQuestions, gameOver },
    dispatch
  ] = useReducer(reducer, initialState)

  const nextQuestion = () => {
    dispatch({
      type: 'NEXT_QUESTION',
      payload: {
        currentQuestion: currentQuestion + 1
      }
    })
  }

  const previousQuestion = () => {
    dispatch({
      type: 'PREVIOUS_QUESTION',
      payload: {
        currentQuestion: currentQuestion - 1
      }
    })
  }

  useEffect(() => {
    getQuestionList({ amount: 10 })
      .then(questions =>
        dispatch({
          type: 'INIT_QUESTIONS',
          payload: { questions }
        })
      )
      .catch(err => console.log(err))
  }, [])

  return {
    question,
    questions,
    nextQuestion,
    previousQuestion,
    totalQuestions,
    currentQuestion,
    gameOver
  }
}
