import React from 'react'
import {Link} from 'react-router-dom'
import Styles from '../Css/Catogories.module.css'
function Catogories() {
  return (
    <>
    <Link className={Styles.item}  to="/Popular" >Popular</Link>
    <Link  className={Styles.item} to="/Anarkali">Anarkali</Link>
    <Link className={Styles.item}  to="/Saree">Saree</Link>
    <Link className={Styles.item}  to="/Top">Top</Link>
    </>
  )
}

export default Catogories