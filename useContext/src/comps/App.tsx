import { createContext, useState } from 'react'
import UserProfile from './UserProfile'
// import { obj, UserContext } from './CreateContext'

const userName = "israel"

export const UserContext = createContext<userType | null >(null)
type userType = {
  // user:string;
  set: React.Dispatch<React.SetStateAction<string>>
}

export default function App() {
  const[user, setUser] = useState("israel")
  
  const obj:userType = {
      // user: "jh",
      set: setUser
    }
  
  return (
    <div>
      <p>{user}</p>
      <UserContext.Provider value={obj}>
        <UserProfile/>
      </UserContext.Provider>
    </div>
  )
}
