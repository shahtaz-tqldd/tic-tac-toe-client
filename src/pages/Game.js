import React from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Game = () => {
    return (
        <div className='w-full px-6'>
            <div className='absolute top-6'>
                <Link to='/'><MdOutlineArrowBackIos /></Link>
                <h3 className='font-bold mt-5'>Start a new game</h3>
                <h1 className='text-4xl font-bold'>Whom do you want to play with?</h1>
            </div>
            <form className='flex flex-col'>
                <label className='font-bold mb-2'>Email</label>
                <input type="email" placeholder="" className="input mb-3" />

                <input value="Start game" type="button" className='btn btn-warning absolute bottom-8 left-6 right-6' />
            </form>
        </div>
    )
}

export default Game