import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from "react-hook-form"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className='flex h-screen items-center justify-center '>
      <div className='w-[600px]' >
      <div className="modal-box">
      <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
       <h3 className="font-bold text-lg">Contact Us</h3>

    <div className='mt-4 space-y-2 '>
      <span>Name</span>
      <br/>
      <input type='text' placeholder='enter your full name' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("name", { required: true })}/>
      <br/>
      {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    <div className='mt-4 space-y-2 '>
      <span>Email</span>
      <br/>
      <input type='email' placeholder='enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("email", { required: true })}/>
      <br/>
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    <div className='mt-4 space-y-2 '>
      <span>message</span>
      <br/>
      <input type='textArea' placeholder='enter your message' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("message", { required: true })}/>
      <br/>
      {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    
      <div className='flex justify-around mt-4'> 
        <button className='bg-pink-500 textwhite rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>submit </button>
      </div>
    </form>
   
    

  </div>
</div>
    </div>
  )
}
