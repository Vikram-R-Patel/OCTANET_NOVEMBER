import { useState } from "react"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
      <div className=" w-full flex justify-around text-3xl py-6 gap-2 bg-blue-600" >
        <h1 className=" font-bold text-white">Landing Page</h1>
        <div className=" mx-4">
          <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">Home</Link>
          <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">About us</Link>
          <Link className=" mx-2 hover:text-orange-500 hover:bg-green-300 px-2 rounded-2xl text-white font-bold">SignUp</Link>
        </div>
      </div>
      <div>
        <h1 className=" mx-40 my-40 flex font-bold text-9xl text-white w-82 rounded-xl hover:text-blue-500 animate-pulse ">WEL COME TO OUR WEBSITE</h1>
      </div>
    </>
  )
}
export default Navbar
