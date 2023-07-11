import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import photo from "../public/assets/images/shopimg/bodybuilding_specialist_mobile_hero_image_2x.jpeg";

const Coach = () => {
  return (
    <div>
      <Layout title={"coachinfo"}>
        <div className=" w-[20rem] md:w-[35rem] mb-10 lg:w-[70%] p-3 bg-gradient-to-b from-[#4450f4] shadow-xl to-[#c3d7f7] ">
          <div className=" mb-6">
            <Image width={1000} src={photo} />
          </div>

          <div className=" flex justify-around md:text-3xl mb-6">
            <h2>اسم : علی</h2>
            <h2>نام خانوادگی : علی</h2>
            <h2>سن : ۴۵</h2>

          </div>
          <div className=" flex justify-around md:text-3xl mb-6">
            <h2>تجربه : ۲۰</h2>
            <h2>مقام : ۴</h2> 
            <h2>شاگرد : ۲۳</h2> 
            </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis nam perferendis impedit eligendi ex corrupti dolores, modi iure at alias quaerat magni mollitia sunt odio animi sit iste officiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis nam perferendis impedit eligendi ex corrupti dolores, modi iure at alias quaerat magni mollitia sunt odio animi sit iste officiis.

            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Coach;
