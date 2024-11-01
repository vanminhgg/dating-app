import { url } from 'inspector'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className="container w-[350px] h-[500px] bg-cover rounded shadow-2xl" style={{backgroundImage: "url(" + "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg"+ ")"}}>
        <div className='relative flex flex-col justify-end z-100 w-full h-full bgi'>
            <div className='absolute w-full h-1/3 bg-black bg-opacity-30'>
                <h1 className='text-white text-2xl'>Product Name</h1>
            </div>
        </div>
        
    </div>
  )
    }

export default ProfileCard