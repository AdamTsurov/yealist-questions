import { SidebarOpenIcon } from '@/shared/assets/questionSpecific'
import styles from './QuestionTitle.module.scss'
import imgsrc from '@/assets/icons/Image.png'

const QuestionTitle = ({ image, title, description }) => {
  return (
    <div className={styles.title}>
      {image ? <img className={styles.titleImage} src={imgsrc} /> : ''}
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
