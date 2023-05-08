import {useContext , useState} from "react";
import Image from "next/image";
import Layout from "./Layout";
import { Store } from "@/context/cart";
import productsItem from '../data/productTest.json'
import Link from "next/link";


const Products = () => {

  return (
    <div>
    <Layout title={'shop'}>
      <div className="w-72 md:w-full lg:w-[70%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 gap-8 p-3 h-screen ">
        {productsItem.map((item ,id)=>{
            return (
                <div key={id} className="group/item  w-full h-full  shadow-xl shadow-[#303df289] hover:shadow-none  pb-5 transition-all ease-out duration-300  bg-gradient-to-b from-[#303df2] to-[#c3d7f7]">
                <div className=" w-full relative h-[55%] group-hover/item:scale-90 overflow-hidden shadow-xl transition-all ease-out duration-300  group-hover/item:rounded-2xl mb-6 md:mb-2 ">
                  <Image  alt="whay"  width={500} height={0} src={item.img} />
                </div>
                <div className=" w-full md:h-1/2 flex justify-center items-center flex-col">
                  <h1 className=" text-4xl mb-7 md:mb-2">{item.title}</h1>
                  <div className=" flex justify-center flex-col items-center ">

                <Link href={`/product/${item.slug}`}>
                    <button  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm md:text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        توضیحات بیشتر
                      </span>
                    </button>
                </Link>  
                  </div>
                </div>
              </div>
            )
        })}
      </div>
      </Layout>     
    </div>
  );
};

export default Products;
