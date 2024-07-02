import Container from '@/_components/Container'
import React from 'react'
import StudentCard from '../StudentCard'
import { studentResponseType } from '@/_types'
import PaginatedContainer from '@/_components/PaginatedContainer'

function StudentContainer({ studentList }: { studentList: studentResponseType }) {
  const { data, totalPages, currentPage, total } = React.use(studentList)
  return (
    <div>
      <Container>
        {data?.map(item => <StudentCard key={item.id} student={item} />)}
      </Container>
      <PaginatedContainer totalPages={totalPages}
        currentPage={currentPage} total={total}
        display={data?.length} />
    </div>
  )
}

export default StudentContainer