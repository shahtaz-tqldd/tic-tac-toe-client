import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = () => {
    const name = 'Tanmay'
    const date = 'Nov 22, 2022; 3:15pm'
    return (
        <div className='w-full p-6 rounded-md shadow bg-[#fff]'>
            <h2 className='font-bold text-2xl'>Game with {name}</h2>
            <p className='text-lg mt-3'>{name} just made their moves! <br /> It's your turn to play now</p>
            <p className="mt-2 text-sm">{date}</p>
            <Link to='/game/board'><button className="btn btn-warning w-full mt-6">play</button></Link>
        </div>
    )
}

export default GameCard