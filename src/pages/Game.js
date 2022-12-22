import React, { useContext, useState } from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { format } from 'date-fns'

const Game = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [message, setMessage] = useState(null)

    const handleGameStart = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const game = {
            p1: user?.email,
            p1Name: user?.displayName,
            p2: email,
            p2Name: '',
            date: format(new Date(), 'PP'),
            time: format(new Date(), 'p'),
            r1c1: '',
            r1c2: '',
            r1c3: '',
            r2c1: '',
            r2c2: '',
            r2c3: '',
            r3c1: '',
            r3c2: '',
            r3c3: '',
            lastMove: ''
        }
        fetch('https://tic-toe-backend.vercel.app/games', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(game)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    e.target.reset()
                    navigate('/')
                }
                console.log(data)
                setMessage('This user is not registered in here. Forward him/her the link')
            })

    }
    return (
        <div className='w-full px-6'>
            <div className='absolute top-6'>
                <Link to='/'><MdOutlineArrowBackIos /></Link>
                <h3 className='font-bold mt-5'>Start a new game</h3>
                <h1 className='text-4xl font-bold'>Whom do you want to play with?</h1>
            </div>
            <form className='flex flex-col' onSubmit={handleGameStart}>
                <label className='font-bold mb-2'>Email</label>
                <input name="email" type="email" placeholder="" className="input mb-3" required />
                
                {message && <span className='bg-error p-4 mt-6 rounded text-white'>{message}</span>}
                
                <input value="Start game" type="submit" className='btn btn-warning absolute bottom-8 left-6 right-6' />
            </form>
        </div>
    )
}

export default Game