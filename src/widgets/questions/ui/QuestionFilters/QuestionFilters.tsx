import { SearchIcon as SearchInputIcon } from '@/shared/assets/filters'
import { CloseIcon as CloseButtonIcon } from '@/shared/assets/filters'
import FilterLayout from '@/shared/ui/FilterLayout/FilterLayout'
import styles from './QuestionFilters.module.scss'
import { ComplexityList, RatingList, SkillsList } from '@/feature/questionFilters'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import {
  selectComplexityRanges,
  selectRating,
  selectTitle,
} from '@/feature/questionFilters/model/questionsFiltersSelectors'
import { useReduxInputDebounce } from '@/shared/lib/hooks/useReduxInputDebounce'
import { setTitle } from '@/feature/questionFilters/model/questionsFiltersSlice'

interface QuestionFiltersProps {
  showFilters: boolean
  toggleVisibleSidebar: () => void
}

const QuestionFilters = ({ showFilters, toggleVisibleSidebar }: QuestionFiltersProps) => {
  const selectRates = useAppSelector(selectRating)
  const complexityRanges = useAppSelector(selectComplexityRanges)
  const title = useAppSelector(selectTitle)
  const { inputValue, handleChange } = useReduxInputDebounce({
    reduxValue: title,
    setReduxValue: setTitle,
    delay: 500,
  })

  return (
    <aside className={`${styles.sidebar} ${showFilters ? styles.open : ''}`.trim()}>
      <button className={styles.closeButton} onClick={toggleVisibleSidebar}>
        <CloseButtonIcon className={styles.closeIcon} />
      </button>
      <label htmlFor="input" className={styles.searchInputWrapper}>
        <SearchInputIcon className={styles.searchIcon} />
        <input
          id="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Введите запрос..."
        />
      </label>
      <section className={styles.filtersQuestion}>
        <FilterLayout renderItem={() => <SkillsList />} title={'Категории вопросов'} />
        <FilterLayout
          renderItem={() => <ComplexityList selectComplexities={complexityRanges} />}
          title={'Уровень сложности'}
        />
        <FilterLayout
          renderItem={() => <RatingList selectRatingList={selectRates} />}
          title={'Рейтинг'}
        />
      </section>
    </aside>
  )
}

export default QuestionFilters
