import { useContext, createContext, useState } from 'react'

const GroupContext = createContext()

export const GroupProvider = ({ children }) => {
  const [group, setGroup] = useState()

  return <GroupContext.Provider value={{group, setGroup}}>
    {children}
  </GroupContext.Provider>
}

export const GroupValue = () => {
  return useContext(GroupContext)
}