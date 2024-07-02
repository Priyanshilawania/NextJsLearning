import LearnClientComponent from "@/components/LearnClientComponent";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnLink from "@/components/LearnLink";
import Image from "next/image";
import learnuseRouter from "@/components/learnuseRouter";
import LearnUseGlobalCss from "@/components/LearnUseGlobalCss";
import LearnCssModule from "@/components/LearnCssModule";
import LearnUseImage from "@/components/LearnUseImage";
// import LearnDataFetching from "@/components/LearnDataFetching";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink/> */}
      {/* < learnuseRouter/> */}
      {/* <LearnServerComponent /> */}
      {/* < LearnClientComponent/> */}
      {/* {<LearnUseGlobalCss/>} */}
      {/* <LearnCssModule/> */}
      {/* <LearnUseImage/> */}
      <LearnDataFetching/> 
      {/* using fake api by jasonplaceholder*/}
    
    </main>
  )
}

