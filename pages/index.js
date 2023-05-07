import Signup from "./register/signup"
import Layout from "@/components/Layout"
import { useEffect ,useState } from "react"
import Table from "./home"

export default function Home() {

  const [check , setCheck] = useState()
  console.log(check)

  useEffect(()=>{
    const local = localStorage.getItem("login")
    setCheck(local)
  },[])

  

  return (
    <>
    { check === undefined ? ('Loading...') : check  ?  <Layout>  <Table/> </Layout> : <Signup/> }
    

      
    </>
  )
}
