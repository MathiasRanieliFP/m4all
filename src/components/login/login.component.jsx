import React from "react";
import { Link, useNavigate } from "react-router-dom";




export const Login = () => {
const navigate = useNavigate()


    return(
        <button><Link to={"/home"}>main</Link></button>
    )

}