import { useContext } from "react"
import { ThemeContext} from "./Main"

export default function Footer() {
    const Theme = useContext(ThemeContext)
  return (
    <div>
        <h4>Theme: {Theme?.theme}</h4>
    </div>
  )
}
