import React from "react";
import Gymphoto from "../../public/assets/images/5-Reasons-Why-Your-Residential-Building-Needs-a-Professional-Gym-Banner-1200x620.jpeg";
import { useForm } from "react-hook-form";
import Image from "next/image";
import logo from "../../public/assets/images/logo/fitness-and-gym-logo-free-png.png";
import { useRouter } from "next/router";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {push} = useRouter()

  const formHandler = ({ email, password, fristname, lastname, username }) => {
    push('/register/login')
    localStorage.setItem("fristname" , fristname)
    localStorage.setItem("lastname" , lastname)
    localStorage.setItem('userName', username);
   

  };

  return (
    <div>
      <div
        className=" min-h-screen py-36 px-4 md:px-0 text-lg"
        style={{
          backgroundImage: "linear-gradient(125deg , #4287f5 , #c3d7f7)",
        }}
      >
        <div className=" container mx-auto">
          <div className="flex flex-col w-full lg:w-9/12 md:flex-row  bg-white rounded-lg mx-auto shadow-md overflow-hidden">
            <div
              className="w-full   md:w-1/2"
              style={{
                backgroundImage: `url(${Gymphoto.src})`,
                backgroundPosition: "center ",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className=" w-full h-full flex justify-center items-center flex-col"
                style={{ backgroundColor: "rgba(3,3,3 , 0.5)" }}
              >
                <Image className=" w-[4rem] md:w-[8rem] mt-10 mb-2 md:mt-0" src={logo} />
                <p className="text-white md:text-2xl mb-10 md:mb-0">
                  به پنل ورزشی باشگاه رگلت خوشامدید
                </p>
              </div>
            </div>
            <div className=" w-full  md:w-1/2 px-20 md:px-16 py-14">
              <h1 className=" text-xl">ساخت اکانت</h1>
              <p>اکانت خود را فقط در چند دقیقه بسازید</p>
              <form onSubmit={handleSubmit(formHandler)}>
                <div className="grid grid-cols-2 gap-4 ">
                  <input
                    className=" bg-slate-500 p-1 text-sm md:text-lg rounded-md outline-none mb-3 border focus:border-white"
                    type="text"
                    placeholder="نام"
                    name="fristname"
                    {...register("fristname", { required: true })}
                  />
                  {errors.fristname && (
                    <label className="text-[red]">لطفا نام را وارد کنید</label>
                  )}
                  <input
                    className=" bg-slate-500 p-1 text-sm  md:text-lg rounded-md outline-none mb-3 border focus:border-white"
                    type="text"
                    placeholder="نام خانوادگی"
                    name="lastname"
                    {...register("lastname", { required: true })}
                  />
                  {errors.lastname && (
                    <label className="text-[red]">
                      لطفا نام خانوادگی را وارد کنید
                    </label>
                  )}
                </div>
                <div className="grid grid-cols-1">
                  <input
                    className=" bg-slate-300 p-1 text-sm md:text-lg rounded-md outline-none mb-3 border focus:border-white"
                    type="text"
                    placeholder="نام کاربری"
                    name="username"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <label className="text-[red]">
                      لطفا نام کاربری را وارد کنید
                    </label>
                  )}
                  <input
                    className=" bg-slate-300 p-1 text-sm md:text-lg rounded-md outline-none mb-3 border focus:border-white"
                    type="email"
                    placeholder="ایمیل"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <label className="text-[red]">
                      لطفا ایمیل را وارد کنید
                    </label>
                  )}
                  <input
                    className=" bg-slate-300 p-1 text-sm md:text-lg rounded-md outline-none mb-3 border focus:border-white"
                    type="password"
                    placeholder="رمز"
                    name="password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <label className="text-[red]">لطفا رمز را وارد کنید</label>
                  )}
                  <input
                    className=" bg-slate-300 p-1 text-sm md:text-lg rounded-md outline-none mb-3 border focus:border-white"
                    type="text"
                    placeholder="تلفن همراه"
                    name="phone"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <label className="text-[red]">لطفا تلفن را وارد کنید</label>
                  )}
                  <input
                    className=" bg-slate-300 p-1 text-sm md:text-lg rounded-md outline-none mb-3 border focus:border-white"
                    type="text"
                    placeholder="کد ملی"
                    name="melicode"
                    {...register("melicode", { required: true })}
                  />
                  {errors.melicode && (
                    <label className="text-[red]">
                      لطفا کد ملی را وارد کنید
                    </label>
                  )}
                </div>

                <button
                  type="submit"
                  className=" w-full bg-[#4287f5] rounded-lg text-white p-1 mb-3"
                >
                  ثبتنام
                </button>
              </form>
              <p>
                حساب کاربری دارم{" "}
                <a className=" text-blue-400" href="/register/login">
                  (ورود)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
