import React, {  useContext,useState } from 'react'
import {nav1} from '../data/data'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[sidebar,setSidebar]=useState(false)
  const[link,setLink]=useState(false)
   const [showInfo1, setShowInfo1] = useState(false);
   const[location,setLocation]=useState({center:0,bottom:0})
   const[page,setPage]=useState([])
   const[images,setImages]=useState([])
   const[showRed,setShowRed]=useState(false)
  const changeSidebar=()=>{
      setSidebar(!sidebar)
      
  }
  const showLink=()=>{
  setLink(!link)
  }
  const openSubmenu=(data,location)=>{
   
    if(data==='ثبت انواع آگهی'||data==='آگهی های شما'){
      setShowInfo1(true)
      setLocation(location)
    const items=nav1.find(item=>item.name===data)
     if(items.links){
       setPage(items.links)
      
     }
   
    }
 
  }
  const closeSubmenu=()=>{
    setShowInfo1(false)
  }
  return (
    <AppContext.Provider
      value={{changeSidebar,sidebar,setSidebar,showLink,setLink,link,showInfo1,setShowInfo1,
      openSubmenu,closeSubmenu,location,page,images,setImages,showRed,setShowRed
      
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
