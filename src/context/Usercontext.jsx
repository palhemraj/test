import React, { createContext, useState } from 'react'
import { food_items } from '../food';
export const datacontext=createContext()
function Usercontext({children}) {
    const [cate,setcate]=useState(food_items);
    let [input,setinput]=useState("")
    let [showcart,setshowcart]=useState(false)
    let data={
        input,
        setinput,
        cate,
        setcate,
        showcart,
        setshowcart
    }  
  return (
    <>

         <datacontext.Provider value={data}>          
            {children}
         </datacontext.Provider>              

    </>
  )
}

export default Usercontext
