import React,{useState,useEffect} from 'react'
import {maghData} from '../data/data'
import Carousel from 'react-elastic-carousel'
import Buttons from '../helper/Button.js'

const Magh = () => {
  
    const[index,setIndex]=useState(0)
   
useEffect(()=>{
if(index>maghData.length-1){
    setIndex(0)
}
if(index===0){
    setIndex(maghData.length-1)
}
},[index])
 useEffect(()=>{
     let slider=setInterval(()=>{
         setIndex(index+1)
    },5000)
    return()=>clearInterval(slider)
},[index])
const breakPoints=[
  {width:1,itemsToShow:1},
  {width:550,itemsToShow:2},
  {width:768,itemsToShow:3},
  {width:1200,itemsToShow:4}
]

    return (
        <div className='magh-container'>
            <h4>مقالات تخصصی</h4>
            <Carousel breakPoints={breakPoints} enableAutoPlay 
            itemPadding={[10, 20]}
            isRTL={true} autoPlaySpeed={2500}
            renderArrow={Buttons}
            >
          {maghData.map((item)=>{
            
               const{image,id,text}=item
            

               return <article className='article-magh' key={id} >
                      <div className="card-image">
                          <img src={image} alt="" />
                      </div>
                        <div className="single-magh-writing">
                         <h5>{text} </h5>
                          
                     </div>
                     
                      <div className='magh-mini-text'>
                        <span>مقالات کاربردی</span>
                        
                        </div>
                      
                   
               </article>
           })} 
           
           </Carousel>
         
         
        </div>
    )
}

export default Magh
