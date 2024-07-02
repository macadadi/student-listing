import { calculateAge } from '@/app/_lib/utils'
import { studentInterface } from '@/_types'
import Image from 'next/image'
import React from 'react'
import './style.css'
import { redirect } from 'next/navigation'
import Button from '@/_components/Button'
function StudentCard({ student }: { student: studentInterface }) {
  return (
    <div className='studentContainer'>
      <div className={'image-container'}>
        <Image
          src={student.image}
          layout="fill"
          alt="Picture of the author"
          className={'image'}
        />
      </div>
      <div>
        <p><span>Name:</span> {student.firstName}  {student.lastName}</p>
        <p><span>Grade:</span> Class {student.grade}</p>
        <p><span>Age:</span> {calculateAge(student.dateOfBirth)} years old</p>
        <p><span>Gender:</span> {student.gender}</p>
      </div>
      <div>
        <Button studentId={student.id} name={'View details'} />
      </div>
    </div>
  )
}

export default StudentCard