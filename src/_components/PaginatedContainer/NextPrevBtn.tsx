'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function NextPrevBtn({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {

  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const handleChange = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams)
    if (value === 'next') {
      if (currentPage < totalPages) {
        let nextPage = currentPage + 1
        newSearchParams.set('page', nextPage.toString())
      }

    }
    if (value === 'prev') {
      if (currentPage > 1) {
        let prevPage = currentPage - 1
        newSearchParams.set('page', prevPage.toString())
      }
    }

    router.replace(`${pathname}?${newSearchParams}`, {
      scroll: false,
    })
  };
  return (
    <div className='next-back'>
      <button onClick={() => handleChange('prev')}>prev</button>
      <button onClick={() => handleChange('next')}>next</button>
    </div>
  )
}

export default NextPrevBtn