import React from 'react'

const Card = ({name, local}) => {
  return (
    <div className='flex max-w-[800px] bg-white mr-8'>
        <div className='min-w-[130px] bg-[#C4594B]' />
        <div className='p-4'>
            <h1 className='text-2xl'>{name}</h1>
            {local.map((elem, index) => (
              <p key={index} className='text-xl font-light'>{elem}</p>
            ))}
        </div>
    </div>
  )
}

export default Card