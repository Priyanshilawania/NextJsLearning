
import Link from "next/link"
const LearnLink = () => {
    const id = 2
  return (
    <>
    <Link href="/admin/dashboard/">go to admin dashboard</Link>
    <Link href={`/user/profile/${id}`}>go to user profile</
    Link>
    {/* to make it dynamic `${}` */}
    </>
  )
}

export default LearnLink