
import styles from './QuestionSpecific.module.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import QuestionSideBar from '../QuestionSidebar/QuestionSidebar'
import { QuestionTitle, QuestionAnswers } from '@/entities/questionSpecific'

const QuestionSpecific = () => {
  const { id } = useParams()

  const [data, setData] = useState({
    imageSrc: 'string',
    title: 'Event loop',
    description: 'What is Event Loop?',
    keywords: ['Javascript', 'React', 'Html'],
    longAnswer:
      'Virtual DOM (виртуальный DOM) — это программная концепция, используемая вразработке веб-приложений для повышения эффективности обновлений интерфейса. Это представление реального DOM (структуры документа, отображаемого в браузере) в памяти, которое позволяет оптимизировать изменения, минимизируя взаимодействие с реальным DOM, что ускоряет рендеринг и обновление страниц. При изменении данных приложения Virtual DOM сравнивает новое состояние с предыдущим и обновляет только те части реального DOM, которые изменились, вместо перерисовки всего документа.',
    shortAnswer:
      'Virtual DOM (виртуальный DOM) — это программная концепция, используемая вразработке веб-приложений для повышения эффективности обновлений интерфейса.',
    rate: 1,
    complexity: 3,
    questionSkills: [
      {
        id: 13,
        title: 'JAVA',
        imageSrc: 'string',
      },
      {
        id: 13,
        title: 'JAVA',
        imageSrc: 'string',
      },
      {
        id: 13,
        title: 'JAVA',
        imageSrc: 'string',
      },
    ],
  })

  const { imageSrc, title, description, shortAnswer, longAnswer } = data

  return (
    <div className={styles.specific}>
      <div className={styles.content}>
        <QuestionTitle image={imageSrc} title={title} description={description} />
        <QuestionAnswers type={'short'} shortAnswer={shortAnswer} longAnswer={longAnswer}/>
        <QuestionAnswers type={'long'} shortAnswer={shortAnswer} longAnswer={longAnswer}/>
      </div>
      <QuestionSideBar data={data} />
    </div>
  )
}

export default QuestionSpecific
