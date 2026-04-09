import questionsFiltersReducer from '@/feature/questionFilters/model/questionsFiltersSlice'
import { baseApi } from '@/shared/api/baseApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { [baseApi.reducerPath]: baseApi.reducer, questionsFiltersReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
