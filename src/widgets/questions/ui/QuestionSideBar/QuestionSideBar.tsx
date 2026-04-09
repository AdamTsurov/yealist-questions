import Metrics from '@/shared/ui/Metrics/Metrics'
import styles from './QuestionSideBar.module.scss'
import Keywords from '@/shared/ui/Keywords/Keywords'
import SkillsDisplay from '@/shared/ui/SkillsDisplay/SkillsDisplay'
import EmptyState from '@/shared/ui/EmptyState/EmptyState'
import type { IQuestion } from '@/entities/questions/model/types'

const QuestionSideBar = ({ data }: { data: IQuestion }) => {
  const { rate, complexity, questionSkills, keywords } = data

  if (!questionSkills) return <EmptyState />

  return (
    <div className={styles.sidebar}>
      <div className={styles.metrics}>
        <p>Уровень: </p>
        <Metrics rate={rate} complexity={complexity} />
      </div>
      <div className={styles.skills}>
        <p>Навыки: </p>
        <SkillsDisplay skills={questionSkills} />
      </div>
      <div className={styles.keywords}>
        <p>Ключевые слова: </p>
        <Keywords keywords={keywords} />
      </div>
    </div>
  )
}

export default QuestionSideBar
