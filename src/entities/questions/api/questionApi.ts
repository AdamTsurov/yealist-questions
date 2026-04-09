import type { IQuestion, IQuestionApiResponse, IQuestionParams, QuestionByIdParams } from '@/entities/questions/model/types'
import { baseApi } from '@/shared/api/baseApi'
import { buildQueryParams } from '../lib/buildQueryParams'

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchQuestions: builder.query<IQuestionApiResponse, IQuestionParams>({
      query: (params) => ({
        url: 'questions/public-questions',
        params: buildQueryParams(params)
      }),
    }),
    fetchQuestionById: builder.query<IQuestion, QuestionByIdParams>({
      query: (id) => ({
        url: `questions/public-questions/${id}`
      }),
    })
  }),
})

export const { useFetchQuestionsQuery, useFetchQuestionByIdQuery } = questionApi
