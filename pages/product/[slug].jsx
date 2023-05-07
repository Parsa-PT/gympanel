import Layout from "@/components/Layout";
import { useState, useContext } from "react";
import Image from "next/image";
import imgTest from "../../public/assets/images/shopimg/whay.jpeg";
import { Store } from "@/context/cart";
import productItems from "../../data/productTest.json";
import { useRouter } from "next/router";
import Notification from "@/components/notification";

const productPage = () => {
  let [counter, setCounter] = useState(1);
  const { state, dispatch } = useContext(Store);
  const [notif, setNotif] = useState(false);

  const router = useRouter();

  const { query } = useRouter();
  const { slug } = query;

  const plus = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const negetive = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const product = productItems.find((pItem) => pItem.slug === slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const addToCartHandler = () => {
    const existingItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );

    const qty = existingItem
      ? existingItem.qty + Number(counter)
      : Number(counter);

    dispatch({ type: "ADD_TO_CART", payload: { ...product, qty } });

    setNotif(true);
  };

  return (
    <div>
      <Layout title={product.title}>
        {notif ? (
          <div data-aos="fade-down">
            <Notification detail={"محصول به سبد شما اضافه شد"} />
          </div>
        ) : null}

        <div className=" w-full h-screen flex flex-col  items-center lg:w-1/2">
          <div className=" w-[60%]  overflow-hidden bg-black">
            <Image src={imgTest} />
          </div>

          <div>
            <p className=" text-3xl mb-2">{product.title}</p>
          </div>

          <div className="w-full flex mb-2  flex-col justify-center items-center">
            <hr className=" mb-3  w-full " />
            <hr className=" mb-3 w-1/2" />
            <hr className=" mb-4 w-full " />
          </div>

          <div className="flex w-full mb-6 justify-around">
            <span>
              <p className=" text-2xl">قیمت : {product.price}</p>
            </span>
            <span>
              <p className=" text-2xl">وزن : 3kg</p>
            </span>
          </div>
          <div className="flex w-full mb-6 justify-around">
            <span>
              <p className=" text-2xl">
                {" "}
                در انبار :
                {product.available ? (
                  <span className=" text-green-400 mr-2">موجود</span>
                ) : (
                  <span className=" text-red-400 mr-2">ناموجود</span>
                )}
              </p>
            </span>
            <span>
              <p className=" text-2xl">توضیحات : whay protein</p>
            </span>
          </div>
          <div className=" flex w-full mb-4 justify-center">
            <span
              onClick={plus}
              className="  bg-blue-300 pl-1 rounded-md cursor-pointer pr-1"
            >
              <p className=" text-3xl">+</p>
            </span>
            <p className=" ml-3  text-3xl mr-3">{counter}</p>
            <span
              onClick={negetive}
              className="  bg-blue-300 pl-1 rounded-md cursor-pointer pr-1"
            >
              <p className=" text-3xl">-</p>
            </span>
          </div>

          <button
            onClick={addToCartHandler}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm md:text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              افزودن به سبد
            </span>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default productPage;
