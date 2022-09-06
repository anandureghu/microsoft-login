import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/slice/user';

const Dashboard = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {user} = useSelector(state => state.user)

  
  useEffect(() => {
    if (!user.name) {
      navigate("/signin")
    }
  }, [])
  

  return (
    <div>
      <p className='text-3xl font-thin'>Welcome</p>
      <p className='text-5xl'>{user.name}</p>
      <div
        className="flex gap-2 mx-auto mt-5 items-center border p-1 px-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md transition-all w-max"
        onClick={() => {
          dispatch(logout());
          navigate("/signin");
        }}
      >
        <img
          className='w-6' 
          src="./assets/images/logo.png" alt="signout" />
        <p>sign out</p>
      </div>
    </div>
  )
}

export default Dashboard