import styles from './ErrorMessage.module.scss'

type Props = {
  title?: string
  description?: string
  onRetry?: () => void
}

const ErrorMessage = (props: Props) => {
  const {
    title = 'Произошла ошибка',
    description = 'Не удалось загрузить данные. Попробуйте обновить страницу.',
    onRetry,
  } = props

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          Обновить
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
