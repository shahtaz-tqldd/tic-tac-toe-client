import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import Entry from './Entry'
import GameCard from './GameCard'

const Home = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.error("User logged out!")
            }).catch(err=>console.error(err))
    }
    if (!user) {
        return <Entry />
    }
    return (
        <div className='w-full px-6'>
            <div className='flex justify-between items-center absolute top-4 left-3 right-3'>
                <h2 className='font-bold text-xl'>Your Games</h2>
                <div>
                    <span className='text-success'>Win:<b> 4 </b></span> &nbsp;
                    <span className='text-error'>Loose:<b> 2 </b></span> &nbsp; 
                    <span className='text-primary'>Draw:<b> 3 </b></span>
                    <span onClick={handleLogout} className='btn btn-sm btn-error ml-3 rounded text-white normal-case'>logout</span>
                </div>
            </div>
            {
                !user.game ?
                    <>
                        <p className='text-6xl text-center'>No Games Found!</p>
                        <Link to='/game'><button className="btn btn-warning w-full mt-6">Start a game</button></Link>
                    </>
                    : <GameCard />
            }
            {user.game && <Link to='/game'><button className="btn btn-sm text-white normal-case rounded absolute right-5 bottom-6">Start a game +</button></Link>}

        </div>
    )
}

export default Home