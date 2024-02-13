import { useParams } from "react-router-dom"
function User() {
    const {userid}=useParams()
  return (
    <div className="w-full p-4  bg-gray-500 content-center text-center text-pretty text-3xl">User:{userid} </div>
    
  )
}
export default User