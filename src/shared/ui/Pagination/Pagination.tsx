import { usePagination } from '@/shared/lib/hooks/usePagination'
import { LeftArrowPagination, RightArrowPagination } from '@/shared/assets/pagination'
import styles from './Pagination.module.scss'
import PaginationItem from '../PaginationItem/PaginationItem'

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const { pages, handleChangePage, handleNextPage, handlePrevPage } = usePagination(
    totalPages,
    currentPage,
    setCurrentPage
  )

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} className={styles.arrow}>
          <LeftArrowPagination />
        </button>
        {pages.map((page) => (
          <PaginationItem
            handleChangePage={handleChangePage}
            currentPage={currentPage}
            page={page}
          />
        ))}
        <button onClick={handleNextPage} className={styles.arrow}>
          <RightArrowPagination />
        </button>
      </div>
    </div>
  )
}

export default Pagination
