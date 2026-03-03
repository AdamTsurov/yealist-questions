import { ChevronIcon } from '@/shared/assets/questions'
import styles from './QuestionAnswers.module.scss'
import { useState } from 'react'

const QuestionAnswers = ({ type, shortAnswer, longAnswer }) => {
  const answerData = {
    title: type === 'short' ? 'Краткий ответ' : 'Развёрнутый ответ',
    text: type === 'short' ? shortAnswer : longAnswer,
  }

  const [isOpenLongAnswer, setIsOpenLongAnswer] = useState(false)
  const visibleLongAnswer = type === 'long' && !isOpenLongAnswer

  return (
    <div className={styles.answer}>
      <h3 className={styles.title}>{answerData.title}</h3>
      <p className={`${styles.text} ${visibleLongAnswer ? styles.open : ''}`.trim()}>
        {answerData.text}
      </p>
      {visibleLongAnswer && (
        <button onClick={() => setIsOpenLongAnswer(true)}>
          Развернуть <ChevronIcon />
        </button>
      )}
    </div>
  )
}

export default QuestionAnswers
