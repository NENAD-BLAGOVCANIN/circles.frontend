import React from 'react'
import Sidebar from '../components/Sidebar'


function Dashboard() {
  return (
    <div className='d-flex position-relative'>

      <Sidebar />

      <div className='main-content-wrapper'>

        <h2>Dashboard</h2>

        <div className="row">
          <div className="col-md-4 p-3">
            <div className="card">
              <span className='small'>Active sales</span>
              <h2>$24,000</h2>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card">
              <span className='small'>Active sales</span>
              <h2>$24,000</h2>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card">
              <span className='small'>Active sales</span>
              <h2>$24,000</h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard