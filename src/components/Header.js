import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

import {useState} from 'react';

const Header = () => {



    const [loginBtn, setLoginBtn] = useState("Login");

   return ( <div className="header">
    <div >
        <img className="logo" src={LOGO_URL}/>
    </div>
    <div className ="nav-item">
        <ul>
            <li>
                <Link className="react-link" to="/"> Home</Link>
            </li>
            <li>
            <Link className="react-link" to="/about">  About us</Link>
            </li>
            <li>
                Cart
            </li>
            <li onClick={()=> {

            loginBtn ==='Login' ? setLoginBtn("Logout"):setLoginBtn("Login");

            }}>
                {loginBtn}
            </li>
        </ul>
    </div>
    </div>)
    
};
  
    export default Header;