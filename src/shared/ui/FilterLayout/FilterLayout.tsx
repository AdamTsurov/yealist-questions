import styles from './FilterLayout.module.scss'

const FilterLayout = ({ renderItem, title }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.sideBlockTitle}>{title}</span>
      {renderItem()}
    </div>
  )
}

export default FilterLayout
