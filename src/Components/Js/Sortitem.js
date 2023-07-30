import React ,{useState, useEffect} from 'react'
import Styles from '../Css/Home.module.css'
import { BsEye } from 'react-icons/bs';
import {AiOutlineShoppingCart, AiOutlineCloseCircle} from 'react-icons/ai';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import Productcol from './Productcol'
import { useAuth0 } from "@auth0/auth0-react";

function Sortitem({setSearch,detail, setDetail ,view, close, setClose, add,liked}) {
  const { loginWithRedirect ,  isAuthenticated } = useAuth0();
  const [srt,setSrt]=useState("")
 const newe=(a)=>{
    setSrt(a)
 }
 const [store,setStore]=useState(Productcol)
 
 useEffect(()=>{
    setStore(Productcol.filter(i=>i.cat==srt))
 },[srt])
 const like=(x)=>{

  setStore(store.map(item=>{
    if (item==x) {
      console.log(item.wish)
      return {...item,wish : !item.wish }
  } 
  return item;
}))
}



 


  return (<>
  <div className={Styles.opt}>
        <button className={Styles.btn} value="Plazzo" onClick={()=>newe()}>All</button>
        <button className={Styles.btn} value="Kurta" onClick={(e)=>newe(e.target.value)}>Kurta</button>
        <button className={Styles.btn} value="Plazzo pants" onClick={(e)=>newe(e.target.value)}>Palazzo</button>
        <button className={Styles.btn} value="Jeans pants" onClick={(e)=>newe(e.target.value)}>Jeans</button>
        <button className={Styles.btn} value="saree" onClick={(e)=>newe(e.target.value)}>Saree</button>
        <button className={Styles.btn} value="Top" onClick={(e)=>newe(e.target.value)}>Tops</button>
        <button className={Styles.btn} value="Night" onClick={(e)=>newe(e.target.value)}>Night Dresses</button>
     </div>  

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
              <button onClick={()=>add(cur)}><AiOutlineShoppingCart/>Add to Cart</button>              
              {
                  cur.wish ?<button onClick={()=>liked(cur)}><AiFillHeart/>Wishlisted</button>:<button  onClick={()=>liked(cur)}><AiOutlineHeart/>Wishlist</button>
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

     
        
      <div className={Styles.min_product}>
      <div className={Styles.container}>
      {
    store.map((cur)=>
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
            
              <li onClick={()=>view(cur)}><BsEye/></li>
              {
                  cur.wish ?<li onClick={()=>liked(cur)}><AiFillHeart/></li>:<li  onClick={()=>liked(cur)}><AiOutlineHeart/></li>
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
    <h1>More Products....</h1>
  {setSearch.length > 0? 
    <div className={Styles.min_product}>
    <div className={Styles.container}>
    {
  setSearch.map((cur)=>
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
         
            <li onClick={()=>view(cur)}><BsEye/></li>
            {
                  cur.wish ?<li onClick={()=>liked(cur)}><AiFillHeart/></li>:<li  onClick={()=>liked(cur)}><AiOutlineHeart/></li>
                }
             
            
            
            
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
  </div>:<p>The Item u searched is not available!!</p>}
    </>
  )}


export default Sortitem