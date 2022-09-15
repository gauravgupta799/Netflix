import { loginStart, loginFailure, loginSuccess } from "./AuthAction";
import axios from "axios";

export const login = async (user, dispatch) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post("auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
        // console.log(res.data)
    }catch(e){
        dispatch(loginFailure());
    }
}

