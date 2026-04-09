import styles from './RatingList.module.scss'
import { RATINGS } from '../../config/constans'
import { useDispatch } from 'react-redux'
import { toggleSelectRating } from '../../model/questionsFiltersSlice'
interface RatingListProps {
  selectRatingList: number[]
}

const RatingList = ({ selectRatingList }: RatingListProps) => {
  const dispatch = useDispatch()

  const toggleRating = (id: number) => {
    dispatch(toggleSelectRating(id))
  }

  return (
    <>
      <div className={styles.ratingButtons}>
        {RATINGS.map((rate) => (
          <button
            key={rate.id}
            className={`${styles.button} ${selectRatingList.includes(rate.id) ? styles.select : ''}`}
            onClick={() => toggleRating(rate.id)}
          >
            {rate.title}
          </button>
        ))}
      </div>
    </>
  )
}

export default RatingList
