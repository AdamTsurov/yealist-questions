import { baseApi } from '@/shared/api/baseApi'
import type { SkillParams, SkillsApiResponse } from '../model/types'

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchSkills: builder.query<SkillsApiResponse, SkillParams>({
      query: (params) => ({
        url: 'skills',
        params: params,
      }),
    }),
  }),
})

export const { useFetchSkillsQuery } = skillApi
