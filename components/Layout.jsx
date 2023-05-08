import { useEffect, useState } from "react";
import SideNavbar from "./Sidebar";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { AiOutlineMessage } from "react-icons/ai";
import logo from "../public/assets/images/logo/fitness-and-gym-logo-free-png.png";
import Image from "next/image";
import Head from "next/head";

const Layout = ({ children ,title }) => {
  return (
    <div>
      <Head>
        <title>{`${title} - panel`}</title>
      </Head>
      <header className=" relative">
        <SideNavbar />
        <div className=" absolute flex justify-end -z-10  w-full">
          <Image className="w-[6rem] md:w-[10rem]" src={logo} />
        </div>
      </header>
      <main
        id="test"
        className="flex justify-center items-center flex-col p-24  lg:translate-x-[-10%]"
      >
        {children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
