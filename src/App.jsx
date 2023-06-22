import BrazilMap from '@/components/BrazilMap'
import GroupDatails from 'components/GroupDatails'
import { useState } from 'react'
import logo from '@/assets/logo.svg'
import shape from '@/assets/shape.svg'

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [showGroupDetails, setShowGroupDetails] = useState(false)

  const handleViewGroupDetails = (group) => {
    setSelectedGroup(group)
    setShowGroupDetails(true)
  }

  const hideGroupDetails = () => {
    setShowGroupDetails(false)
  }

  return (
    <div className="bg-gray-50">
      <div className='flex flex-col w-full h-screen gap-y-48'>
        <img src={shape} alt="Shape" className='absolute w-[55%] right-1'/>
        <header className='flex w-full justify-between pr-36 pt-4 pl-14'>
          <div className='flex items-center justify-center gap-x-4'>
            <img src={logo} alt="Logo" className='w-14'/>
            <h1 className='text-3xl text-[#75233D] font-bold'>Grupos de Trabalho</h1>
          </div>
          <nav className='flex gap-x-4 z-10 text-xl text-white items-center justify-center'>
            <button className='rounded p-1 hover:bg-white hover:text-[#4B1623]'>Home</button>
            <p>|</p>
            <button className='rounded p-1 hover:bg-white hover:text-[#4B1623]'>Mapa</button>
            <p>|</p>
            <button className='rounded p-1 hover:bg-white hover:text-[#4B1623]'>Contatos</button>
          </nav>
        </header>
        <section className='w-[555px] h-full font-montserrat text-xl text-[#A8A8A8] pl-20'>
          <p>Grupos de</p>
          <h1 className='font-berkshire-swash text-6xl text-[#272727]'>Estudo & Pesquisa</h1>
          <p className='text-justify'>
            Phasellus pellentesque lacinia arcu sit amet egestas. Cras rhoncus ut orci vel efficitur. Nulla convallis, purus id mollis rhoncus, magna quam rutrum lacus, nec mollis.
          </p>
        </section>
      </div>
      <div className='flex'>
        {showGroupDetails ? <GroupDatails group={selectedGroup} hideGroupDetails={hideGroupDetails} /> : <BrazilMap handleViewGroupDetails={handleViewGroupDetails} />}
      </div>
    </div>
  )
}

export default App
