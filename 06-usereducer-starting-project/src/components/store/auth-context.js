import React, { useState, useEffect } from "react"


const authContext = React.createContext({
    isLoggedIn: false,
    onLogIn: (email, password) => { },
    onLogout: () => { }

})
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);


    const loginHandler = (email, password) => {

        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    return (<authContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogIn: loginHandler
    }}>
        {props.children}
    </authContext.Provider>)
}
export default authContext
