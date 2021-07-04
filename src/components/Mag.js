import React,{useState} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'
import {magazine,kolData} from '../data/data'
import Singleque from './Singleque'
const Mag = () => {
    const{setShowRed,showRed}=useGlobalContext()
     const{data}=kolData[kolData.length-1]
    const[active,setActive]=useState(0)
    return (
        <div className='maz-container'>
           <div   className='single-que-container'>
                
                    {data.map((item,index)=>{
                        
                   const{id,title}=item
                   return <ul  key={id}>
                          <h5 className={index===active?'red':'blue'} onClick={()=>{
                              setActive(index)
                              setShowRed(!showRed)
                          }}>{title}
                          {active===index?<FaMinus/>:<FaPlus/>}
                          </h5>
                   <Singleque  index={index} {...item} active={active}/>
                   </ul>
               })}
                </div> 
                <div className='show-maz-container'>
                    {magazine.map((item)=>{
                     return   <div key={item.id} className='show-maz'>
                           <img src={item.image} alt='روزنامه' />
                        </div>
                    })}
                </div>
        </div>
    )
}

export default Mag
