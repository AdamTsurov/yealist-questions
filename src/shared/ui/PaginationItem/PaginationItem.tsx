import styles from './PaginationItem.module.scss'

const PaginationItem = ({ handleChangePage, currentPage, page }) => {
  if (page === '...') {
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
