import React from 'react'
import logo from '../Images/logo.jpg'
import Styles from '../Css/Footer.module.css'
import { BsFacebook, BsFillTelephonePlusFill, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

function Footer() {
  return (
  <div className={Styles.footer}>
    <div className={Styles.container}>
        <div className={Styles.about}>
            <div className={Styles.logo}>
                <img src={logo}></img>
                <p>We aret team of designers and developer that create high quality website</p>
                <div className={Styles.media}>
                
                <li><BsWhatsapp/></li>
                <li><BsFacebook/></li>
                <li><BsTwitter/></li>
            </div>
            </div>
            <div className={Styles.account}>
                <h3>My Account</h3>
                <li>Cart</li>
                
                <li>Orders</li>
                <li>Wish</li>
            </div>
            <div className={Styles.contact}>
                <h3>Contact</h3>
                <li><BsFillTelephonePlusFill/>  +91 9888849999</li>
                <li><AiOutlineMail/>www.ezykart.com</li>
            </div>
            
           
        </div>
        <div className={Styles.copy}>
        <b>{new Date().getFullYear()} www.ezykart.com Website. All rights reserved.</b>
               </div>
    </div>
  </div>
  )
}

export default Footer