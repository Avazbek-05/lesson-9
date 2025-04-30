import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-2'>
        <h3 className='text-2xl'>Not  Found Pages</h3>
        <Link className='text-xl border p-2 rounded-lg' to={'/'}>Back to Home</Link>
    </div>
  )
}

export default NotFound