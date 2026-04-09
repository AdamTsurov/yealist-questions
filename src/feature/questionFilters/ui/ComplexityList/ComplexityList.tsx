import styles from './ComplexityList.module.scss'
import { COMPLEXITY_RANGES } from '../../config/constans'
import { useDispatch } from 'react-redux'
import { toggleSelectComplexity } from '../../model/questionsFiltersSlice'
interface RatingListProps {
  selectComplexities: number[]
}

const ComplexityList = ({ selectComplexities }: RatingListProps) => {
  const dispatch = useDispatch()

  const toggleComplexity = (id: number) => {
    dispatch(toggleSelectComplexity(id))
  }

  return (
    <>
      <div className={styles.ratingButtons}>
        {COMPLEXITY_RANGES.map((complexity) => (
          <button
            key={complexity.id}
            className={`${styles.button} ${selectComplexities.includes(complexity.id) ? styles.select : ''}`}
            onClick={() => toggleComplexity(complexity.id)}
          >
            {complexity.title}
          </button>
        ))}
      </div>
    </>
  )
}

export default ComplexityList
