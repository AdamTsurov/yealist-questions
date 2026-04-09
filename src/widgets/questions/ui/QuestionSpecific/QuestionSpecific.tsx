import styles from './QuestionSpecific.module.scss'
import { useParams } from 'react-router-dom'
import QuestionSideBar from '../QuestionSideBar/QuestionSideBar'
import { QuestionTitle, QuestionAnswers } from '@/entities/questionSpecific'
import { useFetchQuestionByIdQuery } from '@/entities/questions/api/questionApi'
import Spinner from '@/shared/ui/Spinner/Spinner'
import EmptyState from '@/shared/ui/EmptyState/EmptyState'
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage'

const QuestionSpecific = () => {
  const { id } = useParams()
  const { data: question, isLoading, error, refetch } = useFetchQuestionByIdQuery(id)

  if (isLoading) return <Spinner />
  if (!question) return <EmptyState />
  if (error) return <ErrorMessage onRetry={refetch} />

  const { imageSrc, title, description, shortAnswer, longAnswer } = question

  return (
    <div className={styles.specific}>
      <div className={styles.content}>
        <QuestionTitle image={imageSrc} title={title} description={description} />
        <QuestionAnswers type={'short'} shortAnswer={shortAnswer} longAnswer={longAnswer} />
        <QuestionAnswers type={'long'} shortAnswer={shortAnswer} longAnswer={longAnswer} />
      </div>
      <QuestionSideBar data={question} />
    </div>
  )
}

export default QuestionSpecific
