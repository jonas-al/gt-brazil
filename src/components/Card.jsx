import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GroupValue } from 'context/GroupContext'

const Card = ({ group }) => {
  const navigate = useNavigate()
  const { setGroup } = GroupValue()
  
  const handleNavigate = (group) => {
    setGroup(group)
    navigate('/detalhes')
  }

  return (
    <div className='flex w-full bg-white shadow-sm'>
      <div className='min-w-[65px] sm:min-w-[130px] bg-[#C4594B]' />
      <div className='p-4'>
        <button
          className='text-xl sm:text-2xl text-start hover:underline'
          onClick={() => handleNavigate(group)}
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