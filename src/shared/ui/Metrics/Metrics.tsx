import styles from './Metrics.module.scss'

interface MetricsProps {
  rate: number
  complexity: number
}

const Metrics = ({ rate, complexity }: MetricsProps) => {
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
