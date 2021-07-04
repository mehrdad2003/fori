import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../context/context'

const Submenu = () => {
    const{showInfo1,location,page}=useGlobalContext()
  
    const container=useRef(null)
    useEffect(()=>{
       const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom+5}px`
    },[showInfo1,location])
    return (
        <aside className={showInfo1?'submenu show':'submenu'} ref={container}>
          <ul>
              {page.map((item,index)=>{
                  const{title,url}=item
                  return <li className='submenu-li' key={index}>
                      <a href={url}>{title}</a>
                  </li>
              })}
              
              </ul>  
        </aside>
    )
}

export default Submenu
