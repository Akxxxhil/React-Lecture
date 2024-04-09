import React, { useContext } from 'react'
import UserConetxt from '../Context/Usercontext.js'

function Profile() {
    const{user}=useContext(UserConetxt)
  
    if(!user) return <>please login</>
    
    return <div>Welcome {user.username}</div>
    
  
}

export default Profile
