import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({game}) => {
    const {date, time, _id, p2Name} = game
    return (
        <div className='w-full p-6 rounded-md shadow bg-[#fff]'>
            <h2 className='font-bold text-2xl'>Game with {p2Name}</h2>
            <p className='text-lg mt-3'>{p2Name} just made their moves! <br /> It's your turn to play now</p>
            <p className="mt-2 text-sm">{date} &nbsp; {time}</p>
            <Link to={`/games/board/${_id}`}><button className="btn btn-warning w-full mt-6">play</button></Link>
        </div>
    )
}

export default GameCard