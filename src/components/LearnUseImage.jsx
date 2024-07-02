import Image from "next/image"
import MyImage from '../../public/images/imagejs.jpeg'

const LearnUseImage = () => {
  return (
    <>

    <Image src={MyImage} al="My Image" width={700}
    height={500}/>
    </>
  )
}

export default LearnUseImage