import styles from './Keywords.module.scss'

interface KeywordsProps {
  keywords: string[]
}

const Keywords = ({ keywords }: KeywordsProps) => {
  return (
    <div className={styles.keywords}>
      {keywords.map((word: string) => (
        <p className={styles.keyword}>#{word}</p>
      ))}
    </div>
  )
}

export default Keywords
