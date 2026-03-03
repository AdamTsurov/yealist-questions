import Metrics from '@/shared/ui/Metrics/Metrics'
import styles from './QuestionSideBar.module.scss'
import Keywords from '@/shared/ui/Keywords/Keywords'
import { SkillsList } from '@/feature/questionFilters'

const QuestionSideBar = ({ data }) => {
  const { rate, complexity, questionSkills, keywords } = data

  return (
    <div className={styles.sidebar}>
      <div className={styles.metrics}>
        <p>Уровень: </p>
        <Metrics rate={rate} complexity={complexity} />
      </div>
      <div className={styles.skills}>
        <p>Навыки: </p>
        <SkillsList skills={questionSkills} />
      </div>
      <div className={styles.keywords}>
        <p>Ключевые слова: </p>
        <Keywords keywords={keywords} />
      </div>
    </div>
  )
}

export default QuestionSideBar
