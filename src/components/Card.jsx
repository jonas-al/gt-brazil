import React from 'react'

const Card = ({ group, handleViewGroupDetails }) => {
  return (
    <div className='flex max-w-[800px] bg-white mr-8'>
      <div className='min-w-[130px] bg-[#C4594B]' />
      <div className='p-4'>
        <button
          className='text-2xl text-start hover:underline'
          onClick={() => handleViewGroupDetails(group)}
        >
          {group.name}
        </button>
        <div className='flex gap-x-2'>
          {group.local.map((elem, index, list) => {
            if (index + 1 !== list.length) return <p key={index} className='text-xl font-light'>{elem},</p>
            return <p key={index} className='text-xl font-light'>{elem}</p> 
          })}
        </div>
      </div>
    </div>
  )
}

export default Card