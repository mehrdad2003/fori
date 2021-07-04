import React from 'react'
import { pay,sarii } from '../data/data'
const Footer = () => {
    return (
        <div className='hero'>
             <div className='hero-center'>
             <div className='footer-nemad'>
              
                 <h4>نمادها</h4>
                    <hr style={{width:'10rem'}} />
                 <ul>
                     <li>نماد 1</li>
                       <li>نماد2</li>
                 </ul>
                 </div> 
              <div className='footer-connection'>
                  <h4>تماس با ما</h4>
                 <hr style={{width:'10rem'}} />
                  <ul>
                    {sarii.map((item)=>{
                        return <li key={item.id}>
                            {item.title}
                        </li>
                    })}
                  </ul>
                  </div> 
             <div className='footer-dast'>
                 <h4>دسترسی سریع</h4>
                <hr style={{width:'10rem'}} />
                 <ul>
                    {pay.map((item)=>{
                        return<li key={item.id} >
                            {item.title}
                        </li>
                    })}
                 </ul>
                 </div> 
                  <div className='hero-shadow'> </div>
                  <div className='whatsup'> </div>           
        </div>      
        </div>
    )
}

export default Footer
