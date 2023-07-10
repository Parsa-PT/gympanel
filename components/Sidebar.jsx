import { useContext, useState, useEffect } from "react";
import { ImParagraphRight } from "react-icons/im";
import { ImHome, ImUser } from "react-icons/im";
import { CgGym } from "react-icons/cg";
import { BsShop } from "react-icons/bs";
import { GiHotMeal, GiTakeMyMoney } from "react-icons/gi";
import { FaUserEdit, FaShoppingCart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import profile from "../public/assets/images/166yearsold.jpeg";
import Link from "next/link";
import Image from "next/image";
import { Store } from "@/context/cart";
import { useRouter } from "next/router";

const SideNavbar = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  let [menu, setMenu] = useState(false);
  let [name, setName] = useState();
  const { push } = useRouter();

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setName(userName);
  }, []);

  const openMenu = () => {
    setMenu((menu = !menu));
  };

  const leaveHandler = () => {
    localStorage.clear();
    // window.location.reload();
    push("/register/signup");
  };

  return (
    <div>
      <div
        onClick={openMenu}
        className="absolute cursor-pointer top-4 right-4 inline-flex items-center justify-center peer text-black  hover:outline-none transition ease-out hover:scale-90 hover:ring-inset hover:ring-blue-500  group"
      >
        <ImParagraphRight
          aria-hidden="true"
          className="block lg:hidden w-6 h-6 "
        />
      </div>

      {menu ? (
        <>
          <div
            style={{
              backgroundImage: "linear-gradient(180deg , #303df2 , #c3d7f7)",
            }}
            className="p-6 w-1/2 md:w-[30%] h-screen z-20 fixed top-0  right-0  lg:w-60 lg:right-0 peer-focus:right-0 peer:transition ease-out delay-150 duration-200"
          >
            <div
              onClick={openMenu}
              className=" w-[100rem] cursor-pointer absolute -z-40 h-screen bg-transparent"
            ></div>

            <div className=" flex flex-col justify-center items-center relative w-full  rounded-[2rem] h-44 bg-slate-100 shadow-xl mb-6">
              <div className=" w-full flex justify-center items-center flex-col mb-16">
                <Image
                  className=" w-[100px] h-[100px] absolute -top-5 rounded-full object-cover "
                  src={profile}
                  alt="profile"
                />
              </div>

              <div className="w-full flex justify-center items-center flex-col">
                <h2>{name}</h2>
                <hr className=" bg-black h-1 rounded-md w-1/2 mb-2" />
                <h3>09357676767</h3>
                <div className="flex">
                  <BiLogOut
                    onClick={leaveHandler}
                    className="ml-1 cursor-pointer hover:text-red-600"
                  />
                  <Link href="/profile">
                    {" "}
                    <FaUserEdit className=" cursor-pointer" />{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <hr className=" mb-3 w-full " />
              <hr className=" mb-3 w-1/2" />
              <hr className=" mb-4 w-full " />
            </div>

            <div className="flex flex-col justify-center mb-[7rem]  md:mb-[15rem]">
              <ul>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <ImHome className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/">
                    خانه
                  </Link>
                </li>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <ImUser className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/profile">
                    پروفایل
                  </Link>
                </li>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <BsShop className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/shop">
                    فروشگاه
                  </Link>
                </li>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <CgGym className="ml-1 w-5 h-6" />
                  <Link className="w-full text-lg" href="/exerciseplans">
                    {" "}
                    حرکات ورزشی
                  </Link>
                </li>

               <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <ImUser className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/coach">
                    مربی
                  </Link>
                </li>
                
                <li className="w-full  p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <FaShoppingCart className="ml-1 w-5 h-6" />
                  <Link className="w-full text-lg" href="/cart">
                    سبد خرید
                  </Link>
                  <span>
                    {cart.cartItems.length > 0 && (
                      <span className="ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold">
                        {cart.cartItems.reduce((a, c) => a + c.qty, 0)}
                      </span>
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <div
              onClick={leaveHandler}
              className=" w-full p-2  pt-3 bg-slate-100    flex cursor-pointer shadow-md group"
            >
              <BiLogOut className="ml-1 w-5 group-hover:text-red-500 h-6" />
              <button className="text-lg">خروج از حساب</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              backgroundImage: "linear-gradient(180deg , #303df2 , #c3d7f7)",
            }}
            className="p-6 w-1/2 md:w-[30%] h-screen z-20 fixed top-0  -right-[37rem]   lg:w-60 lg:right-0 peer-focus:right-0 peer:transition ease-out delay-150 duration-200"
          >
            <div className=" flex flex-col justify-center items-center relative w-full  rounded-[2rem] h-44 bg-slate-100 shadow-xl mb-6">
              <div className=" w-full flex justify-center items-center flex-col mb-16">
                <Image
                  className=" w-[100px] h-[100px] absolute -top-5 rounded-full object-cover "
                  src={profile}
                />
              </div>

              <div className="w-full flex justify-center items-center flex-col">
                <h2>{name}</h2>
                <hr className=" bg-black h-1 rounded-md w-1/2 mb-2" />
                <h3>09357676767</h3>
                <div className="flex">
                  <BiLogOut className="ml-1 cursor-pointer hover:text-red-600" />
                  <Link href="/profile">
                    {" "}
                    <FaUserEdit className=" cursor-pointer" />{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <hr className=" mb-3 w-full " />
              <hr className=" mb-3 w-1/2" />
              <hr className=" mb-4 w-full " />
            </div>

            <div className="flex flex-col justify-center mb-[7rem] sm:mb-[10rem]  md:mb-[15rem]">
              <ul>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <ImHome className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/">
                    خانه
                  </Link>
                </li>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <ImUser className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/profile">
                    پروفایل
                  </Link>
                </li>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <BsShop className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/shop">
                    فروشگاه
                  </Link>
                </li>
                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <CgGym className="ml-1 w-5 h-6" />
                  <Link className="w-full text-lg" href="/exerciseplans">
                    {" "}
                    حرکات ورزشی
                  </Link>
                </li>

                <li className="w-full mb-3 p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <ImUser className="ml-1 w-5 h-5" />
                  <Link className="w-full text-lg" href="/coach">
                    مربی
                  </Link>
                </li>
                <li className="w-full  p-2 pt-3 bg-slate-100 rounded-3xl flex cursor-pointer shadow-md transition ease-out duration-75 hover:scale-95 ">
                  <FaShoppingCart className="ml-1 w-5 h-6" />
                  <Link className="w-full text-lg" href="/cart">
                    سبد خرید
                  </Link>
                  <span>
                    {cart.cartItems.length > 0 && (
                      <span className="ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold">
                        {cart.cartItems.reduce((a, c) => a + c.qty, 0)}
                      </span>
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <div
              onClick={leaveHandler}
              className=" w-full p-2  pt-3 bg-slate-100    flex cursor-pointer shadow-md group"
            >
              <BiLogOut className="ml-1 w-5 group-hover:text-red-500 h-6" />
              <button className="text-lg">خروج از حساب</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideNavbar;
