import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import Entry from './Entry'

const Home = () => {
    const {user} = useContext(AuthContext)
    if (!user) {
        return <Entry/>
    }
    return (
        <div className='w-full px-6'>
            <h2 className='font-bold absolute top-4 text-xl'>Your Games</h2>
            <p className='text-6xl text-center'>No Games Found!</p>
            <Link to='/login'><button className="btn btn-warning w-full mt-6">Start a game</button></Link>
        </div>
    )
}

export default Home