import React, { useContext, useState } from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useLoaderData } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { TbCircle } from 'react-icons/tb'
import { AuthContext } from '../context/AuthProvider'
const GameBoard = () => {
  const data = useLoaderData()
  const { p1, p2, p1Name, p2Name, _id, r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3, lastMove } = data
  const [seleceted, setSelected] = useState(null)
  const { user } = useContext(AuthContext)
  const name = user?.email === p1 ? p2Name : p1Name
  const moveText = lastMove!==user?.email ? 'Your move' : 'Their Move'
  const moves = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3]
  console.log(seleceted)
  const handleSubmit = (id) => {
    let board = ''
    switch (id) {
      case 1:
        board = "r1c1";
        break;
      case 2:
        board = "r1c2";
        break;
      case 3:
        board = "r1c3";
        break;
      case 4:
        board = "r2c1";
        break;
      case 5:
        board = "r2c2";
        break;
      case 6:
        board = "r2c3";
        break;
      case 7:
        board = "r3c1";
        break;
      case 8:
        board = "r3c2";
        break;
      case 9:
        board = "r3c3";
        break;
      default:
        break;

    }
    const moved = {
      _id,
      board,
      player: user?.email,
      lastMove: user?.email
    }
    fetch('https://tic-toe-backend.vercel.app/games', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(moved)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }
  return (
    <div className='w-full px-6'>
      <div className='absolute top-6'>
        <Link to='/'><MdOutlineArrowBackIos /></Link>
        <h1 className='text-4xl font-bold mt-4'>Game with {name}</h1>
        <p className='mt-3'>Your Piece</p>
        { p1!==user?.email ? <ImCross className='text-4xl mt-2 text-primary' /> : <TbCircle className='font-bold text-6xl text-error' />}
      </div>
      <div className='mt-16 text-center bg-warning p-3'>{moveText}</div>
      <div className='grid grid-cols-3'>
        {
          moves?.map((move, index) => <div onClick={() => setSelected(index + 1)} key={index}
            className='border-[4px] border-warning h-28 flex justify-center items-center hover:bg-[#fff] cursor-pointer'>
            {((move === p1 || (p1===user?.email && seleceted===index+1)) && <TbCircle className='font-bold text-6xl text-error' />)
              || ((move === p2 || (p2===user?.email && seleceted===index+1 )) && <ImCross className='text-4xl text-primary' />)}
          </div>
          )
        }
      </div>

      <form onSubmit={()=>handleSubmit(seleceted)} className='flex flex-col'>
        <input value="Submit" type="submit" className='btn btn-warning absolute bottom-8 left-6 right-6' disabled={lastMove === user?.email} />
      </form>
    </div>
  )
}

export default GameBoard