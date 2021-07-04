import React from 'react'
import {foundData} from '../data/data'
const FoundItems = () => {
    return (
        <div className='foundItem-container'>
           {foundData.map((item)=>{
               const{id,title,image}=item
               return <div key={id} className='single-foundItem1'
               
               >
                  
                     <div className='single-found-middle' >{title}</div>
                
                   <img src={image} alt={title}  />
                 
               </div>
           })} 
        </div>
    )
}

export default FoundItems
