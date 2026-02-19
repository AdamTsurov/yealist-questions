import { OpenIcon as OpenButtonIcon  } from '@/shared/assets/sidebar'
import itemImage from '@/assets/icons/list-item-img.png'
import QuestionItem from '@/entities/questions/ui/QuestionItem/QuestionItem'
import styles from './QuestionList.module.scss'
import QuestionsPagination from '@/feature/questionPagination/ui/QuestionsPagination'

const QuestionList = ({ showFilters, toggleVisibleSidebar }) => {
  const questions = [
    {
      id: 1,
      title: 'Что такое Virtual DOM, и как он работает?',
      description: 'Вопрос проверяет знание React под капотом',
      shortAnswer:
        'Virtual DOM (виртуальный DOM) — это программная концепция, используемая вразработке веб-приложений для повышения эффективности обновлений интерфейса. Это представление реального DOM (структуры документа, отображаемого в браузере) в памяти, которое позволяет оптимизировать изменения, минимизируя взаимодействие с реальным DOM, что ускоряет рендеринг и обновление страниц. При изменении данных приложения Virtual DOM сравнивает новое состояние с предыдущим и обновляет только те части реального DOM, которые изменились, вместо перерисовки всего документа.',
      rate: 4,
      complexity: 10,
    },
    {
      id: 2,
      title: 'Что такое Virtual DOM, и как он работает?',
      description: 'Вопрос проверяет знание React под капотом',
      shortAnswer:
        'Virtual DOM (виртуальный DOM) — это программная концепция, используемая вразработке веб-приложений для повышения эффективности обновлений интерфейса. Это представление реального DOM (структуры документа, отображаемого в браузере) в памяти, которое позволяет оптимизировать изменения, минимизируя взаимодействие с реальным DOM, что ускоряет рендеринг и обновление страниц. При изменении данных приложения Virtual DOM сравнивает новое состояние с предыдущим и обновляет только те части реального DOM, которые изменились, вместо перерисовки всего документа.',
      rate: 4,
      complexity: 10,
    },
  ]

  return (
    <div className={styles.questions}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.questionsTitle}>Вопросы React, JavaScript</h2>
        <button className={`${styles.sidebarOpenButton} ${showFilters ? styles.open : ''}`.trim()}>
          <OpenButtonIcon className={styles.openIcon} onClick={toggleVisibleSidebar} />
        </button>
      </div>
      <ul className={styles.list}>
        {questions.map((item) => (
          <QuestionItem
            key={item.id}
            id={item.id}
            title={item.title}
            shortAnswer={item.shortAnswer}
            rate={item.rate}
            complexity={item.complexity}
            itemImage={itemImage}
          />
        ))}
      </ul>
      <QuestionsPagination total={100} limit={3} />
    </div>
  )
}

export default QuestionList
