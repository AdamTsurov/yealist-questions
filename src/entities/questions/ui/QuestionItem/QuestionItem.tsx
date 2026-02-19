import { ChevronIcon } from '@/shared/assets/questions'
import { ArrowRight } from '@/shared/assets/questions'
import styles from './QuestionItem.module.scss'
import { useState } from 'react'

const QuestionItem = ({ title, shortAnswer, rate, complexity, itemImage }) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggleOpen = () => setIsOpened((prev) => !prev)

  return (
    <>
      <li className={styles.listItem}>
        <button className={styles.itemButton} onClick={toggleOpen}>
          <h3 className={styles.itemTitle}>{title}</h3>
          <ChevronIcon className={`${styles.chevron} ${isOpened ? styles.open : ''}`.trim()} />
        </button>

        <div className={`${styles.itemContent} ${isOpened ? styles.open : ''}`.trim()}>
          <div className={styles.itemMetrics}>
            <div className={styles.metric}>
              <p>Рейтинг: </p>
              <span className={styles.value}>{rate}</span>
            </div>
            <div className={styles.metric}>
              <p>Сложность: </p>
              <span className={styles.value}>{complexity}</span>
            </div>
          </div>
          <img className={styles.itemImage} src={itemImage} />
          <p className={styles.itemQuestion}>{shortAnswer}</p>
          <a href="#" className={styles.turnupQuestionSpecific}>
            Подробнее <ArrowRight />
          </a>
        </div>
      </li>
        
    </>
  )
}

export default QuestionItem
