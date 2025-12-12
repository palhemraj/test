import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { datacontext } from "../context/Usercontext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
const {cate,setcate,input,showcart,setshowcart}=useContext(datacontext);

const filter=(category)=>{
     if(category==="All"){
         setcate(food_items)
     }else{
        let newlist= food_items.filter((item)=>item.food_category===category)
        setcate(newlist)
     }
      
}


let items=useSelector(state=>state.cart);
let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0);
console.log(subtotal)
let deliveryfees=20;
let taxes=subtotal*0.5/100;
let total=Math.floor(subtotal+deliveryfees+taxes)

  return (
    <>
      <div className="bg-slate-200 w-full min-h-screen">
        <Nav />

        {!input?<div className="flex justify-center items-center flex-wrap gap-5 w-full">
                {
                      Categories.map((items,index)=>{
                           return(
                              
                                <div key={index} className="flex flex-col items-start  gap-5 p-5 w-[140px] h-[150px] 
                                justify-start text-[20px] font-semibold text-gray-600  rounded-lg shadow-xl
                                 hover:bg-green-200 transition-all duration-200"  onClick={()=>filter(items.name)}>
                                       {items.icon}
                                       {items.name}                                
                                </div>
                                 
                              
                           )
                      })
                }
         </div>:null}
        
           <div  className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 ">
                   
                        {cate.length>1?cate.map((items,index)=>{
                                return(
                                          <div key={index}>
                                               <Card name={items.food_name} id={items.id} price={items.price}
                                                    image={items.food_image} type={items.food_type} />
                                          </div>
                                )
                        }):<div  className="text-center text-green-500 font-semibold pt-5 text-2xl">NO DISH FOUND</div>}
           </div>
                 <div className={` w-full  md:w-[40vw] h-full   fixed top-0 right-0 bg-white  shadow-xl p-6  transition-all duration-500 ${showcart?"translate-x-0":"translate-x-full"}
                 flex flex-col items-center  overflow-auto`}>
                       <header className="w-full flex justify-between items-center">
                               <span className="text-green-400 text-5 font-semibold">order items</span>
                               <RxCross2 className="text-green-400 text-5 font-semibold w-[30px] h-5 cursor-pointer hover:text-gray-600"
                                onClick={()=>setshowcart(false)}/>
                       </header>
                          {items.length>0?  <>
                         <div className="w-full mt-9 gap-8 flex flex-col">
                                 {
                                      items.map((item)=>{
                                       return <Card2 name={item.name}  image={item.image} price={item.price} id={item.id}  qty={item.qty}/>
                                      })
                                 }
                         </div>
                            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col  gap-2 p-8">

                              <div className="flex justify-between items-center w-full">
                                     <span className="text-lg text-gray-600 font-semibold">subtotal</span>
                                     <span  className="text-green-400 font-semibold text-md">Rs.{subtotal}/-</span>
                              </div>
                                     <div className="flex justify-between items-center w-full">
                                     <span className="text-lg text-gray-600 font-semibold">Delivery Fees</span>
                                     <span  className="text-green-400 font-semibold text-md">Rs.{deliveryfees}/-</span>
                              </div>
                                     <div className="flex justify-between items-center w-full">
                                     <span className="text-lg text-gray-600 font-semibold">Taxes</span>
                                     <span  className="text-green-400 font-semibold text-md">Rs.{taxes}/-</span>
                              </div>
                                    
                            </div>
                             <div className="flex justify-between items-center w-full p-9">
                                     <span className="text-2xl text-gray-600 font-semibold ">TOTAL</span>
                                     <span  className="text-green-400 font-semibold text-2xl">Rs.{total}/-</span>
                              </div>
                               <button className='bg-green-300 w-[80%] rounded-lg p-3 text-white
                     hover:bg-green-400 transition-all font-bold' onClick={()=>toast.success("placed order...")}>place order</button>
                     </>:<div  className="text-center text-green-500 font-semibold pt-5 text-2xl">Empty Card</div>}
                     
                 </div>
      </div>


    </>
  );
}

export default Home;
 