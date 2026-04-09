import styles from './FilterLayout.module.scss'

interface FilterLayoutProps {
  renderItem: () => React.ReactNode
  title: string
}

const FilterLayout = ({ renderItem, title }: FilterLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.sideBlockTitle}>{title}</span>
      {renderItem()}
    </div>
  )
}

export default FilterLayout
