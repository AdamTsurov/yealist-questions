import { useState, useRef, useEffect } from 'react'
import FigmaSkillIcon from '@/assets/icons/skillIcons/figma-skill-icon.svg?react'
import styles from './SkillsList.module.scss'

const COLLAPSED_HEIGHT = 120

const SkillsList = ({ skills }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showExpandBtn, setShowExpandBtn] = useState(false)
  const skillListRef = useRef<HTMLDivElement>(null)

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
    <>
      <div
        className={styles.skillButtons}
        ref={skillListRef}
        style={{
          maxHeight: isOpen ? '200px' : `${COLLAPSED_HEIGHT}px`,
          overflow: 'hidden',
          overflowY: isOpen ? 'auto' : 'hidden',
          transition: 'max-height 0.3s ease-in-out',
          boxShadow: 'none',
        }}
      >
        {skills.map((skill) => (
          <button key={skill.id} className={styles.button}>
            <FigmaSkillIcon />
            {skill.title}
          </button>
        ))}
      </div>
      {showExpandBtn && (
        <button className={styles.skillsExpandButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Свернуть' : 'Показать больше'}
        </button>
      )}
    </>
  )
}

export default SkillsList
