import { SearchIcon as SearchInputIcon } from '@/shared/assets/filters'
import { CloseIcon as CloseButtonIcon } from '@/shared/assets/filters'
import FilterLayout from '@/shared/ui/FilterLayout/FilterLayout'
import styles from './QuestionFilters.module.scss'
import { SkillsList } from '@/feature/questionFilters'

const QuestionFilters = ({ showFilters, toggleVisibleSidebar }) => {
  const skills = [
    { id: 1, title: 'Figma' },
    { id: 2, title: 'Wireframing' },
    { id: 3, title: 'React' },
    { id: 4, title: 'Wireframing' },
    { id: 5, title: 'Figma' },
    { id: 6, title: 'React' },
    { id: 7, title: 'Figma' },
    { id: 8, title: 'React' },
    { id: 9, title: 'Figma' },
    { id: 10, title: 'React' },
  ]

  return (
    <aside className={`${styles.sidebar} ${showFilters ? styles.open : ''}`.trim()}>
      <button className={styles.closeButton} onClick={toggleVisibleSidebar}>
        <CloseButtonIcon className={styles.closeIcon} />
      </button>
      <label htmlFor="input" className={styles.searchInputWrapper}>
        <SearchInputIcon className={styles.searchIcon} />
        <input id="input" type="text" placeholder="Введите запрос..." />
      </label>
      <section className={styles.filtersQuestion}>
        <FilterLayout
          renderItem={() => <SkillsList skills={skills} />}
          title={'Категории вопросов'}
        />
      </section>
    </aside>
  )
}

export default QuestionFilters
