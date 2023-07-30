import React, { useState,useEffect } from 'react'
import Productcol from './Productcol'
import Styles from '../Css/Home.module.css'
import { BsEye } from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

function Product() {
  const[prod,setProd]=useState(Productcol)
  const [srt,setSrt]=useState("")
  
  useEffect(()=>{
    setProd(Productcol.filter(i=>i.cat==srt))
 },[srt])
  return (
    <><h2>Home . Products</h2>
    

      <button value="Kurta" onClick={(e)=>setSrt(e.target.value)}>Kurtas</button>
      <button value="saree" onClick={(e)=>setSrt(e.target.value)}>Sarees</button>
      
       
    { setSrt ?
      <div className={Styles.min_product}>
      <div className={Styles.container}>
      {
    prod.map((cur)=>
    {
      return(
       
        <div className={Styles.box} key={cur.id}>
          <div className={Styles.img_box}>
            <img src={cur.img}/>
            
            <div className={Styles.icon}>
              <li><AiOutlineShoppingCart/></li>
              <li><BsEye/></li>
              <li><AiOutlineHeart/></li>
              
              
              
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
    </div>:
        <div className={Styles.min_product}>
        <div className={Styles.container}>
        {
      setSrt.map((cur)=>
      {
        return(
         
          <div className={Styles.box} key={cur.id}>
            <div className={Styles.img_box}>
              <img src={cur.img}/>
              
              <div className={Styles.icon}>
                <li><AiOutlineShoppingCart/></li>
                <li><BsEye/></li>
                <li><AiOutlineHeart/></li>
                
                
                
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
     

    
      

      

    }
    </>
    
  )
}

export default Product