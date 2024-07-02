import React from 'react'
import './style.css'
import CustomSelect from '../CustomSelect'
import { paginationParams} from '@/_types'
import NextPrevBtn from './NextPrevBtn'

function PaginatedContainer({ currentPage, totalPages, total, display }: paginationParams) {
  return (
    <div className='footer'>
      <div><p>page <span>{currentPage}</span> of <span>{totalPages}</span></p></div>
      <CustomSelect name='per' options={[{ label: '10 records per page', value: 10 },
      { label: '20 records per page', value: 20 },
      { label: '30 records per page', value: 30 }]} />
      <div><p>showing <span>{display}</span> of <span>{total}</span> students</p></div>
      <NextPrevBtn currentPage ={currentPage} totalPages={totalPages}/>
    </div>
  )
}

export default PaginatedContainer