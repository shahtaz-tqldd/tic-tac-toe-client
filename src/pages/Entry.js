import React from 'react'
import { Link } from 'react-router-dom'

const Entry = () => {
    return (
        <div className='w-full px-4'>
            <div className='text-center mb-32'>
                <p>async</p>
                <h1 className='text-5xl'>tic tac toe</h1>
            </div>
            <div className='absolute bottom-12 left-3 right-3'>
                <Link to='/login'><button className="btn btn-warning w-full mb-8">Login</button></Link>
                <Link to='/register'><button className="btn btn-primary w-full">Register</button></Link>
            </div>
        </div>
    )
}

export default Entry