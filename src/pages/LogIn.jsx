import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const LogIn = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]= useState('');
    const {user,LogIn}=UserAuth();
    const navigate= useNavigate();

    const HandleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        try {
            await LogIn(email,password);
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }
    return (
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="error" />
            <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[650px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] h-[400px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>
                            Sign In
                        </h1>
                        {error ? (<p className='p-3 bg-red-400 my-2'>
                            {error}
                        </p>): null}
                        <form onSubmit={HandleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type="email" placeholder='email' />
                            <input onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type="password" placeholder='password' />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p>
                                    <input className='mr-2' type="checkbox" />
                                    Remember me
                                </p>
                                <p>
                                    Need Help?
                                </p>
                            </div>
                            <p className='py-8 mr-2'><span className='text-gray-600'>New to Netflix</span>{' '} <Link to='signup'>Sign Up</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn