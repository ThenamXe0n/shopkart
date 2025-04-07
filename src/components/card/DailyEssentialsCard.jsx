import React from 'react'

const DailyEssentialsCard = ({dailyImg,title}) => {
  return (
    <div className='h-fit w-fit flex flex-col justify-center items-center gap-2'>
      <div className='size-40  bg-gray-100 rounded-xl hover:border-2 hover:border-[#008ECC] hover:shadow-lg hover:shadow-slate-400'>
        <img className='size-full object-contain' src={dailyImg} alt="abc" />
      </div>
      <div>
        <h2 className='text-xs font-bold text-gray-600 text-center'>{title}</h2>
        <h1 className='font-bold'>UP to 50% OFF</h1>
      </div>
    </div>
  )
}

export default DailyEssentialsCard
