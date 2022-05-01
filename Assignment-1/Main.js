import React from 'react'
import Footer from './Footer'
import LatestPost from './Latest'
import NavBar from './NavBar'
import './style.css'

function Main () {
  return (
    <div>
        <NavBar/>
        
        <div className='main-body'>

<LatestPost/>
        </div>
        <Footer/>
         </div>
  )
}

export default Main 