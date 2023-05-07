import React from "react";
import { Chest } from "@/components/detail";
import Layout from "@/components/Layout";
import { ImPlay } from "react-icons/im";
import Image from "next/image";

const chest = () => {
  return (
    <div>
            <Layout>
        <div>
          <h1 className="text-3xl mb-6">حرکات  سینه </h1>
        </div>

        {Chest.map((item) => {
          return (
            <div className=" w-[20rem] md:w-[35rem] mb-10 lg:w-[70%] p-3 bg-gradient-to-b from-[#4450f4] shadow-xl to-[#c3d7f7] ">
              <div className="mb-4">
                <p className=" text-white mb-3 text-xl">{item.title}</p>
                <p>{item.description}</p>
              </div>

              <div className="flex w-full  justify-center items-center ">
                <a
                  target="blank"
                  className="flex items-center justify-center relative"
                  href={item.url}
                >
                  <ImPlay className=" w-6 h-6 absolute text-blue-400" />

                  <Image
                    width={200}
                    height={50}
                    src={item.img}
                    alt="shoulder"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </Layout>
    </div>
  )
}

export default chest
