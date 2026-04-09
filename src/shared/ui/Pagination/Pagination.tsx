import { usePagination } from '@/shared/lib/hooks/usePagination'
import { LeftArrowPagination, RightArrowPagination } from '@/shared/assets/pagination'
import styles from './Pagination.module.scss'
import PaginationItem from '../PaginationItem/PaginationItem'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const { pages, handleChangePage, handleNextPage, handlePrevPage } = usePagination(
    totalPages,
    currentPage
  )

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} className={styles.arrow} disabled={currentPage === 1}>
          <LeftArrowPagination />
        </button>
        {pages.map((page) => (
          <PaginationItem
            handleChangePage={handleChangePage}
            currentPage={currentPage}
            page={page}
          />
        ))}
        <button
          onClick={handleNextPage}
          className={styles.arrow}
          disabled={currentPage === totalPages}
        >
          <RightArrowPagination />
        </button>
      </div>
    </div>
  )
}

export default Pagination
