import React, { ReactNode } from 'react'
import './style.css'
function Container({ children }: { children: ReactNode }) {
  return (
    <div className='containerWrapper'>{children}</div>
  )
}

export default Container