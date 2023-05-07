import { useState ,useEffect } from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable'
import html2canvas from "html2canvas";
import Notification from "@/components/notification";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Table = () => {
  const [plan, setPlan] = useState("Exercise");

  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
  },[])

  console.log(plan);

  const table = [
    {
      id : 1,
      day: "۱",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 2,
      day: "۱",
      moveKind: "بالا سینه هالتر",
      number: "۳*۱۵",
      time: "۱۵",
    },
    {
      id : 3,
      day: "۱",
      moveKind: "پرس سینه دستگاه",
      number: "۳*۱۵",
      time: "۱۰",
    },
    {
      id : 4,
      day: "۱",
      moveKind: "پوش اپ",
      number: "-",
      time: "۱۵",
    },
    {
      id : 5,
      day: "۱",
      moveKind: "پارال دستگاه",
      number: "-",
      time: "۱۵",
    },
    {
      id : 6,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 7,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 8,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 9,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 10,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 11,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 12,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 13,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 14,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
    {
      id : 15,
      day: "۲",
      moveKind: "تردمیل",
      number: "-",
      time: "۱۵",
    },
  ];

  const ChangePlan = () => {
    if (plan === "Exercise") {
      setPlan("Meal");
    } else {
      setPlan("Exercise");
    }
  };

  const exportPdf = ()=>{
      const input = document.getElementById('test')
      html2canvas(input , {logging : true , letterRendering : 1 , useCORS : true}).then(canvas => {
        const imgWidth = 100;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('p' , 'mm' , 'a4')
        pdf.addImage(imgData , 'PNG' , 0 , 0 , imgWidth , imgHeight)
        pdf.save('table.pdf')
      });
  }

 

  return (
    <div>

    <div data-aos="fade-down">
          <Notification detail={
            'برای دریافت برنامه ورزشی و غذایی وارد پروفایل شوید و اطلاعات خود را تکمیل کنید'
          } />
      </div>  
     
      <div>
       <div  className="flex w-full justify-start">

       
          <button onClick={ChangePlan} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" >
              {plan === "Exercise" ? "برنامه غذایی" : "برنامه ورزشی"}
            </span>
              
            </button>

            <button onClick={()=> exportPdf()} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  دانلود PDF
              </span>
              </button>
        </div> 
       
        {plan === "Exercise" ? (
          <table id="test"  className=" mt-3 shadow-2xl border-2  border-white w-12/12 lg:w-6/12">
            <thead>
              <tr>
                <th className=" py-2 bg-blue-100 ">روز</th>
                <th className=" py-2 bg-blue-100 ">حرکت</th>
                <th className=" py-3 bg-blue-100 ">تعداد</th>
                <th className=" py-3 bg-blue-100 ">دقیقه</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item , id) => {
                return (
                  <tr key={id} className="bg-[#76abfe] hover:bg-cyan-100 hover:scale-105 duration-100">
                    <td className="py-3 px-8 md:px-16 lg:px-16  xl:px-28">
                      {item.day}
                    </td>
                    <td className="py-3 px-8 md:px-16 lg:px-16 xl:px-28 ">
                      {item.moveKind}
                    </td>
                    <td className="py-3 px-8 md:px-16 lg:px-16 xl:px-28  ">
                      {item.number}
                    </td>
                    <td className="py-3 px-8 md:px-16 lg:px-16  xl:px-28 ">
                      {item.time}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table className=" mt-3 shadow-2xl border-2 border-white w-12/12 md:w-6/12">
            <thead>
              <tr>
                <th className=" py-3 bg-blue-100">روز</th>
                <th className=" py-3 bg-blue-100">غذایی</th>
                <th className=" py-3 bg-blue-100">تعداد</th>
                <th className=" py-3 bg-blue-100">دقیقه</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item) => {
                return (
                  <tr className="bg-[#76abfe] hover:bg-cyan-100 hover:scale-105 duration-100">
                    <td className="py-3 px-8 md:px-16 lg:px-16  xl:px-28">{item.day}</td>
                    <td className="py-3 px-8 md:px-16 lg:px-16 xl:px-28">
                      {item.moveKind}
                    </td>
                    <td className="py-3 px-8 md:px-16 lg:px-16  xl:px-28">
                      {item.number}
                    </td>
                    <td className="py-3 px-8 md:px-16 lg:px-16 xl:px-28">{item.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div> 
    </div>
  );
};

export default Table;
