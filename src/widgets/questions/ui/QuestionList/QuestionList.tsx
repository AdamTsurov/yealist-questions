import { OpenIcon as OpenButtonIcon } from '@/shared/assets/filters'
import itemImage from '@/assets/icons/list-item-img.png'
import styles from './QuestionList.module.scss'
import { QuestionItem } from '@/entities/questions'
import { QuestionsPagination } from '@/feature/questionPagination'
import { useFetchQuestionsQuery } from '@/entities/questions/api/questionApi'
import { selectQuestionsParams } from '@/feature/questionFilters/model/questionsFiltersSelectors'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import Spinner from '@/shared/ui/Spinner/Spinner'
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage'
import EmptyState from '@/shared/ui/EmptyState/EmptyState'
interface QuestionListProps {
  showFilters: boolean
  toggleVisibleSidebar: () => void
}

const QuestionList = ({ showFilters, toggleVisibleSidebar }: QuestionListProps) => {
  const params = useAppSelector(selectQuestionsParams)
  const { data: questions, error, isLoading, refetch } = useFetchQuestionsQuery(params)

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage onRetry={refetch} />
  if (!questions || questions.data.length === 0) return <EmptyState />

  return (
    <div className={styles.questions}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.questionsTitle}>Вопросы React, JavaScript</h2>
        <button
          className={`${styles.sidebarOpenButton} ${showFilters ? styles.open : ''}`.trim()}
          onClick={toggleVisibleSidebar}
        >
          <OpenButtonIcon className={styles.openIcon} />
        </button>
      </div>
      <ul className={styles.list}>
        {questions.data.map((item) => (
          <QuestionItem
            key={item.id}
            id={item.id}
            title={item.title}
            shortAnswer={item.shortAnswer}
            rate={item.rate}
            complexity={item.complexity}
            itemImage={itemImage}
          />
        ))}
      </ul>
      <QuestionsPagination questionResponse={questions} />
    </div>
  )
}

export default QuestionList
