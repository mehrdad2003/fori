import React from 'react'
import {khadamat1Data} from '../data/data'
import found from '../images/found.jpg'
const Khadamat1 = () => {
 
    return (
        <div className='khadamat1-container'>
           <h3>خدمات قانونی آنلاین</h3> 
        
               <div className="khadamat1-row">
                {khadamat1Data.map((item,index)=>{
                    const{title,text,id,price,image}=item
                    return <div  key={id} className={index===khadamat1Data.length-1?'single-khadamat-row-gold single-khadamat-row':'single-khadamat-row'}>
                     <div  className='f1_card'>
                    <div className="front face">
                   <img className='khimg' src={image} alt={text}/>
                     <div className="single-khadamat-row-center">
                               <h3>{title}</h3>
                             
                               <span>{price}</span>
                           </div>
                    </div>
                 <div className="back face center">
                <img  className='khimg'src={found} alt="found" />
                 <div className="register">
                     {index===0&& <h4 style={{color:'gold'}}>تکمیل هوشمند فرم</h4>}
                     <button>کلیک کنید</button>
                 </div>
                   </div>
                     </div>
                             
                         
                    </div>
                })}
               </div>
               <div className="khadamat1-column">
                   {khadamat1Data.map((item,index)=>{
                        const{text,title,id,image,price}=item
                        return <div key={id} className={index===khadamat1Data.length-1?'khadamat1-column-single-gold khadamat1-column-single':'khadamat1-column-single'}>
                             
                                    <h4>{title}</h4>
                              
                                     <img src={image} alt={title} />
                             
                              <h5>{text}</h5>
                                <h6>{price}</h6>
                                <button >ثبت نام</button>
                              </div>
                      
                   })}
               </div>
               </div> 
        
    )
}

export default Khadamat1
