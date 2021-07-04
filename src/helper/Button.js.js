import React from 'react'
import  { consts } from 'react-elastic-carousel';
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
const Buttons = ({ type, onClick, isEdge }) => {
    const pointer=type === consts.PREV ? <FaArrowRight/>:<FaArrowLeft/>
    return (
        <div className='magh-btn-container'>
             <button  className='magh-btn' onClick={onClick} disabled={isEdge}>
           {pointer}
             </button>
            
            
           </div>
    )
}

export default Buttons
