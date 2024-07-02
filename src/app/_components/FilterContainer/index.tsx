import CustomSelect from '@/_components/CustomSelect'
import { ageGroupOptions, genderOptions, gradeOptions, gradeSorting } from '@/app/_lib/consts'
import React from 'react'
import './style.css'
function FilterContainer() {
  return (
    <div className='header-container'>
      <div className='filter-container'>
        <CustomSelect options={gradeOptions}
          label='Filter by grades'
          name="grade" />
        <CustomSelect options={ageGroupOptions}
          label='Filter by age group'
          name="ageGroup" />
        <CustomSelect options={genderOptions}
          label='Sort by gender'
          name="sortGender" />
        <CustomSelect options={gradeSorting}
          label='Sort by grade'
          name="sortGrade" />
      </div>
    </div>
  )
}

export default FilterContainer