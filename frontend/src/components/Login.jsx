// Suggested code may be subject to a license. Learn more: ~LicenseLog:3895257629.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4239871353.
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = (data) => console.log(data)
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input {...register("email", { required: true })} type="email" name='email' id='email' className='shadow apperance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' placeholder='Email Address' />
            {errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input {...register("password", { required: true })} type="password" name='password' id='password' className='shadow apperance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' placeholder='*******' />
            {errors.password && <p className="text-red-500 text-xs italic">Password is required</p>}
          </div>
          {
            message && <p className="text-red-500 text-xs italice mb-3">{message}</p>
          }
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">Login</button>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">Haven't an account? Please <Link to='/register' className='text-blue-500'>register</Link></p>
        <div className='mt-4'>
          <button className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
            <FaGoogle className='mr-2' />
            Sign in with Google
          </button>
        </div>

        <p className='mt-5 text-center text-gray-500 text-xs'>@2025 Book Store. All rights reserved</p>
      </div>
    </div>
  )
}

export default Login