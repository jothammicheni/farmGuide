import React, { useContext, useState } from 'react'

import { createContext } from 'react'
const UserContext=createContext(undefined)


function UserProvider(){
    const[user]=useState({
     name:'jotham',
     email:'jm@gmail.com'
    })
    return <UserContext.Provider  value={{user}}></UserContext.Provider>
}
export const useUser=()=>useContext(UserContext)
export default UserProvider;