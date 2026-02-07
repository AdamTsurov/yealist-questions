import './App.scss'
import FiltersOpenButtonIcon from '@/assets/icons/open-skills-side.svg?react'
import FiltersSearchInputIcon from '@/assets/icons/search-skills-side.svg?react'
import FigmaSkillIcon from '@/assets/icons/skillIcons/figma-skill-icon.svg?react'
import { useEffect, useRef, useState } from 'react'

const COLLAPSED_HEIGHT = 120
const EXPANDED_HEIGHT = 500

function App() {
  const [showFilters, setShowFilters] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showExpandBtn, setShowExpandBtn] = useState(false)
  const skillListRef = useRef<HTMLDivElement>(null)

  const skills = [
    { id: 1, title: 'Figma' },
    { id: 2, title: 'Wireframing' },
    { id: 3, title: 'React' },
    { id: 4, title: 'Wireframing' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
      { id: 5, title: 'Figma' },
      { id: 6, title: 'React' },
      { id: 5, title: 'Figma' },
      { id: 6, title: 'React' },
      { id: 5, title: 'Figma' },
      { id: 6, title: 'React' },
      { id: 5, title: 'Figma' },
      { id: 6, title: 'React' },

  ]

  const toggleVisibleSidebar = () => {
    setShowFilters((prev) => !prev)
  }

  useEffect(() => {
    const checkHeight = () => {
      if (skillListRef.current) {
        const isToBig = skillListRef.current.scrollHeight > COLLAPSED_HEIGHT
        setShowExpandBtn(isToBig)
      }
    }
    checkHeight()

    window.addEventListener('resize', checkHeight)

    return () => window.removeEventListener('resize', checkHeight)
  }, [skills])

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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas veritatis eaque in neque ex suscipit aliquid odit facilis esse illo, nulla est ducimus dolores sit minima laborum temporibus error.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas veritatis eaque in neque ex suscipit aliquid odit facilis esse illo, nulla est ducimus dolores sit minima laborum temporibus error.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas veritatis eaque in neque ex suscipit aliquid odit facilis esse illo, nulla est ducimus dolores sit minima laborum temporibus error.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas veritatis eaque in neque ex suscipit aliquid odit facilis esse illo, nulla est ducimus dolores sit minima laborum temporibus error.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas veritatis eaque in neque ex suscipit aliquid odit facilis esse illo, nulla est ducimus dolores sit minima laborum temporibus error.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas veritatis eaque in neque ex suscipit aliquid odit facilis esse illo, nulla est ducimus dolores sit minima laborum temporibus error.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas veritatis eaque in neque ex suscipit aliquid odit facilis esse illo, nulla est ducimus dolores sit minima laborum temporibus error.
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
            <div
              className="skills"
              ref={skillListRef}
              style={{
                maxHeight: isOpen ? '200px' : `${COLLAPSED_HEIGHT}px`,
                overflow: 'hidden',
                overflowY: isOpen ? 'auto' : 'hidden',
                transition: 'max-height 0.3s ease-in-out',
              }}
            >
              {skills.map((skill) => (
                <button className="skill-button">
                  <FigmaSkillIcon />
                  {skill.title}
                </button>
              ))}
            </div>
            {showExpandBtn && (
              <button className={'skillsExpandButton'} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Свернуть' : 'Показать всё'}
              </button>
            )}
          </div>
          <button className="filters-sidebar-close-button" onClick={toggleVisibleSidebar}>
            <FiltersOpenButtonIcon className="filters-close-icon" />
          </button>
          <label htmlFor="skill-input" className="filters-search-input">
            <FiltersSearchInputIcon className="filters-search-icon" />
            <input id="skill-input" type="text" placeholder="Введите запрос..." />
          </label>
          <div className="skills-question">
            <span className="skills-side-title">Категории вопросов</span>
            <div
              className="skills"
              ref={skillListRef}
              style={{
                maxHeight: isOpen ? '400px' : `${COLLAPSED_HEIGHT}px`,
                overflow: 'hidden',
                overflowY: isOpen ? 'auto' : 'hidden',
                transition: 'max-height 0.3s ease-in-out',
              }}
            >
              {skills.map((skill) => (
                <button className="skill-button">
                  <FigmaSkillIcon />
                  {skill.title}
                </button>
              ))}
            </div>
            {showExpandBtn && (
              <button className={'skillsExpandButton'} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Свернуть' : 'Показать всё'}
              </button>
            )}
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
