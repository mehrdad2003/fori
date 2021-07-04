import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
const SingleItem = ({name,links,index}) => {
       const [showInfo, setShowInfo] = React.useState(false);
    return (
        <article className='question'>
      <ul>
        <li className='li-question'>{index===0?<span className='red'>{name}</span>:<span>{name}</span>}
    {links && <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>} 
        </li>  
      </ul>
      {showInfo && <ul>
          {links.map((item,index)=>{
              return <li className='next-li' key={index}>
                  <a href={item.url}>{item.title}</a>
              </li>
          })}
          
          </ul>}
          
    </article>
    )
}

export default SingleItem
