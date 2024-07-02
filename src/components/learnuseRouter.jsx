"use client"
import{useRouter}from "next/navigation"


const learnuseRouter = () => {
    const router=useRouter()
    // This hook gives access the router object inside the Pages Router.
    // console.log("Router",router);
  return (
    
    <>
    <h1>use Router</h1>
    <button type='button' onClick={()=> router.push("/admin/dashboard")}>Go to Admin dash</button>
    </>
  )
}

export default learnuseRouter
