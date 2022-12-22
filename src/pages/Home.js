import { useQuery } from '@tanstack/react-query'
import React, { useContext} from 'react'
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
            }).catch(err => console.error(err))
    }
    const { data: games = [] } = useQuery({
        queryKey: ['games'],
        queryFn: async () => {
            const res = await fetch(`https://tic-toe-backend.vercel.app/games?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    if (!user) {
        return <Entry />
    }
    return (
        <div className='w-full px-6'>
            <div className='flex justify-between items-center absolute z-10 bg-[#fff] p-4 top-0 left-0 right-0'>
                <h2 className='font-bold text-xl'>Your Games</h2>
                <div>
                    <span onClick={handleLogout} className='btn btn-sm btn-error ml-3 rounded text-white normal-case'>logout</span>
                </div>
            </div>
            {
                games.length ?
                    <div className='grid grid-cols-1 gap-3'>
                        {games.map(game => <GameCard game={game} />)}
                    </div>
                    : <>
                        <p className='text-6xl text-center'>No Games Found!</p>
                        <Link to='/game'><button className="btn btn-warning w-full mt-6">Start a game</button></Link>
                    </>


            }
            {games?.length > 0 && <Link to='/game'><button className="btn btn-sm text-white normal-case rounded absolute right-5 bottom-6">Start a game +</button></Link>}

        </div>
    )
}

export default Home