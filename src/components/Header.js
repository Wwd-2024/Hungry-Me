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
                Home
            </li>
            <li>
                About us
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