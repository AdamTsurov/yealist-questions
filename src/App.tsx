import './App.scss'
import FiltersOpenButtonIcon from '@/assets/icons/open-skills-side.svg?react'
import FiltersSearchInputIcon from '@/assets/icons/search-skills-side.svg?react'
import FigmaSkillIcon from '@/assets/icons/skillIcons/figma-skill-icon.svg?react'
import { useRef, useState } from 'react'

const COLLAPSED_HEIGHT = 200
const EXPANDED_HEIGHT = 500

function App() {
  const [showFilters, setShowFilters] = useState(false)
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [showOpenAllSkillsButton, setShowOpenAllSkillsButton] = useState(false)
  const skillListRef = useRef(null)

  const toggleVisibleSidebar = () => {
    setShowFilters((prev) => !prev)
  }

  return (
    <div className="app">
      <main className="main">
        <section className="list-questions">
          <div className="list-title-wrapper">
            <h2 className="list-questions-title">Вопросы React, JavaScript</h2>
            <button className={`filters-sidebar-open-button ${showFilters ? 'open' : ''}`}>
              <FiltersOpenButtonIcon className="skills-open-icon" onClick={toggleVisibleSidebar} />
            </button>
          </div>
        </section>
        <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
          <button className="filters-sidebar-close-button" onClick={toggleVisibleSidebar}>
            <FiltersOpenButtonIcon className="filters-close-icon" />
          </button>
          <label htmlFor="skill-input" className="filters-search-input">
            <FiltersSearchInputIcon className="filters-search-icon" />
            <input id="skill-input" type="text" placeholder="Введите запрос..." />
          </label>
          <div className="skills-question">
            <span className="skills-side-title">Категории вопросов</span>
            <div className="skills">
              <button className="skill-button">
                <FigmaSkillIcon />
                Figma
              </button>
              <button className="skill-button">
                {/* <svg /> */}
                React.js
              </button>
              <button className="skill-button">
                <FigmaSkillIcon />
                Wireframing
              </button>
              <button className="skill-button">
                {/* <svg /> */}
                Figma
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
