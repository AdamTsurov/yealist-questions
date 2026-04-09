import { SidebarOpenIcon } from '@/shared/assets/questionSpecific'
import styles from './QuestionTitle.module.scss'

interface QuestionTitleProps {
  image: string
  title: string
  description: string
}

const QuestionTitle = ({ image, title, description }: QuestionTitleProps) => {
  return (
    <div className={styles.title}>
      {image ? <img className={styles.titleImage} src={image} /> : ''}
      <div className={styles.titleContent}>
        <div>
          <h1 className={styles.titleText}>{title}</h1>
          <p className={styles.titleDescription}>{description}</p>
        </div>
        <button className={styles.titleSideBarOpenButton}>
          <SidebarOpenIcon className={styles.titleSideBarOpenIcon} />
        </button>
      </div>
    </div>
  )
}

export default QuestionTitle
