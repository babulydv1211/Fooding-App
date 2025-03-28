import React ,{useState,useContext} from 'react';
import "./Navbar.css"
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => { 
  const [menu,setMenu]=useState("Home");

  const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem('token');
    setToken("");
    navigate("/")
  }
  
  return (
    <div className="navbar">
      {/* <img src={assets.logo } alt="" className="logo" /> */}
      <Link to='/'><h1 className="logo">Fooding.com</h1></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
       <img src={assets.search_icon} alt=""/>
      <div className="navbar-search-icon">
       <Link to="/cart"><img src={assets.basket_icon} alt=""/></Link>
       <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
      :<div className="navbar-profile">
       <img src={assets.profile_icon} alt="" />
       <ul className="nav-profile-dropdown">
        <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
        <hr />
        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>

       </ul>
      </div>}




      
      </div>
    </div>
  );
}

export default Navbar;
