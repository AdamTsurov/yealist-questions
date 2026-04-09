import type { RootState } from '@/app/store/config/store'
import { createSelector } from '@reduxjs/toolkit'
import { COMPLEXITY_RANGES } from '../config/constans'

const selectQuestionFilters = (state: RootState) => state.questionsFiltersReducer

export const selectComplexityRanges = (state: RootState) =>
  state.questionsFiltersReducer.complexityRanges
export const selectRating = (state: RootState) => state.questionsFiltersReducer.rate
export const selectSkill = (state: RootState) => state.questionsFiltersReducer.skills
export const selectSpecialization = (state: RootState) =>
  state.questionsFiltersReducer.specializations
export const selectPage = (state: RootState) => state.questionsFiltersReducer.page
export const selectTitle = (state: RootState) => state.questionsFiltersReducer.title

export const selectComplexity = createSelector([selectComplexityRanges], (complexityRanges) =>
  complexityRanges.flatMap(
    (rangeId) => COMPLEXITY_RANGES.find((r) => r.id === rangeId)?.values || []
  )
)

export const selectQuestionsParams = createSelector(
  [selectQuestionFilters, selectComplexity],
  ({ page, title, specializations, skills, rate, keywords }, complexity) => ({
    page,
    title,
    specializations,
    skills,
    rate,
    complexity,
    keywords,
  })
)
