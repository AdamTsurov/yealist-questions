import styles from './PaginationItem.module.scss'

interface PaginationItemProps {
  handleChangePage: (page: number) => void
  currentPage: number
  page: string | number
}

const PaginationItem = ({ handleChangePage, currentPage, page }: PaginationItemProps) => {
  if (typeof page === 'string') {
    return <span className={styles.dots}>...</span>
  }

  return (
    <button
      onClick={() => handleChangePage(page)}
      className={`${styles.page} ${page === currentPage ? styles.current : ''}`}
    >
      {page}
    </button>
  )
}

export default PaginationItem
