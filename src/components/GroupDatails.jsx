import React from 'react'
import Icon from '@mdi/react'
import { mdiArrowRightCircle } from '@mdi/js'

const GroupDatails = ({ group, hideGroupDetails }) => {
    return (
        <div className='flex flex-col w-screen h-screen pl-4 mt-4 bg-white'>
            <div
                className='flex w-full bg-slate-200 rounded-s-full'
            >
                <button onClick={() => hideGroupDetails()}>
                    <Icon path={mdiArrowRightCircle}
                        size={2}
                        horizontal
                        vertical
                        className='text-gray-500 bg-slate-200 rounded-full hover:text-gray-400'
                    />
                </button>
            </div>
            <div className='flex flex-col h-full justify-center gap-y-6'>
                <section className='flex'>
                    <div className='flex flex-col w-full p-4 gap-y-6'>
                        <div>
                            <h1 className='text-2xl' href='/'>{group.name}</h1>
                            {group.local.map((elem, index) => (
                                <p key={index} className='text-xl font-light'>{elem}</p>
                            ))}
                        </div>
                        <div className='w-full grid grid-cols-[45%_10%_45%]'>
                            <div>
                                <h2 className='text-xl'>Pesquisadores</h2>
                                <div className='grid grid-cols-2 grid-rows-[200px_minmax(900px,_1fr)_100px] gap-x-1'>
                                    {group.researchers.map((elem, index) => (
                                        <li key={index} className='text-xl font-light'>{elem}</li>
                                    ))}
                                </div>
                            </div>
                            <div className='h-full w-[1px] bg-gray-700' />
                            <div>
                                <h2 className='text-xl'>Principais Temáticas</h2>
                                <div className='grid grid-cols-2 tex gap-x-1'>
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