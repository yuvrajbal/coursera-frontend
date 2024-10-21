import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function UserSignup(){

  function Signupform(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token,setToken] = useState("");
    const navigate = useNavigate()

    useEffect(()=> {
      if(token){
        console.log("token is ", token)
        localStorage.setItem("token", token)
        navigate("/courses")
      }

    },[token])


    const handleSignUpSubmission = async (event) => {
      event.preventDefault();
      try{
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/signup`, {username, password});
        console.log(response.data.token);
        setToken(response.data.token)
        
      } catch(err){
        console.log("error while signing up", err)
      }
    }

    const navigateSignin = () => {
      navigate("/signin")
    }

    return (
        <>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-gray-200">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-sm ">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm text-sm flex justify-center">
              
                Already have an account?   
                <button 
                  className="ml-2 border-none underline underline-offset-1"
                  onClick={navigateSignin}>Sign in</button>
                  </div>
              {/* <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
              /> */}
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
                Sign Up to create your account
              </h2>
            </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignUpSubmission} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 ">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
  
          
          </div>
          </div>
        </>
    )
  }


  return (
    <Signupform/>  )
}

