import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className='d-flex position-relative'>

      <Sidebar />

      <div className='w-100'>
        
        <Header />

        <div className='main-content-wrapper'>

          <div className="row">
            <div className="col-md-4 p-3">
              <div className="card">
                <span className='small'>Active sales</span>
                <div className='d-flex align-items-center'>
                  <h2 className='m-0 pe-2'>$24,000</h2>
                  <FontAwesomeIcon icon={faArrowTrendUp} className='text-success' />
                </div>

              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card">
                <span className='small'>Active sales</span>
                <div className='d-flex align-items-center'>
                  <h2 className='m-0 pe-2'>$24,000</h2>
                  <FontAwesomeIcon icon={faArrowTrendUp} className='text-success' />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card">
                <span className='small'>Active sales</span>
                <div className='d-flex align-items-center'>
                  <h2 className='m-0 pe-2'>$24,000</h2>
                  <FontAwesomeIcon icon={faArrowTrendUp} className='text-success' />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Dashboard