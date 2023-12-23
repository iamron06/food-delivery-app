import React , {useState} from 'react'
import logo from "../images/logo.jpg"
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

 const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt='logo' />
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li> */}
           <li>{onlineStatus?"Online🟢":"Offline🔴"}</li>
           <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;