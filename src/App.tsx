import { useState } from 'react'
import QuestionSideBar from '@/widgets/questions/ui/QuestionSideBar/QuestionSideBar'
import QuestionList from './widgets/questions/ui/QuestionList/QuestionList'
import './App.scss'

function App() {
  const [showFilters, setShowFilters] = useState(false)
  

  const toggleVisibleSidebar = () => {
    setShowFilters((prev) => !prev)
  }

  return (
    <main className="main">
      <QuestionList showFilters={showFilters} toggleVisibleSidebar={toggleVisibleSidebar} />
      <QuestionSideBar
        showFilters={showFilters}
        toggleVisibleSidebar={toggleVisibleSidebar}
      />
    </main>
  )
}

export default App
