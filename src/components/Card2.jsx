import React from 'react'
import image from '../assets/image1.avif'
 import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { decrementqty, incrementqty, Removeitem } from '../redux/cartslice';
import { toast } from 'react-toastify';

function Card2({name,id,price,image,qty}) {
      let dispatch=useDispatch();
  return (
    <>
          <div className='w-full h-[120px] shadow-lg  flex justify-between'>
                <div className='w-[60%] h-full  flex gap-5'>
                     <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                        <img src={image} alt="" className='object-cover'/>
                     </div>
                     <div className='w-[40%] h-full flex flex-col gap-5'>
                           <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                           <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg shadow-lg overflow-hidden 
                           text-green-400 border-green-400 font-semibold text-2xl'>
                                  <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200'
                                   onClick={()=>qty>1?dispatch(decrementqty(id)):item}>-</button>
                                  <span className='w-[40%] h-full bg-slate-100 flex justify-center items-center'>{qty}</span>
                                  <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200'
                                  onClick={()=>dispatch(incrementqty(id))}>+</button>
 
                           </div>
                     </div>
                </div>
                <div className='flex flex-col justify-start  items-end gap-7'>
                 <span className='text-xl text-green-400 font-semibold'>Rs.{price}</span>
                 <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400' onClick={()=>{dispatch(Removeitem(id));
                    toast.error("Order deleted!");
                 }}/> 
                </div>
          </div> 
    </>
  )
}

export default Card2
