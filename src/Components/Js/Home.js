import React, { useState } from 'react'
import Styles from '../Css/Home.module.css'
import {Link} from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import {AiOutlineShoppingCart, AiOutlineCloseCircle} from 'react-icons/ai';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import kurta2 from '../Images/kurta2.jpg'
import kurta3 from '../Images/kurta3.jpg'
import kurta4 from '../Images/kurta4.jpg'
import fsaree2 from '../Images/fasaree2.jpg'
import fsaree3 from '../Images/fasaree3.jpg'
import { useAuth0 } from "@auth0/auth0-react";

import Homeprod from './Homeprod';

function Home({detail ,view, close, setClose, add, homeprod ,setHomeprod,like}) {
  const { loginWithRedirect ,  isAuthenticated } = useAuth0();

  
 
  const[wish,setWish]=useState([])


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
            <h2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h2>
            <h4>₹{cur.Price}</h4>
            <div className={Styles.icon}>
            {
                isAuthenticated?
                <button onClick={()=>add(cur)}><AiOutlineShoppingCart/>Add To Cart</button>:
                <button onClick={()=>loginWithRedirect()}><AiOutlineShoppingCart/></button>

              }             
               {
                  cur.wish ?<button onClick={()=>like(cur)}><AiFillHeart/>Wishlisted</button>:<button  onClick={()=>like(cur)}><AiOutlineHeart/>Wishlist</button>
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
      <div className={Styles.banner}>
        <div className={Styles.container}>
          <div className={Styles.details}>
            <h1>The Best Kurta collection 2023</h1>
            <Link to="/Sortitem" className={Styles.link}>Shop Now</Link>
          </div>
          <div className={Styles.ban_img}>
            <img src={kurta2}></img>
          </div>
        </div>
      </div>
      <div className={Styles.product_type}>
        <div className={Styles.container}>
          <div className={Styles.box}>
            <div className={Styles.img_box}>
              <img src={kurta3}/>

            </div>
            <div className={Styles.details}>
             <p>Casual Kurta on sale</p>
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.img_box}>
              <img src={fsaree2}/>

            </div>
            <div className={Styles.details}>
              <p>Best Deal on Saree</p>
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.img_box}>
              <img src={kurta4}/>

            </div>
            <div className={Styles.details}>
            <p>Casual Kurta on sale</p>
            </div>
          </div>
          <div className={Styles.box}>
            <div className={Styles.img_box}>
              <img src={fsaree3}/>

            </div>
            <div className={Styles.details}>
            <p>Best Deal on Saree</p>
            </div>
          </div>
        </div>
      </div><br></br><br></br>
      <center>
      <h1>...New Arrival...</h1>

      </center>
     

      <div className={Styles.min_product}>
        <div className={Styles.container}>
        {
      homeprod.map((cur)=>
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
                {
                  cur.wish ?<li onClick={()=>like(cur)}><AiFillHeart/></li>:<li  onClick={()=>like(cur)}><AiOutlineHeart/></li>
                }
             
                
                
                
              </div>
            </div>
            <div className={Styles.details}>
              <p>{cur.cat}</p>
              <h3>{cur.title}</h3>
              <h4>{cur.Price}</h4>

            </div>

          </div>
        
        )
      })
    }

          
        </div>
      </div>
   </>
  )
}

export default Home