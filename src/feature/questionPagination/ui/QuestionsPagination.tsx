import Pagination from '@/shared/ui/Pagination/Pagination'
import React, { useState } from 'react'

const QuestionsPagination = (props) => {
  const { total, limit } = props

  const [selectPage, setSelectPage] = useState(1)

  const totalPages = Math.ceil(total / limit)

  return <Pagination totalPages={totalPages} currentPage={selectPage} setCurrentPage={setSelectPage}/>
}

export default QuestionsPagination
