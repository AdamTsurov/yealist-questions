import { useState } from 'react'
import styles from './QuestionPage.module.scss'
import { QuestionFilters, QuestionList } from '@/widgets/questions'

function QuestionPage() {
  const [showFilters, setShowFilters] = useState(false)

  const toggleVisibleSidebar = () => {
    setShowFilters((prev) => !prev)
  }

  return (
    <main className={styles.main}>
      <QuestionList showFilters={showFilters} toggleVisibleSidebar={toggleVisibleSidebar} />
      <QuestionFilters showFilters={showFilters} toggleVisibleSidebar={toggleVisibleSidebar} />
    </main>
  )
}

export default QuestionPage
