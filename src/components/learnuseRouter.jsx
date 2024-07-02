"use client"
import{useRouter}from "next/navigation"


const learnuseRouter = () => {
    const router=useRouter()
    // This hook gives access the router object inside the Pages Router.
    console.log("Router",router);
  return (
    
    <>
    <h1>use Router</h1>
    </>
  )
}

export default learnuseRouter