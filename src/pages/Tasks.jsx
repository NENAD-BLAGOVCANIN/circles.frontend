import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Tasks() {
    return (
        <div className='d-flex position-relative'>

            <Sidebar />

            <div className='w-100'>

                <Header pageTitle="Tasks" />

                <div className='main-content-wrapper'>

                    <div className="row">
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className=''>
                                    <h4 className='pe-2'>Task Name</h4>
                                    <span className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet culpa vitae porro soluta dolores voluptas nihil esse temporibus, 
                                        non est, minus doloribus exercitationem totam laboriosam pariatur magnam cumque atque ea!</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className=''>
                                    <h4 className='pe-2'>Task Name</h4>
                                    <span className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet culpa vitae porro soluta dolores voluptas nihil esse temporibus, 
                                        non est, minus doloribus exercitationem totam laboriosam pariatur magnam cumque atque ea!</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card">
                                <div className=''>
                                    <h4 className='pe-2'>Task Name</h4>
                                    <span className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet culpa vitae porro soluta dolores voluptas nihil esse temporibus, 
                                        non est, minus doloribus exercitationem totam laboriosam pariatur magnam cumque atque ea!</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Tasks