import QuestionList from '@/widgets/questions/ui/QuestionList/QuestionList'
import QuestionSideBar from '@/widgets/questions/ui/QuestionSideBar/QuestionSideBar'
import { useState } from 'react'
import styles from './QuestionPage.module.scss'

function QuestionPage() {
  const [showFilters, setShowFilters] = useState(false)
  

  const toggleVisibleSidebar = () => {
    setShowFilters((prev) => !prev)
  }

  return (
    <main className={styles.main}>
      <QuestionList showFilters={showFilters} toggleVisibleSidebar={toggleVisibleSidebar} />
      <QuestionSideBar
        showFilters={showFilters}
        toggleVisibleSidebar={toggleVisibleSidebar}
      />
    </main>
  )
}

export default QuestionPage
