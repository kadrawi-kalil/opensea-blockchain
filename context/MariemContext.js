import { createContext,useState} from 'react'


export const MariemContext = createContext()

export const MariemProvider = ({ children }) => {
  
 const [currentAccount, setCurrentAccount] = useState('abcd')


  return (
    <MariemContext.Provider
      value={{
        currentAccount,
        setCurrentAccount
      }}
    >
      {children}
    </MariemContext.Provider>
  )
}
