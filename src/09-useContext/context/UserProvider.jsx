import { UserContext } from "./UseContext"

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'mundo'}}>
            {children}
        </UserContext.Provider>
    )
}
