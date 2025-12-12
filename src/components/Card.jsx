import React from 'react'
import { GiChicken } from 'react-icons/gi'
import { LuLeafyGreen } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { additem } from '../redux/cartslice'
import { toast } from 'react-toastify'
function Card({name,image,id,price,type}) {
  let dispatch=useDispatch()
  return (
    <>
             <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 hover:border-2 border-green-300'>
                  <div className='w-full h-[60%] overflow-hidden rounded-lg shadow-lg'>
                <img src={image}   className='object-cover'/>
                  </div>
                    <div className='text-2xl font-semibold'>
                {name}
                    </div>
                    <div   className='w-full flex justify-between items-center'>
                <div className='text-lg text-green-500 font-bold'>{price}</div>
                  <div  className='flex justify-between items-center gap-2 text-green-500  text-lg font-semibold'>
                    {type==="veg"?<LuLeafyGreen/>:<GiChicken/>}<span>{type}</span></div>
                    </div>
                    <button className='bg-green-300 w-full rounded-lg p-3 text-white
                     hover:bg-green-400 transition-all font-bold'onClick={()=>{dispatch(additem({id:id,name:name,image:image,price:price,qty:1}));
                     toast.success("item added")}}>Add to Dish</button>
             </div> 
    </>
  )
}

export default Card
