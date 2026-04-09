import { setPage } from '@/feature/questionFilters/model/questionsFiltersSlice'
import { useAppDispatch } from './redux'

export const usePagination = (totalPages: number, currentPage: number) => {
  const dispatch = useAppDispatch()

  const getPageNumbers = () => {
    const pages = []
    const showRange = 2

    if (totalPages < 8) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
      pages.push(1)

      const startPage = Math.max(2, currentPage - showRange)
      const endPage = Math.min(totalPages - 1, currentPage + showRange)

      if (startPage > 2) {
        pages.push('...')
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      if (endPage < totalPages - 1) {
        pages.push('...')
      }

      pages.push(totalPages)
    }

    return pages
  }

  const pages = getPageNumbers()

  const handleChangePage = (pageNumber: number) => {
    dispatch(setPage(pageNumber))
  }

  const handleNextPage = () => {
    dispatch(setPage(currentPage + 1))
  }

  const handlePrevPage = () => {
    dispatch(setPage(currentPage - 1))
  }

  return {
    pages,
    handleChangePage,
    handleNextPage,
    handlePrevPage,
  }
}
