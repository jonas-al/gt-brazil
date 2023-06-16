import BrazilMap from '@/components/BrazilMap'
import GroupDatails from 'components/GroupDatails'
import { useState } from 'react'

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
    <div className='flex bg-gray-50'>
      {showGroupDetails ? <GroupDatails group={selectedGroup} hideGroupDetails={hideGroupDetails} /> : <BrazilMap handleViewGroupDetails={handleViewGroupDetails} />}
    </div>
  )
}

export default App
