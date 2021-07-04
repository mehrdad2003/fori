import React from 'react'
import {useGlobalContext} from '../context/context'
import{nav1} from '../data/data'
import image from '../images/title.gif'
import Social from './Social'
import SingleItem from './SingleItem'
const Sidebar = () => {
    const{sidebar,changeSidebar}=useGlobalContext()

    return (
        <>
        <section className={`${sidebar?'sidebar sidebar-show':'sidebar'}`}
        onClick={changeSidebar}>
             </section>
          <div className={`${sidebar?'sidebar-main-show sidebar-main':'sidebar-main'}`}>
              <div className="sidebar-logo">
                  <img src={image} alt="forisabt" />
              </div>
              <div className="sidebar-list">
                  {nav1.map((item,index)=>{
                     return<SingleItem key={item.id} {...item} index={index}/>
                      })}

              </div>
              <Social/>
              </div>  
              </>
       
    )
}

export default Sidebar
