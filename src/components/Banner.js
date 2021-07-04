import React,{useEffect,useState} from 'react'
import {banerImage} from '../data/data'
const Banner = () => {
    const[value,setValue]=useState(0)
    const{name,big,small,image,btn}=banerImage[value]
    
    useEffect(()=>{
        const change=setInterval(()=>{
            setValue((oldValue)=>{
                let newValue=oldValue+1;
                if(newValue>banerImage.length-1){
                    newValue=0
                }
                return newValue
            })
        },3000)
        return ()=>clearInterval(change)
    },[])
    return (
        <div className='banner-container'>
           <img src={image} alt={name} style={{width:'100%',height:'100%'}} /> 
           <div className={value===0?'banner-writing-R':'banner-writing'}>
               <h3>{big}</h3>
               <h4>{small}</h4>
               <button className='banner-btn'>{btn}</button>
           </div>
           <div className="bottom-banner">
            
                    <h3>فوری ثبت، سامانه تخصصی ثبت و چاپ آنلاین آگهی</h3>
                     <h5>نخستین ارائه دهنده خدمات ثبت آنلاین و چاپ انواع آگهی مفقودی مدارک و آگهی های تجاری در روزنامه رسمی و کثیرالانتشار</h5>
             
              
              
           </div>
        </div>
    )
}

export default Banner
