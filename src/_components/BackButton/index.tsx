'use client'
import { useRouter } from 'next/navigation';
import './style.css'
import React from 'react'

function BackButton({ label }: { label: string }) {
  const router = useRouter();
  return (
    <button className='detailsBtn'
      onClick={() => router.back()}>{label}</button>
  )
}

export default BackButton