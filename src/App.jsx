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
    <div className="w-screen bg-gray-50">
      <img src={shape} alt="Shape" className='absolute right-[-100px]'/>
      <header className='flex w-full justify-between px-8 pt-4'>
        <div className='flex items-center justify-center gap-x-4'>
          <img src={logo} alt="Logo" />
          <h1 className='text-3xl text-purple-950 font-bold'>Grupos de Trabalho</h1>
        </div>
        <nav className='flex gap-x-4 z-10'>
          <a href="/" className='text-xl'>Home</a>
          <p>|</p>
          <a href="/" className='text-xl'>Mapa</a>
          <p>|</p>
          <a href="/" className='text-xl'>Contatos</a>
        </nav>
      </header>
      <div className='flex'>
        {showGroupDetails ? <GroupDatails group={selectedGroup} hideGroupDetails={hideGroupDetails} /> : <BrazilMap handleViewGroupDetails={handleViewGroupDetails} />}
      </div>
    </div>
  )
}

export default App
