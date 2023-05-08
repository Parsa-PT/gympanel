import Layout from "@/components/Layout";
import { useContext, useState } from "react";
import { Store } from "@/context/cart";
import dynamic from "next/dynamic";

const cart = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;


  function removeHandler(item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  return (
    <div>
      <Layout title={'cart'}>
        {cartItems.length === 0 ? (
          <p className=" text-3xl ">سبد شما خالی است</p>
        ) : (
          <div>
            <div className="grid mb-3">
              <table className=" mt-3 shadow-2xl border-2  border-white w-12/12 lg:w-6/12">
                <thead className="border-b">
                  <tr>
                    <th className=" py-2 bg-blue-100 ">محصول</th>
                    <th className=" py-2 bg-blue-100 ">تعداد</th>
                    <th className=" py-2 bg-blue-100 ">قیمت</th>
                    <th className=" py-2 bg-blue-100 ">عمل</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      className="bg-[#76abfe] hover:bg-cyan-100 hover:scale-105 duration-100"
                      key={item.slug}
                    >
                      <td className="py-3 px-8 md:px-16 lg:px-16  xl:px-28">
                        <span>{item.title}</span>
                      </td>
                      <td className="py-3 px-8 md:px-16 lg:px-16  xl:px-28">
                        {item.qty}
                      </td>
                      <td className="py-3 px-8 md:px-16 lg:px-16  xl:px-28">
                        {item.price}
                      </td>
                      <td>
                        <button
                          className="p-5 text-right"
                          onClick={() => removeHandler(item)}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-full text-center text-2xl mb-5">
              قیمت نهایی :{" "}
              {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}
            </div>
            <div className=" w-full flex justify-center items-center">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm md:text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   پرداخت
                </span>
              </button>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default dynamic(() => Promise.resolve(cart), { ssr: false });
