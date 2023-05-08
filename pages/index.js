import Signup from "./register/signup"
import Layout from "@/components/Layout"
import { useEffect ,useState } from "react"
import Table from "./home"
import { ImSpinner9 } from "react-icons/im";

export default function Home() {

  const [check , setCheck] = useState()
  console.log(check)

  useEffect(()=>{
    const local = localStorage.getItem("login")
    setCheck(local)
  },[])

  

  return (
    <>
    { check === undefined ? 
    <div className="  flex justify-center  items-center min-h-screen ">
      <ImSpinner9 className=" w-8 h-8 text-blue-400 animate-spin"/>
    </div>  : check  ?  <Layout>  <Table/> </Layout> : <Signup/> }
    

      
    </>
  )
}
