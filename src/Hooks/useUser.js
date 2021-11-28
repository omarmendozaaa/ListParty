import { useEffect, useState } from "react"

export const useUser = () => {
    const [user, SetUser] = useState(null)
    useEffect(()=>{
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            SetUser(user)
        }
    },[])
    return {
        user, 
        SetUser
    }
}