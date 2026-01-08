import React  from 'react'
import { useState } from "react"


const Login = () => {
     const [currentState, setCurrentState] = useState("Sign Up");
     const [formData , setFormData] = useState({
        name:"",
        email:"",
        password:"",
     })

     
     

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }
  return (
    <>
   <div className=''>
     <div className=' border-2 border-black    '>
        <div className=' border-2  flex justify-center items-center  '>
        <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-full sm:max-w-96 m-5 mt-14 gap-4 text-gray-800 border-2 p-3 "
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-3 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-3 border border-gray-800"
        placeholder="Email "
        required
      />
      <input
        type="password"
        className="w-full px-3 py-3 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt- [-8px]">
        <p className="cursor-pointer">Forgot your password</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-blue-500 hover:text-blue-800"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-blue-500 hover:text-blue-800"
          >
            Login here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 my-4 hover:bg-gray-900 ">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>

        </div>
    </div>
   </div>
    </>
  )
}

export default Login