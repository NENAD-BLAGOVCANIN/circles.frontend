import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { getStats } from '../api/dashboard';

function Dashboard() {

  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
        try {
            const fetchedStats = await getStats();
            setStats(fetchedStats);
        } catch (error) {
            console.error('Error fetching :', error);
        }
    };

    fetchStats();
}, []);


  return (
    <div className='main-content-wrapper'>

      <Sidebar />

      <div className='w-100 overflow-auto'>
        
        <Header pageTitle="Dashboard" />

        <div className='main-container'>

          <div className="row">
            <div className="col-md-4 p-3">
              <div className="card">
                <span className='small'>Contacts</span>
                <div className='d-flex align-items-center'>
                  <h2 className='m-0 pe-2'>{stats.contactCount}</h2>
                  <FontAwesomeIcon icon={faArrowTrendUp} className='text-success' />
                </div>

              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card">
                <span className='small'>Leads</span>
                <div className='d-flex align-items-center'>
                  <h2 className='m-0 pe-2'>{stats.leadCount}</h2>
                  <FontAwesomeIcon icon={faArrowTrendUp} className='text-success' />
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card">
                <span className='small'>Tasks</span>
                <div className='d-flex align-items-center'>
                  <h2 className='m-0 pe-2'>{stats.taskCount}</h2>
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