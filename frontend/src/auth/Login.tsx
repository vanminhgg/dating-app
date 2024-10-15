import React, { useEffect } from 'react'
import { useGetProfileQuery, useLoginMutation } from '../redux/api/UserApi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/reducer/UserSlice'

type LoginInfo = {
  username: string,
  password: string
}

const intitFormValue : LoginInfo= {
  username: "",
  password: ""
}

const Login = () => {


    // Mutation for login
    const [login, { isLoading: isLoginLoading, data: loginData, error: loginError, isSuccess: isLoginSuccess  }] = useLoginMutation();
    const dispatch = useDispatch()

    // Query for getting profile
    const {
      currentData: profileData,
      isFetching: isProfileFetching,
      refetch: refetchProfile,
      isError: isProfileError,
      isLoading: isProfileLoading,
      isSuccess: isProfileSuccess,
      isUninitialized: isProfileUninitialized,
    } = useGetProfileQuery(undefined, { skip: !isLoginSuccess });

    useEffect (() => {
      if(profileData) {
        dispatch(setUser({user: profileData, token: localStorage.getItem("token") || "" }))
        console.log("getpf")
      }
    }, [ profileData])

  const navigate = useNavigate()

  const { register,getValues, setValue, handleSubmit, watch, formState: { errors } } = useForm<LoginInfo>({
    defaultValues: intitFormValue
  })

  const onSubmit = async () => {
    await login({username: getValues("username"), password: getValues("password")})
    if(loginData) {
      navigate("/")
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}> 
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input
                  {...register('username')}
                  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input type="password"
                  {...register('password')}
                  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                 />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login