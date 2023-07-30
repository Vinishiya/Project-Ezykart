import React, { useState } from 'react'
import Styles from '../Css/Home.module.css'
import Productcol from './Productcol'
import { BsEye } from 'react-icons/bs';
import {AiOutlineCloseCircle, AiOutlineHeart,AiOutlineShoppingCart,AiOutlineDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Cart({cart, setCart ,detail ,view, close, setClose,store}) {

  const inc=(y)=>
  {
    const exist=cart.find((x)=>
    {
      return x.id===y.id 
    })
    setCart(cart.map((cur)=>
    {
      return cur.id===y.id ?{...exist,qty: exist.qty +1}:cur
    }))
  
  }
  const dec=(y)=>
  {
    const exist=cart.find((x)=>
    {
      return x.id===y.id 
    })
    if (exist.qty>1){
      setCart(cart.map((cur)=>
    {
      return cur.id===y.id ?{...exist,qty: exist.qty -1}:cur
    }))

    }
    
  
  }

  const Totalprice =cart.reduce((price,item)=>price +item.qty*item.Price,0)

  
  
  return (
    <>
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
            <h4>{cur.Price}</h4>
            <div className={Styles.icon}>
                           
              <button><AiOutlineHeart/>Wishlist</button>
              <button onClick={()=>{store(cur.id)}}>Delete</button>
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
      {cart.length===0 &&
      <div className={Styles.emptycart}>
        <h2 className={Styles.empty}>Your Cart is Empty</h2>
        <Link to="/Sortitem" className={Styles.link}>Shop Now</Link></div>}
      <div className={Styles.container}>
    {
    cart.map((cur)=>
    {
      return(
       
        <div className={Styles.box} key={cur.id}>
          <div className={Styles.img_box}>
            <img src={cur.img}/> </div>
            
         
          <div className={Styles.details}>
            <p>{cur.cat}</p>
            <h3>{cur.title}</h3>
            <h4>Price :₹{cur.Price}</h4>
            <div className={Styles.qty}>
              <button className={Styles.addqty} onClick={()=>inc(cur)}>+</button>
              <input type='text' value={cur.qty}></input>
              <button className={Styles.subqty} onClick={()=>dec(cur)}>-</button>
              </div>
              <div className={Styles.icon}>
            <button onClick={()=>view(cur)}><BsEye/></button>
                        
              <button onClick={()=>{store(cur.id)}}><AiOutlineDelete/></button>
             
            </div>

              <h4>Sub Total : ₹{cur.Price * cur.qty}</h4>
          </div>

        </div>
      
      )
    })
  }

        
      </div>
      {
        cart.length>0 &&
        <>
          <h2 className={Styles.total}>Total Amount:₹{Totalprice}</h2>
          <button className={Styles.check}>Check Out</button>
        </>
      }
    </div>
  
        </>)}

    

export default Cart