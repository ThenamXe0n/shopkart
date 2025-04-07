import React from 'react'

const TopCategoriesCard = ({title,cateImg}) => {
  return (
    <div className='h-48 w-40  flex flex-col justify-center items-center gap-2'>
      <div className='size-36 rounded-full bg-gray-100 flex justify-center items-center hover:border hover:border-[#008ECC] hover:shadow-lg hover:shadow-slate-400'>
        <div className='size-24'>
        <img className='size-full object-contain' src={cateImg} alt="phone" />
        </div>
      </div>
      <h1 className='font-medium'>{title}</h1>
    </div>
  )
}

export default TopCategoriesCard
