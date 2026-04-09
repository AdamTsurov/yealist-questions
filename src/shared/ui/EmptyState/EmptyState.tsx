import styles from './EmptyState.module.scss'

type Props = {
  title?: string
  description?: string
  onRetry?: () => void
}

const EmptyState = (props: Props) => {
  const { title = 'Ничего не найдено', description = 'Попробуйте изменить параметры поиска' } =
    props

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}

export default EmptyState
