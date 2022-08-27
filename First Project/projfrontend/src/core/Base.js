import React from 'react'
import Navbar from './Navbar'

export default function Base({title="my title",
                             description="my description",
                             className="bg-dark text-white p-4",
                             children
                            }) {
  return (
    <div>
      <Navbar/>
      <div className='container-fluid'>
        <div className='jumbotron bg-dark text-white text-center'>
            <h2 className='display-4'>{title}</h2>
            <p className='lead'>{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className='footer bg-dark mt-auto py-3'>
            <div className='container-fluid text-white text-center'>
                <h4>If you got some questions feel free to reach out</h4>
                <button className='btn btn-warning btn-lg my-3'>Contact Us</button>
            </div>
            <div className='container text-center'>
                <span className='text-muted'>An amazing place to learn code</span>
            </div>
      </footer>
    </div>
  )
}
