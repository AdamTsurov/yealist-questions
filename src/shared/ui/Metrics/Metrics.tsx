import styles from './Metrics.module.scss'

const Metrics = ({ rate, complexity }) => {
  return (
    <div className={styles.metrics}>
      <div className={styles.metric}>
        <p>Рейтинг: </p>
        <span className={styles.value}>{rate}</span>
      </div>
      <div className={styles.metric}>
        <p>Сложность: </p>
        <span className={styles.value}>{complexity}</span>
      </div>
    </div>
  )
}

export default Metrics
