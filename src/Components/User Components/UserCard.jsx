import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function UserCard({user}) {

  const {setUserLogIn, userLogIn} = useContext(UserContext)

  function changeUser(e) {
    e.preventDefault()
    setUserLogIn(user)
  }

  return (
    <div className="flex flex-col">
    <div className="border rounded-md p-8 ml-3 my-3 mx-3 bg-white">
      <div className="flex gap-3 items-center user-card-div">
        <img
            alt={`${user.name}'s profile picture`}
            src={user.avatar_url}
            className="object-cover w-10 h-10 rounded-full 
            border-2 border-indigo-400  shadow-indigo-400
            "/>
        <div>
        <h3 className="font-bold">
          {user.name}
        </h3>
        <h3 className="text-sm">
          {user.username}
        </h3>
        </div>
        {user.username !== userLogIn.username ? <button onClick={changeUser} className="px-4 py-1 text-sm text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-600 hover:border-transparent">Login</button> : null}
      </div>
    </div>
  </div>
  )
}