import type { Skill } from "@/entities/skills/model/types"
import type { Specialization } from "@/entities/specializations/model/types"

export type QuestionByIdParams = string | undefined
export type TypeBuildParams = (params: IQuestionParams) => IQueryParams

export interface IQuestion {
  id: number
  title: string
  description: string
  code: string
  imageSrc: string
  keywords: string[]
  longAnswer: string
  shortAnswer: string
  complexity: number
  rate: number
  questionSkills: Skill[]
  questionSpecializations: Specialization[]
}

export interface IQuestionApiResponse {
  total: number
  page: number
  limit: number
  data: IQuestion[]
}

export interface IQuestionParams {
  skills?: number[]
  specializations?: number[]
  rate?: number[]
  complexity?: number[]
  keywords?: string
  page?: number
  limit?: number
  title?: string
}

export interface IQueryParams {
    specialization?: string
    skills?: string
    rate?: string
    complexity?: string
    keywords?: string
    title?: string
    page?: number
    limit?: number
}


