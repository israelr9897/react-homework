import { useContext } from 'react'
import { UserContext } from './App'

export default function UserName() {
  const user = useContext(UserContext)
  return (
    <div>
        <input onChange={e => user?.set(e.target.value)}></input>
    </div>
  )
}
