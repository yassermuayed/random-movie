import React from 'react'

export default function SectionA({ children, title = 'Section Title:' }: { children: React.ReactNode, title: string }) {
  return (
    <div className=' w-screen  flex flex-col items-center '>

      <h1 className='  text-red-500 bg-gray-800 w-screen text-center pt-6 pb-4 mt-24 text-2xl  '>{title}</h1>
      <div className='  w-10/12 flex flex-wrap justify-evenly'>
        {children}</div>
    </div>
  )
}
