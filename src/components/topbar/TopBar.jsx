import { useContext , useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar({theme, changeTheme}) {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

 
  const [burger, setBurger] = useState("burgerList");
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  
  
  return (
    <div className={'top'+theme}>
      <div className="topLeft">
        
      <button  onClick={changeTheme}><i class="fas fa-cloud-moon"></i></button>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
      <button className="burger" onClick={()=>{
             if (burger === 'burgerList'){
               setBurger("burgerListActive")
             }else{setBurger("burgerList")}
             
           }} >
                <i class="fas fa-align-justify"></i>
              </button>
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
            
          </ul>
           
        )}
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
     
     
      <div className={burger}>
        <ul className="mobileList">
            <li className="topListItem">
              <Link className="link" to="/">
               HOME
             </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
              ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
              CONTACT
              </Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
            </li>
            </ul>
            <div className="topRight">
                            {user ? (<span></span>) : (    <div><ul className="mobileList">
              <li className="topListItem">
                <Link className="link" to="/login">
                LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                REGISTER
                </Link>
              </li>
            
            </ul>
          </div>
        )}
           </div>
           </div>
    </div>
  );
}