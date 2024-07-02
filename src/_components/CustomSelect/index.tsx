'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, Suspense, useState } from 'react'
import './index.css'
import { isNull } from '@/app/_lib/utils';

type TCustomInput = {
  label?: string
  name: string
  options: {
    label: string,
    value: string | number
  }[]
}
function CustomSelect({ options, label, name }: TCustomInput) {
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedValue, setSelectedValue] = useState(searchParams.get(name) || '')
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSearchParams = new URLSearchParams(searchParams)
    const value = event.target.value;
    setSelectedValue(value)
    if (isNull(value)) {
      newSearchParams.delete(name)
    } else {
      newSearchParams.set(name, value)
      // if the below is true we need to start pagination from page 1
      if (name === 'grade' || name === 'ageGroup' || name === 'per'){
        newSearchParams.set('page', '1')
      }
    }
    router.replace(`${pathname}?${newSearchParams}`, {
      scroll: false,
    })
  };

  return (
    <Suspense fallback={<div />}>
      <div className='filterContainer'>
        {label && <h4 className='filterLabel'>{label}</h4>}
        <select value={selectedValue} onChange={handleChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </Suspense>
  );
};

export default CustomSelect