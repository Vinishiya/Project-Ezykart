import React from 'react'

import { AiFillHeart, AiOutlineCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import { useAuth0 } from '@auth0/auth0-react';
import Styles from '../Css/Home.module.css'
import { Link } from 'react-router-dom';

function Wishlist({wishitem,dislike,view, add,close, setClose,detail}) {
  const { loginWithRedirect ,  isAuthenticated } = useAuth0();
  return (<>
    {
      close?
      <div className={Styles.product_details}>
        <div className={Styles.container}>
      <button onClick={()=>setClose(false)} className={Styles.close}><AiOutlineCloseCircle/></button>
      
      {
    detail.map((cur)=>
    {
      return(
       
        <div className={Styles.box} key={cur.id}>
          <div className={Styles.img_box}>
            <img src={cur.img}/>
            
            
          </div>
          <div className={Styles.details}>
            <p>{cur.cat}</p>
            <h3>{cur.title}</h3>
            <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
            <h4>₹{cur.Price}</h4>
            <div className={Styles.icon}>
            {
                isAuthenticated?
                <button onClick={()=>add(cur)}><AiOutlineShoppingCart/>Add To Cart</button>:
                <button onClick={()=>loginWithRedirect()}><AiOutlineShoppingCart/></button>

              }             
               
             
            </div>

          </div>

        </div>
      
      )
    })
  }

        
      </div>
    </div>:null
     }
     
     <div className={Styles.cart_item}>
   
     {wishitem.length===0 &&
      <div className={Styles.emptycart}>
        <h2 className={Styles.empty}> Wish List is Empty</h2>
        <Link to="/Sortitem" className={Styles.link}>Shop Now</Link></div>}</div>
        <div className={Styles.min_product}>
    <div className={Styles.container}>
    {
  wishitem.map((cur)=>
  {
    return(
     
      <div className={Styles.box} key={cur.id}>
        <div className={Styles.img_box}>
          <img src={cur.img}/>
          
          <div className={Styles.icon}>
          {
            isAuthenticated?
            <li onClick={()=>add(cur)}><AiOutlineShoppingCart/></li>:
            <li onClick={()=>loginWithRedirect()}><AiOutlineShoppingCart/></li>

          }
           
            <li  onClick={()=>view(cur)}><BsEye/></li>
            <li onClick={()=>dislike(cur.id)}><AiFillHeart/></li>
         
            
            
            
          </div>
        </div>
        <div className={Styles.details}>
          <p>{cur.cat}</p>
          <h3>{cur.title}</h3>
          <h4>₹{cur.Price}</h4>

        </div>

      </div>
    
    )
  })
}

      
    </div>
    </div>

  </>)
}

export default Wishlist