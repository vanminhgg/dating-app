import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './redux/reducer/UserSlice'
import { useNavigate } from 'react-router-dom'
import ProfileCard from './components/ProfileCard'

const Home = () => {
  const user = useSelector((state: any)=> state.user)
  useEffect(() => {
  }, [user])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token")
    navigate('/login')
  }

  return (
      <>
        <div className=''>Home</div>
        <button className = 'border-dashed bg-cyan-400' onClick={handleLogout}>logout</button>
        <ProfileCard/>
      </>
  )
}

export default Home