import React, { useState } from 'react'
import { data } from 'react-router-dom'
import  bg from "../assets/aboutmakeup.jpeg"


const Login = () => {

  const [loginData,setLogindata]= useState({
    email:"",
    password:"",
  });
  const [isLoading,setIsLoading]=useState(false);
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setLogindata((previousData) => ({...previousData,[name]:value}))
  }

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setIsLoading(true);

  
  try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = {
      };
      } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
    <div className=' flex justify-center bg-gray-400'>
     
      <div className='bg-gray-200 p-2 border-2 border-gray-4 my-5   '>
        <div className=' inline-flex  rounded-2xl     p-5 bg-gray-400'>
          
          <div >
            <h2 className='text-4xl text-red-400  font-bold shadow ' ><span className='border-b-2 border-gray-200'>Login</span></h2>
            <div className='mt-5'>
             <form
             onSubmit={handleSubmit}
                className="space-y-5 "
               
              >
                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-1">
                    Email Address:
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={loginData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                 <div>
                  <label htmlFor="password" className="block text-gray-600 mb-1">
                   Password:
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    value={loginData.password}
                    onChange={handleChange}

                   
                    
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
               
                <button
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  type="submit"
                  className="w-75 bg-indigo-950 hover:bg-indigo-800 text-white py-3 rounded-lg font-semibold transition "
                >
                 {isLoading ? "Loading" : "Submit"}
                </button>
               
                <div>
                  <p></p>
                </div>
              </form>

            </div>
          </div>

          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login