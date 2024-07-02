import React from 'react'

import { getStudents } from './_lib/queries'
import FilterContainer from './_components/FilterContainer'
import StudentContainer from './_components/StudentContainer'
import { searchParamsType } from '@/_types'

export default function App({ searchParams }: searchParamsType) {
  const defaultData = getStudents(searchParams)

  return (
    <div className="p-2">
      <FilterContainer />
      <StudentContainer studentList={defaultData} />
    </div>
  )
}

