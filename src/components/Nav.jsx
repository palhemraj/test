import React, { useContext, useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { LuShoppingBag } from 'react-icons/lu'
import { MdFastfood } from 'react-icons/md'
import { datacontext } from '../context/Usercontext'
import { food_items } from '../food'
import { useSelector } from 'react-redux'

function Nav() {
let {input,setinput,cate,setcate,showcart,setshowcart}=useContext(datacontext)

useEffect(()=>{
    let newlist=food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
    setcate(newlist);
},[input]);
let items=useSelector(state=>state.cart)
 
  return (
    <>
           <div className='w-full h-[100px]    flex justify-between items-center px-5 md:px-8'>
                  <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl '>
                      <MdFastfood  className='w-[30px] h-[30px] text-green-500'/>
                  </div>
                  <form   className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 shadow-xl rounded-md md:w-[70%]'
                  onSubmit={(e)=>e.preventDefault()}>
                      <IoSearch className='text-green-500 w-5 h-5 '/>
                      <input type="text" placeholder='Search items.......'  className='w-full outline-none  
                      text-[16px] md:text-[20px]'   onChange={(e)=>setinput(e.target.value)}  value={input}/>
                  </form>
                   <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'
                   onClick={()=>{
                        setshowcart(true);
                   }}>
                           <span className='absolute top-0 right-1 text-green-500 font-bold text-[20px]'>{items.length}</span>
                      <LuShoppingBag className='w-[30px] h-[30px] text-green-500'/>
                  </div>
           </div> 
    </>
  )
}

export default Nav
