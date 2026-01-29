// context provider me hume jsx banana padega as hume data yaha receive krna hain 
import React , {useState} from "react"
import UserContext from "./UserContext.js"

//yeh function ke parameter me props hain aur recieve krne ke liye {} use krna padega children basically joh bhi apke paas arha hain usko as it is paas krdo generic naam hum use krte hain not necessary but generally used 
const UserContextProvider = ({children}) => {
   const [user , setUser] = useState(null)
   return (
    // provider se wrap to krdiya but konsi value ka access derhe ho voh bhi hume batana padega  aur humne value me object daldiya as if multiple values are there u can directly add  
     <UserContext.Provider value = {{user , setUser}}>
     {/* // bass issko likhne se sabkuch ajayega tumhare provider se children mtlb sab kuch */}
       {children}
     </UserContext.Provider>
   )
}

export default UserContextProvider