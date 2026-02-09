import { useState } from 'react'
import QuestionSideBar from '@/widgets/questions/ui/QuestionSideBar/QuestionSideBar'
import QuestionList from './widgets/questions/ui/QuestionList/QuestionList'
import './App.scss'

const COLLAPSED_HEIGHT = 120
const EXPANDED_HEIGHT = 500

function App() {
  const [showFilters, setShowFilters] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const toggleVisibleSidebar = () => {
    setShowFilters((prev) => !prev)
  }

  return (
    <main className="main">
      <QuestionList showFilters={showFilters} toggleVisibleSidebar={toggleVisibleSidebar} />
      <QuestionSideBar
        showFilters={showFilters}
        isOpen={isOpenSidebar}
        setIsOpen={setIsOpenSidebar}
        toggleVisibleSidebar={toggleVisibleSidebar}
      />
    </main>
  )
}

export default App
