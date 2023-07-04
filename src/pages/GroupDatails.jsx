import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiArrowRightCircle } from '@mdi/js'

const GroupDatails = () => {
    const navigate = useNavigate()
    const {state:{group}} = useLocation()

    return (
        <div className='flex flex-col w-screen pl-4 mt-4 bg-white'>
            <div
                className='flex w-full bg-slate-200 rounded-s-full'
            >
                <button onClick={() => navigate('/')}>
                    <Icon path={mdiArrowRightCircle}
                        size={2}
                        horizontal
                        vertical
                        className='text-gray-500 bg-slate-200 rounded-full hover:text-gray-400'
                    />
                </button>
            </div>
            <div className='flex flex-col justify-center gap-y-6'>
                <section className='flex'>
                    <div className='flex flex-col w-full p-4 gap-y-6'>
                        <div>
                            <h1 className='text-2xl' href='/'>{group.name}</h1>
                            {group.local.map((elem, index) => (
                                <p key={index} className='text-xl font-light'>{elem}</p>
                            ))}
                        </div>
                        <div className='w-2/3 grid grid-rows-2 gap-y-8'>
                            <div>
                                <h2 className='text-xl'>Pesquisadores</h2>
                                <div className='grid grid-cols-2 gap-4'>
                                    {group.researchers.map((elem, index) => (
                                        <li key={index} className='text-xl font-light'>{elem}</li>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl'>Principais Temáticas</h2>
                                <div className='grid grid-cols-3 tex gap-x-1'>
                                    {group.thematic.map((elem, index) => (
                                        <li key={index} className='text-xl font-light'>{elem}</li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {(group.contacts.site || group.contacts.email || group.contacts.phone) &&
                    <section>
                        <h2 className='text-xl'>Contatos</h2>
                        {group.contacts.site && <a href={group.contacts.site} target='_blank' rel="noopener noreferrer external">Site: {group.contacts.site}</a>}
                        {group.contacts.email && <p>Email: {group.contacts.email}</p>}
                        {group.contacts.phone && <p>Telefone: {group.contacts.phone}</p>}
                    </section>}
            </div>
        </div>
    )
}

export default GroupDatails