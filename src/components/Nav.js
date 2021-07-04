import React from 'react';
import {nav1} from '../data/data'

import { useGlobalContext } from '../context/context';
import { FaPlus, FaSearch } from 'react-icons/fa';

const Nav = () => {
 const{openSubmenu,closeSubmenu}=useGlobalContext()
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
    
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
      
        <ul className='nav-links'>
            {nav1.map((item,index)=>{
                const{id,name,links,url}=item
                return  <li  key={id}> 
                
         {links? <button onMouseOver={displaySubmenu} className='link-btn'   >
            {name}<FaPlus/>
            </button>: <button  className='link-btn'   >
           <a href={url} className={index===0?'gold':'white'}>{name}</a>
            </button>}      
          </li>
            })}
        
        </ul>
        <button className='search-btn'><FaSearch/></button>
      </div>
    </nav>
  )
};

export default Nav;
