import { fetchAxios } from '@/lib/axios'

export const getQuestionList = async ({ amount, difficulty }) => {
  const response = await fetchAxios.get('', {
    params: {
      amount,
      difficulty,
      type: 'multiple',
      category: 19
    }
  })

  const { results } = response.data

  return results
}
