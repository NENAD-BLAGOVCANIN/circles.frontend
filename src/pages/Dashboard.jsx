import React from 'react'
import Sidebar from '../components/Sidebar'


function Dashboard() {
  return (
    <div className='d-flex position-relative'>

      <Sidebar />

      <div className='main-content-wrapper'>
        <h2>Dashboard</h2>
      </div>


    </div>
  )
}

export default Dashboard