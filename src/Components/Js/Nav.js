import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Styles from '../Css/Nav.module.css'
import logo from '../Images/logo.jpg'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import {CiLogin} from 'react-icons/ci';
import {CiLogout} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";
import Productcol from './Productcol'

function Nav({setSearch ,cart,wishitem}) {
  const { loginWithRedirect , logout, user, isAuthenticated } = useAuth0();
  const [searchin,setSearchin]=useState("")

  const sav=(x)=>{
    setSearchin(x)
  }
  

  useEffect(()=>{
    setSearch(Productcol.filter(i=>i.cat.toLowerCase().includes(searchin)))
 },[searchin])
  return (
    <>
    <div className={Styles.main_header}>
      <div className={Styles.container}>
        <div className={Styles.logo}>
          <img src={logo}/>
        </div>
        <div className={Styles.search_box}>
          <input type="text" value={searchin} placeholder='Search the product' onChange={(e)=>sav(e.target.value)}/>
          <Link to="/Sortitem" className={Styles.link}>Search</Link>
          </div>
          <div className={Styles.icon}>
            {
              isAuthenticated && 
              (
                <div className={Styles.account}>
              <div className={Styles.user}>
              <Link to="/Account" className={Styles.link}><AiOutlineUser/></Link>
              </div>
              <p>{user.name}</p>
              
            </div>
              )
            }


            
            <div className={Styles.second_icon}>
            <Link to="/wishlist"className={Styles.link}><AiOutlineHeart/></Link>
            <Link to="/Cart" className={Styles.link}><BsBagCheck/>{cart.length}</Link>
            </div>
            

          </div>
        
      </div>
      </div>

      <div className={Styles.header}>
        <div className={Styles.contact}>
          <div className={Styles.nav}>
          <ul>
            <li>
              <Link to="/Project-Ezykart/" className={Styles.item}>Home</Link>
            </li>
            <li>
              <Link to="/Sortitem  " className={Styles.item}>Products</Link>
            </li>
            
            
          </ul>
          </div>
         
          <div className={Styles.auth}>
            {
              isAuthenticated ?
              <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button> :
              <button onClick={() => loginWithRedirect()}><CiLogin/></button>

            }
            
            
          </div>
        </div>

      </div>
  
  
    </>
  ) 
}

export default Nav