import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-div text-lg border rounded-md p-2 ml-1 my-3 mx-1">
    <Link to={'/'} className="header">🏠 Coding News</Link>
    </div>
  )
}