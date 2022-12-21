import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Login = () => {
    const { emailLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data
        emailLogin(email, password)
            .then(result => {
                console.log(result)
                toast.success("Login Successful!")
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='w-full px-6'>
            <div className='absolute top-6'>
                <Link to='/'><MdOutlineArrowBackIos /></Link>
                <h3 className='font-bold mt-5'>Login</h3>
                <h1 className='text-4xl font-bold mb-24'>Please enter your detail</h1>
            </div>


            <form className='flex flex-col' onSubmit={handleSubmit(handleLogin)}>
                <label className='font-bold mb-2'>Username</label>
                <input {...register("email", { required: "Please provide your email" })} type="email" placeholder="username@email.com" className="input mb-3" />
                {errors.email && <span className='text-error font-bold'>{errors.email.message}</span>}

                <label className='font-bold mb-2'>Password</label>
                <input {...register("password", { required: "Please provide a password" })} type="password" placeholder="password" className="input mb-16" />
                {errors.password && <span className='text-error font-bold'>{errors.password.message}</span>}

                <input value="Login" type="submit" className='btn btn-warning absolute bottom-8 left-6 right-6' />
            </form>
        </div>
    )
}

export default Login