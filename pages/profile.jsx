import React, { useState , useRef } from "react";
import Layout from "@/components/Layout";
import profileIMG from "../public/assets/images/166yearsold.jpeg";
import { FaUserEdit, FaFolderPlus, FaUpload } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Previews from "@/components/Previews";
import Image from "next/image";

const Profile = () => {
  const [openPhoto  , setOpenPhoto] = useState(false)
  const inputRef = useRef()

  const {
    register,
    handleSubmit,
  } = useForm();


  const handleData = (data)=>{
    console.table(data)
  }
  const handleDragOver = (e)=>{
    
   
  }
  const handleOnDrag = (e)=>{
   
    console.log(e)
  }

  const handleClick = ()=>{
    inputRef.current()
  }

  return (
    <div>
     <Layout title={'profile'}>
        <div>
          <div className=" w-full mb-6 flex justify-center relative items-center">
            
            <Image
              className=" w-1/2 rounded-full  shadow-slate-800 shadow-2xl"
              src={profileIMG}
              alt="profileimg"
            />
            <FaUserEdit className="w-7 h-7 text-white absolute bottom-3 left-[30%] cursor-pointer" />
          </div>


          <div className=" grid grid-col-12 mb-4">
            <input
              className=" md:text-xl cursor-not-allowed  bg-slate-500 p-1 rounded-md outline-none mb-3 border focus:border-white"
              type="text"
              value="اقا"
              disabled
            />
            <div className=" flex justify-center">
              <hr className=" bg-blue-500 h-[2px] mb-3 w-1/2" />
            </div>

            <input
              className=" md:text-xl grid-cols-2 cursor-not-allowed  bg-slate-500 p-1 rounded-md outline-none mb-3 border focus:border-white"
              type="text"
              value="رضا"
              disabled
            />
            <div className=" flex justify-center">
              <hr className=" bg-blue-500 h-[2px] mb-3 w-1/2" />
            </div>
            <input
              className=" md:text-xl bg-slate-500 cursor-not-allowed  p-1 rounded-md outline-none mb-3 border focus:border-white"
              type="text"
              value="اقا رضا"
              disabled
            />
            <div className=" flex justify-center">
              <hr className=" bg-blue-500 h-[2px] mb-3 w-1/2" />
            </div>
            <input
              className=" md:text-xl bg-slate-500 p-1 cursor-not-allowed  rounded-md outline-none mb-3 border focus:border-white"
              type="email"
              value="test@gmail.com"
              disabled
            />
            <div className=" flex justify-center">
              <hr className=" bg-blue-500 h-[2px] mb-3 w-1/2" />
            </div>
            <input
              className=" md:text-xl bg-slate-500 p-1 cursor-not-allowed  rounded-md outline-none mb-3 border focus:border-white"
              type="text"
              value="۰۹۳۵۳۹۸۸۸۸"
              disabled
            />
          </div>

          <div className="w-full text-center mb-6">
            <h2 className=" text-2xl">اطلات زیر را تکمیل کنید</h2>
          </div>

          <div className="w-full flex items-center justify-center">
            <form onSubmit={handleSubmit(handleData)}>
            <div className=" w-full flex  justify-center items-center flex-col lg:flex-row ">
            <input
                type="number"
                className=" bg-slate-300 p-1  rounded-md outline-none mb-6 border focus:border-white"
                placeholder="قد (cm)"
              />
              <input
                type="number"
                className=" bg-slate-300 p-1  rounded-md outline-none mb-6 border focus:border-white"
                placeholder="وزن (kg)"
              />
              <input
                type="number"
                className=" bg-slate-300 p-1  rounded-md outline-none mb-6 border focus:border-white"
                placeholder="دور بازو (cm)"
              />
              <input
                type="number"
                className=" bg-slate-300 p-1  rounded-md outline-none mb-6 border focus:border-white"
                placeholder="دور کمر (cm)"
              />
              </div>  
   

              <div className="  flex  justify-center items-center flex-col">
                  <div className=" w-[20rem] mb-4 cursor-pointer relative p-3 h-[20rem] border-dashed border-2 border-black" onDragOver={handleDragOver} onDrag={handleOnDrag}>
                        <Previews/>
                    </div>
                <div>

                <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm md:text-lg lg:text-xlg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span class="relative px-7  py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      تکمیل شد
                  </span>
                  </button>
                </div>
                   
              </div>
                
            </form>
          </div>
        </div>
        </Layout>
    </div>
  );
};

export default Profile;
