import { createSlice } from '@reduxjs/toolkit'
import type { QuestionFiltersState } from '../types'

const initialState: QuestionFiltersState = {
  page: 1,
  title: '',
  specializations: [],
  skills: [],
  rate: [],
  complexityRanges: [],
  keywords: '',
}

export const questionsFiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = Number(action.payload)
    },

    setTitle: (state, action) => {
      state.title = action.payload
    },

    setSpecializations: (state, action) => {
      state.specializations = action.payload
    },

    setKeywords: (state, action) => {
      state.keywords = action.payload
    },

    setSkills: (state, action) => {
      state.skills = action.payload
    },

    setRate: (state, action) => {
      state.rate = action.payload
    },

    toggleSelectSpecialization: (state, action) => {
      const id = action.payload

      if (state.specializations.includes(id)) {
        state.specializations = state.specializations.filter((item) => item !== id)
      } else {
        state.specializations.push(id)
      }
    },

    toggleSelectSkill: (state, action) => {
      const id = action.payload

      if (state.skills.includes(id)) {
        state.skills = state.skills.filter((item) => item !== id)
      } else {
        state.skills.push(id)
      }
    },

    toggleSelectRating: (state, action) => {
      const id = action.payload

      if (state.rate.includes(id)) {
        state.rate = state.rate.filter((item) => item !== id)
      } else {
        state.rate.push(id)
      }
    },

    toggleSelectComplexity: (state, action) => {
      const id = action.payload

      if (state.complexityRanges.includes(id)) {
        state.complexityRanges = state.complexityRanges.filter((item) => item !== id)
      } else {
        state.complexityRanges.push(id)
      }
    },
    
    resetFilters: () => initialState,
  },
})

export const {
  setPage,
  setRate,
  setTitle,
  setSkills,
  setSpecializations,
  toggleSelectSpecialization,
  toggleSelectSkill,
  setKeywords,
  toggleSelectRating,
  toggleSelectComplexity,
  resetFilters,
} = questionsFiltersSlice.actions

export default questionsFiltersSlice.reducer
