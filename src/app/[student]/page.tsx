import React, { use } from 'react'
import './style.css'
import { getStudentsById } from '../_lib/queries'
import { calculateAge } from '../_lib/utils'
import Image from 'next/image'
import BackButton from '@/_components/BackButton'
import { ParamsType } from '@/_types'

function page({ params }: ParamsType) {
  const student = getStudentsById(params)
  const { data } = use(student)
  const birthDate = new Date(data.dateOfBirth.toLocaleString())
  return (
    <div className='container'>
      <div className='profile'>
        <BackButton label={'Go back to listing'} />
        <div className='profile-container'>
          <div className={'image-container '}>
            <Image
              src={data.image}
              layout="fill"
              alt="Picture of the author"
              className={'image'}
            />
          </div>
        </div>
        <div className='profile-content'>
          <p><span>Name:</span> {data?.firstName} {data?.middleName} {data?.lastName}</p>
          <p><span>Grade:</span> Class {data?.grade}</p>
          <p><span>Age:</span> {calculateAge(data?.dateOfBirth)} years old </p>
          <p><span>Date of birth:</span> {birthDate.toLocaleDateString()}</p>
          <p><span>Gender:</span> {data?.gender}</p>
          <p><span>Parent name:</span> {data?.parent.firstName} {data?.parent.middleName} {data?.parent.lastName}</p>
          <p><span>Parent phone no:</span> {data?.parent.phoneNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default page