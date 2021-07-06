import React,{useState,useRef,useEffect} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'
import {kolData} from '../data/data'
import Singleque from './Singleque'
 import useWindowDimensions from '../helper/Fdf'
const Koli = () => {
    const[value,setValue]=useState(0)
    const{header,matn,btn,data}=kolData[value]
    const[active,setActive]=useState(0)
   
   const {showRed,setShowRed}=useGlobalContext()
 
   const container=useRef(null)
   const container1=useRef(null)
   const container2=useRef(null)
    const { height } = useWindowDimensions();

   useEffect(()=>{
     
         
        if(value && !data){
             const myHeight2 = container2.current.getBoundingClientRect().height
           container.current.style.height=`${height>800?`${myHeight2+320}px`:`${myHeight2+1500}px`}`
             
        }
        else if(data && value){
             const myHeight=container1.current.getBoundingClientRect().height
            container.current.style.height=`${myHeight+310}px`
        }
        else if(value===0){
             container.current.style.height=`${height>800?'50vh':'120vh'}`
        }
   },[value,data,height])
  
    return (
        <div ref={container} className='koli-container'>
           <ul className="koli-header">
               {kolData.map((item,index)=>{
                   const{image,text,id}=item
               return    <li key={id} className={index===0?'koli-li koli-header-first':'koli-li'} onClick={()=>setValue(index)}>
                         <img src={image} className='koli-img' alt={text} />
                        <h5>{text}</h5>
                   </li>
               })}
               </ul>
            {data? <div  ref={container1} className='single-que-container'>
                
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
              :
             <div ref={container2} className="koli-article">
                    <h4>{header}</h4>
                    <p  >{matn}</p>
                    <button>
                        {btn}
                    </button>
                   </div> }  
        </div>
    )
}

export default Koli
