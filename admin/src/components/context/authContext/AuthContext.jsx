import AuthReducer from "./AuthReducer";
import React,{useReducer, createContext, useEffect} from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching:false,
    error:false,
}

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider value ={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider }