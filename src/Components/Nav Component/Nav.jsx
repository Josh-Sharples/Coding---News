import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../User Components/UserContext";

export default function Nav() {

  const {userLogIn} = useContext(UserContext)

  return (
    <nav>
      <div className="navbar bg-base-100 outer-div">
        <div className="navbar-start">
          <Link
            to={`/`}
            className="btn btn-ghost text-xl"
          >
            Coding News
          </Link>
        </div>
        <div className="navbar-end">
          <Link to={`/users`} className="btn">{userLogIn.username? userLogIn.username : 'Login'}</Link>
        </div>
      </div>
    </nav>
  );
}
