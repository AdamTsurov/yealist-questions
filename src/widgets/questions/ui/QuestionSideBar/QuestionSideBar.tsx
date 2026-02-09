import { useState, useRef, useEffect } from 'react'
import FiltersSearchInputIcon from '@/assets/icons/search-skills-side.svg?react'
import FigmaSkillIcon from '@/assets/icons/skillIcons/figma-skill-icon.svg?react'
import FiltersOpenButtonIcon from '@/assets/icons/open-skills-side.svg?react'
import './QuestionSideBar.scss'

const COLLAPSED_HEIGHT = 120

const QuestionSideBar = ({ showFilters, toggleVisibleSidebar, isOpen, setIsOpen }) => {
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
  ]

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
    <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
      <button className="filters-sidebar-close-button" onClick={toggleVisibleSidebar}>
        <FiltersOpenButtonIcon className="filters-close-icon" />
      </button>
      <label htmlFor="skill-input" className="filters-search-input">
        <FiltersSearchInputIcon className="filters-search-icon" />
        <input id="skill-input" type="text" placeholder="Введите запрос..." />
      </label>
      <section className="filters-question">
        <span className="filter-side-block-title">Категории вопросов</span>
        <div
          className="filter-buttons"
          ref={skillListRef}
          style={{
            maxHeight: isOpen ? '200px' : `${COLLAPSED_HEIGHT}px`,
            overflow: 'hidden',
            overflowY: isOpen ? 'auto' : 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
        >
          {skills.map((skill) => (
            <button className="button">
              <FigmaSkillIcon />
              {skill.title}
            </button>
          ))}
        </div>
        {showExpandBtn && (
          <button className={'filtersExpandButton'} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Свернуть' : 'Показать больше'}
          </button>
        )}
      </section>
    </aside>
  )
}

export default QuestionSideBar
