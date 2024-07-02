'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

function Button({ studentId, name }:{ studentId: string, name: string}) {
  const router = useRouter();
  return (
    <button className='detailsBtn'
      onClick={() => router.push(studentId)}>{name}</button>
  )
}

export default Button