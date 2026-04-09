import type { IQuestionApiResponse } from '@/entities/questions/model/types'
import { selectPage } from '@/feature/questionFilters/model/questionsFiltersSelectors'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import Pagination from '@/shared/ui/Pagination/Pagination'

interface QuestionsPaginationProps {
  questionResponse: IQuestionApiResponse
}

const QuestionsPagination = ({ questionResponse }: QuestionsPaginationProps) => {
  const { total, limit } = questionResponse

  const page = useAppSelector(selectPage)

  const totalPages = Math.ceil(total / limit)

  return <Pagination totalPages={totalPages} currentPage={page} />
}

export default QuestionsPagination
