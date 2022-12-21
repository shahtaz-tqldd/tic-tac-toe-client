import React from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { TbCircle } from 'react-icons/tb'
const GameBoard = () => {
    const name = 'Tanmay'
    const move = 'Your move'
    const moves = [
        {
            "id": 1,
            "p1": true,
            "p2": false
        },
        {
            "id": 2,
            "p1": false,
            "p2": true
        },
        {
            "id": 3,
            "p1": false,
            "p2": false
        },
        {
            "id": 4,
            "p1": false,
            "p2": true
        },
        {
            "id": 5,
            "p1": true,
            "p2": false
        },
        {
            "id": 6,
            "p1": false,
            "p2": false
        },
        {
            "id": 7,
            "p1": true,
            "p2": false
        },
        {
            "id": 8,
            "p1": false,
            "p2": true
        },
        {
            "id": 9,
            "p1": false,
            "p2": false
        },
    ]
    return (
        <div className='w-full px-6'>
            <div className='absolute top-6'>
                <Link to='/'><MdOutlineArrowBackIos /></Link>
                <h1 className='text-4xl font-bold mt-4'>Game with {name}</h1>
                <p className='mt-3'>Your Piece</p>
                <ImCross className='text-4xl mt-2 text-primary' />
            </div>
            <div className='mt-16 text-center bg-warning p-3'>{move}</div>
            <div className='grid grid-cols-3'>
                {
                    moves.map(move => <div key={ move.id} className='border-[4px] border-warning h-32 flex justify-center items-center'>
                        {(move.p1 && <TbCircle className='font-bold text-6xl text-error' />)
                            || (move.p2 && <ImCross className='text-4xl text-primary' />)}
                    </div>
                    )
                }
            </div>

            <form className='flex flex-col'>
                <input value="Submit" type="button" className='btn btn-warning absolute bottom-8 left-6 right-6' />
            </form>
        </div>
    )
}

export default GameBoard