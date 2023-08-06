// Libs
import { Link } from 'react-router-dom'

const Card = ({ group, abbr }) => {
  return (
    <div className='flex w-full bg-white shadow-sm'>
      <div className='min-w-[65px] sm:min-w-[130px] bg-[#C4594B]' />
      {group && <div className='p-4'>
        <Link
          className='text-xl sm:text-2xl text-start hover:underline'
          to={`/detalhes/${abbr}/${group.id}`}
        >
          {group.name}
        </Link>
        <div className='flex gap-x-2'>
          {group.local.map((elem, index, list) => {
            if (index + 1 !== list.length) return <p key={index} className='text-xl font-light'>{elem},</p>
            return <p key={index} className='text-xl font-light'>{elem}</p> 
          })}
        </div>
      </div>}
    </div>
  )
}

export default Card