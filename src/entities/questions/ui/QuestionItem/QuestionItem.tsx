import { ChevronIcon } from '@/shared/assets/questions'
import { ArrowRight } from '@/shared/assets/questions'
import styles from './QuestionItem.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Metrics from '@/shared/ui/Metrics/Metrics'
import { MarkdownViewer } from '@/shared/lib/utils/components/MarkdownViewer'

const QuestionItem = ({ id, title, shortAnswer, rate, complexity, itemImage }) => {
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
          <Metrics rate={rate} complexity={complexity} />
          <img className={styles.itemImage} src={itemImage} />
          <MarkdownViewer content={shortAnswer}/>
          <Link to={`question/${id}`} className={styles.turnupQuestionSpecific}>
            Подробнее <ArrowRight />
          </Link>
        </div>
      </li>
    </>
  )
}

export default QuestionItem
