import React, {useState, useEffect}from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {Link} from "react-router-dom"

export default function Topbar() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
   const User = JSON.parse(localStorage.getItem("user"));
    if(User == null){
      setLoggedIn(false);  
    }else{
      setLoggedIn(true);
    }
  },[])

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
          {isLoggedIn ? 
            <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings />
              </div>
              <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            </div>
            :
            <div className="topRight">
              <Link to="/login">
                  <button>Login</button>
              </Link>
            </div>
          }
      </div>
    </div>
  );
}
