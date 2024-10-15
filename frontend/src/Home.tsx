import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector((state: any)=> state.user)
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div className=''>Home</div>
  )
}

export default Home