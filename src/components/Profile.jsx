import React , {useContext} from "react"
import UserContext from "../context/UserContext"
function Profile() {
  //user as hume data chaiye method nhi 
  const {user}  = useContext(UserContext)
   
  //we can also write like this 
    if(!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile