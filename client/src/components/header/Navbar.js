import React, {useContext} from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';


const Navbar = () => {

  const {account} = useContext(LoginContext);
  console.log(account);
  
  const cartItemCount = account && account.carts ? account.carts.length : 0;

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
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCartIcon id="icon" />

            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avatar" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;