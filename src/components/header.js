import React from 'react'
import image from '../images/title.gif'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from '../context/context'

    
const Header=()=>{
    const{changeSidebar}=useGlobalContext()
return <header>
    <div className='header'>
        <img className='header-img' src={image} alt="naizchi" />
        <button className='header-icon' onClick={changeSidebar}>
           <FaBars />
        </button>
        
    </div>
</header>
}
export default Header