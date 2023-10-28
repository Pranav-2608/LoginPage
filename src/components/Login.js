import React from 'react'
import LoginImg from '../assets/login.jpeg'
import {FcGoogle} from 'react-icons/fc'

const Login = ({name,setName,password,setPassword}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>

      <div>
        <img src={LoginImg} alt='loginimg' className='h-screen  w-full hidden sm:block object-cover'/>
      </div>

      <div className='bg-gray-800 flex flex-col justify-center h-screen'>
         <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg' onSubmit={(e)=>{
            e.preventDefault();
            console.log(name);
            console.log(password);
            setName("");
            setPassword("");
         }}>
            <h2 className='text-4xl text-white font-bold text-center'>LOGIN</h2>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>UserName</label>
                <input type='text' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800' 
                onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input type='password' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800'
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                />
            </div>
            <div className='flex justify-between text-gray-400 py-2'>
                <p className='flex items-center'><input type="checkbox" className='mr-2'/> Remember Me</p>
                <p>Forgot Password</p>
            </div>
            <div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                >Login</button>
            </div>
            <div className='flex justify-between items-center gap-x-2'>
                <div className=' border w-[48%] border-gray-200'></div>
                <div className='text-gray-300'>OR</div>
                <div className=' w-[48%] border border-gray-200 '></div>
            </div>
            <div >
                <button className='w-full my-5 py-2 bg-white shadow-lg shadow-white/50 text-black font-semibold rounded-lg'>
                 <div className='flex items-center justify-center gap-2'>
                  <FcGoogle/>
                  <p>Sign Up With Google</p>
                 </div>
                </button>
            </div>
         </form>
      </div>

    </div>
  )
}

export default Login