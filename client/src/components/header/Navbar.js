import React, {useContext, useEffect} from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';


const Navbar = () => {

  const {account,setAccount} = useContext(LoginContext);
  console.log(account);
  
  const cartItemCount = account && account.carts ? account.carts.length : 0;

  const getdetailvaliduser = async()=>{
    const res = await fetch("/validuser" , {
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });

    const data = await res.json();
    //console.log(data);

    if(res.status!== 201){
      console.log("error");
    }else{
      console.log("data valid");
      setAccount(data);
  };
}

  useEffect(()=>{
    getdetailvaliduser();
  },[])

  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/"><img src="./amazon_PNG25.png" alt="" /></NavLink>
          </div>
          <div className="nav_searchbar">
            <input type="text" name="" id="" />
              <div className="search_icon" />
                <SearchIcon id="search" />

              </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">signin</NavLink>
          </div>
          <div className="cart_btn">
            {
              account ? <NavLink to="/buynow">
              <Badge badgeContent={cartItemCount} color="primary">
                <ShoppingCartIcon id="icon" />
  
              </Badge>
              </NavLink>: <NavLink to="/login">
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCartIcon id="icon" />

            </Badge>
            </NavLink>
            }
            
            <p>Cart</p>
          </div>
          {
            account ?  <Avatar className="avatar2" >{account.name[0].toUpperCase()} </Avatar>: <Avatar className="avatar" > </Avatar>
          }
         
        </div>
      </nav>
    </header>
  )
}

export default Navbar;