import {useState} from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";

const Notification = ({detail}) => {
    const [btn , setBtn] = useState(true)

   const closeHandler = () => {
        setBtn(btn == false)
   }

  return (
    <div>
        {btn ? (
            
            <>
                  <div className="flex items-center  justify-center mb-6 ">
        <div className=" max-w-lg  rounded-md overflow-hidden shadow-md shadow-blue-300">
          <div className="flex">
            <div className="flex items-center gap-4 p-4">
              <div className=" shrink-0">
                <HiOutlineLightBulb />
              </div>
              <div className=" space-y-1">
                <p>
                    {detail}
                </p>
              </div>
              <div className=" flex justify-center cursor-pointer border-1 border-blue-200 ">
                <button onClick={closeHandler}>
                    <AiOutlineClose/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
            </>
        ) : null}

    </div>
  );
};

export default Notification;
