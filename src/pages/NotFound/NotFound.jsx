import { Link } from "react-router-dom"
import HomePage from "../HomePage/HomePage"

const NotFound = () => {
  return (
    <div>NotFound
      <Link to='/'><HomePage/></Link>
    </div>
  )
}

export default NotFound