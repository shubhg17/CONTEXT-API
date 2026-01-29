import React from "react"
import {useState , useContext} from "react"
import UserContext from "../context/UserContext"

function Login() {
  const [username , setusername]  = useState("")
  const [password , setpassword]  = useState("")

  // {setUser} this is object which is coming from provider which we created in usercontextprovider there we passed prop setUser
  const {setUser} = useContext(UserContext)

  const handleSubmit =  (e)=> {
       e.preventDefault()
       //object ha isliye ({}) ese pass kiya 
        setUser({username , password})
   }

   return (
     <>
       <h2>Login</h2>
       <input 
       value={username}
       onChange = {(e)=>setusername(e.target.value)}
       type="text" 
       placeholder="username"/>
       {/* //its just use to add space between two input boxes */}
       {" "}
       <input 
       value={password}
       onChange = {(e)=>setpassword(e.target.value)}
       type="text" 
       placeholder="password"/>
       <button onClick = {handleSubmit}>Submit</button>

     </>
   )
}

export default Login 