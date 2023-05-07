import Layout from "@/components/Layout";
import { useState } from "react";
import Link from "next/link";

const Exercise = () => {
  const bodyType = [
    {
      id: 1,
      title: "حرکات سرشانه",
      img: "/assets/images/body/shoulders.png",
      href: "/bodylist/shoulders",
    },
    {
      id: 2,
      title: "حرکات زیر بغل و پشت",
      img: "/assets/images/body/back.png",
      href: "/bodylist/back",
    },
    {
      id: 3,
      title: "حرکات جلو بازو",
      img: "/assets/images/body/biceps.png",
      href: "/bodylist/biceps",
    },
    {
      id: 4,
      title: "حرکات پشت بازو",
      img: "/assets/images/body/triceps.png",
      href: "/bodylist/triceps",
    },
    {
      id: 5,
      title: "حرکات پا",
      img: "/assets/images/body/quadriceps.png",
      href: "/bodylist/quadriceps",
    },
    {
      id: 6,
      title: "حرکات ساق پا",
      img: "/assets/images/body/calves.png",
      href: "/bodylist/calves",
    },
    {
      id: 7,
      title: "حرکات شکم",
      img: "/assets/images/body/abs.png",
      href: "/bodylist/abs",
    },
    {
      id: 8,
      title: "حرکات سینه",
      img: "/assets/images/body/chest.png",
      href: "/bodylist/chest",
    },
    {
      id: 9,
      title: "حرکات ساعد",
      img: "/assets/images/body/forearms.png",
      href: "/bodylist/forearms",
    },
    {
      id: 10,
      title: "حرکات کول",
      img: "/assets/images/body/back.png",
      href: "/bodylist/piggyback",
    },
  ];

  return (
    <div>
      <Layout title={'movment'}>
        <div className=" w-72 md:w-[60%] p-3  lg:grid lg:grid-cols-2 lg:gap-4 ">
          {bodyType.map((item, id) => {
            return (
              <Link href={item.href}>
                <div
                  key={id}
                  className=" w-full mb-6  shadow-md rounded-md overflow-hidden items-center group relative bg-gray-200 hover:bg-gradient-to-b from-[#303df2] hover:shadow-xl to-[#c3d7f7] hover:scale-105 transition-all ease-out duration-300"
                >
                  <div className="w-full flex justify-center">
                    <img
                      className=" transition ease-out duration-200 group-hover:scale-125"
                      src={item.img}
                      alt=""
                    />
                  </div>

                  <div
                    style={{ backgroundColor: "rgba(0 ,0 , 0 , 50%)" }}
                    className=" w-full flex items-center justify-center h-16 group-hover:bottom-0 -bottom-20 transition-all ease-linear duration-200 absolute"
                  >
                    <h1 className=" text-white text-2xl ">{item.title}</h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Exercise;
