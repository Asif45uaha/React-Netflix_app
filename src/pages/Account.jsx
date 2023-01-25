import React from 'react'
import SavedShow from '../components/SavedShow'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="error" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
           <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>

           </div>
        </div>
      </div>
      <SavedShow/>
    </>
  )
}

export default Account