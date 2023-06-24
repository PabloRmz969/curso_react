import { useState } from "react"
import { UserContext } from "./UseContext"

export const UserProvider = ({ children }) => {
    // const user = {
    //     id: 6413,
    //     name: 'Pablo',
    //     email: 'pb@gmail.com'
    // }

    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
