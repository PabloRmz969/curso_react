import { UserContext } from "./UseContext"

export const UserProvider = ({ children }) => {
    const user = {
        id: 312,
        email: 'test@gmail.com',
        name: 'Test'
    }

    return (
        <UserContext.Provider value={{ hola: 'mundo', user}}>
            {children}
        </UserContext.Provider>
    )
}
