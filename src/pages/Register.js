import React from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='w-full px-6'>
            <Link to='/'><MdOutlineArrowBackIos/></Link>
            <h3 className='font-bold mt-5'>Create account</h3>
            <h1 className='text-4xl font-bold mb-24'>Let's get to know you better!</h1>

            <form className='flex flex-col'>
                <label className='font-bold mb-2'>Your Name</label>
                <input type="text" placeholder="" className="input mb-3" />
                
                <label className='font-bold mb-2'>Username</label>
                <input type="text" placeholder="" className="input mb-3" />
                
                <label className='font-bold mb-2'>Email</label>
                <input type="text" placeholder="" className="input mb-3" />
                
                <label className='font-bold mb-2'>Password</label>
                <input type="text" placeholder="" className="input mb-24" />
            
                <input value="Register" type="button" className='btn btn-warning absolute bottom-8 left-6 right-6' />
            </form>
        </div>
    )
}

export default Register