import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { getStats } from '../api/dashboard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Contacts', 'Leads', 'Clients'],
  datasets: [
    {
      label: '',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const taskCompletionData = {
  labels: ['To Do', 'In Progress', 'Completed'],
  datasets: [
    {
      label: '',
      data: [12, 19, 36],
      backgroundColor: [
        '#B4EBFF',
        '#EBFFB4',
        '#B4FFD2',
      ],
      borderColor: [
        '#246A84',
        '#98AC60',
        '#5EAB7D',
      ],
      borderWidth: 1,
    },
  ],
};

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


          <div className='row'>
            <div className="col-md-6 p-3">
              <div className='card w-100'>
                <h5 className='mb-3'>Contact Management</h5>
                <div className='m-auto' style={{ maxWidth: 400 }}>
                  <Pie data={data} />
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3">
              <div className='card w-100'>
                <h5 className='mb-3'>Task Management</h5>
                <div className='m-auto' style={{ maxWidth: 400 }}>
                  <Doughnut data={taskCompletionData} />
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