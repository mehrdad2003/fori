import React from 'react'
import{useGlobalContext} from '../context/context'
const Singleque = ({ans,index,active}) => {
  const{showRed}=useGlobalContext()
    return (
        <>
     {showRed && <li className={active===index?'gg':'ff'} >
           <p>{ans}</p>
        </li>}  
        </>
    )
}

export default Singleque
