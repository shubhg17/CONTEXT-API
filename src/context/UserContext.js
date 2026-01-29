// generally context js me likha jata hain 
//jese useState vagarh method hote the ussi tarah createContext bhi ek method hain 

import React from "react"

const UserContext = React.createContext()

// context jabh create hojata hain then it gives u a provider kyuki context ha kya ek variable provide hi toh kr rha hain toh har ek context ek provider hota hain idhar UserContext bhi ek provider hain end of the day hum ek wrapper lagayenge  jese yeh example me lets say multiple components ha aur in sabka parent ha UserContext jis se humne overall sare components ko wrap kr rkha hain toh yeh ban jayega ek provider provider mtlb iske andar joh bhi components hain yeh global usercontext ka access mil jayega top level pe lagadenge so yeh sare components ke paas usercontext ka through sari states ka access leskta hain 
{/* <UserContext>
<Login />
<Card>
  <Data />
</Card>
<UserContext/> */}

export default UserContext;



