import { useRef, useState } from 'react'
import FigmaSkillIcon from '@/assets/icons/skillIcons/figma-skill-icon.svg?react'
import styles from './SkillsDisplay.module.scss'
import { useResize } from '@/shared/lib/hooks/useResize'

interface SkillsDisplayProps {
  skills?: { id: number; title: string }[]
  selectedIds?: number[]
  onToggle?: (id: number) => void
  maxCollapsedHeight?: number
}

const SkillsDisplay = ({
  skills,
  selectedIds = [],
  onToggle,
  maxCollapsedHeight = 120,
}: SkillsDisplayProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  const { showExpandBtn } = useResize(skills, listRef, maxCollapsedHeight)

  const isInteractive = Boolean(onToggle)

  return (
    <>
      <div
        className={styles.skillButtons}
        ref={listRef}
        style={{
          maxHeight: isOpen ? '200px' : `${maxCollapsedHeight}px`,
          overflow: 'hidden',
          overflowY: isOpen ? 'auto' : 'hidden',
          transition: 'max-height 0.3s ease-in-out',
          boxShadow: 'none',
        }}
      >
        {skills.map((skill) => (
          <button
            key={skill.id}
            className={`${styles.button} ${selectedIds.includes(skill.id) ? styles.select : ''}`}
            onClick={() => isInteractive && onToggle?.(skill.id)}
            disabled={!isInteractive}
          >
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

export default SkillsDisplay
