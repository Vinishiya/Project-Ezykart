
import './App.css';
import React, {  useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/Js/Product';
import Wishlist from './Components/Js/Wishlist';
import Home from './Components/Js/Home';
import Account from './Components/Js/Account';
import Nav from './Components/Js/Nav';


import Saree from './Components/Js/Saree';
import Cart from './Components/Js/Cart';
import Productcol from './Components/Js/Productcol'
import Sortitem from './Components/Js/Sortitem';
import Footer from './Components/Js/Footer';
import Homeprod from './Components/Js/Homeprod';



function App() {
  const[loading,setLoading]=useState(true)
  const spinner=document.getElementById('spinner')
  if (spinner){
    setTimeout(()=>{
      spinner.style.display="none";
      setLoading(false);
    },2000);
  }
  const[detail,setDetail]=useState([])
  const[close,setClose]=useState(false)
  const[cart,setCart]=useState([])
  const[homeprod,setHomeprod]=useState(Homeprod)
  const [search, setSearch]=useState(Productcol)
  const [wishitem,setWishitem]=useState([])
  const view=(Product)=>{
    setDetail([{...Product}])
    setClose(true)

  }
  const like=(x)=>{

    setHomeprod(homeprod.map(item=>{
      if (item==x) {
        console.log(item.wish)
        return {...item,wish : !item.wish }
    } 
    
    return item;
  }))
  const exist=wishitem.find((y)=>{
    return y.id== x.id
  })
  if(exist){
    alert("The Product is already added to your wishlist")
  }
  else{
  
  setWishitem([...wishitem, {...x}])
  alert("succesfully added to wishlist")
      }
      
  }
  
  
  const liked=(x)=>{
    setDetail(detail.map(item=>{
      if (item==x) {
        
        return {...item,wish : !item.wish }
    } 
    
    return item;
  }))
  setSearch(search.map(item=>{
    if (item==x) {
      
      return {...item,wish : !item.wish }
  }  return item;

 
}
))
const exist=wishitem.find((y)=>{
  return y.id== x.id
})
if(exist){
  alert("The Product is already added to your wishlist")
}
else{

setWishitem([...wishitem, {...x}])
alert("succesfully added to wishlist")
    }
    

  }
  
  const add=(x)=>{
    const exist=cart.find((y)=>{
      return y.id== x.id
    })
    if(exist){
      alert("The Product is already added to cart")
    }
    else{
      setCart([...cart, {...x,qty:1}])
        alert("succesfully added to cart")
    }
    
   }
   console.log(cart)
  const store=(y)=>{
    
    setCart(cart.filter(item=>item.id!=y))

}
const dislike=(y)=>{
    
  setWishitem(wishitem.filter(item=>item.id!=y))

}

 
  

  
  


  return (
    !loading &&(

    
   <>
   <Router>
    <Nav setSearch={setSearch} cart={cart} wishitem={wishitem}/>
    <Routes>
      <Route path="/Project-Ezykart/" exact element={<Home detail={detail}  view={view} close={close} setClose={setClose} add={add} homeprod={homeprod} setHomeprod={setHomeprod} like={like}/> }/>
      <Route path="/Product" exact element={<Product/>}/>
      <Route path="/Wishlist" exact element={<Wishlist wishitem={wishitem} dislike={dislike} view={view} add={add} detail={detail}  close={close} setClose={setClose}/>}/>
      <Route path="/Account" exact element={<Account/>}/>
      
      <Route path="/Sortitem" exact element={<><Sortitem setSearch={search} detail={detail} view={view} close={close} setClose={setClose}  add={add} liked={liked}/> </>}/>
      <Route path="/Saree" exact element={<><Saree /></>}/>
      <Route path="/Cart" exact element={<Cart cart={cart} setCart={setCart}  detail={detail} view={view} close={close} setClose={setClose} store={store} />}/>

    </Routes>
   </Router>
   <Footer/>

   </>)
  );
}

export default App;
