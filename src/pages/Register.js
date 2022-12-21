import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';


const Register = () => {
    const { emailRegister, userUpdate } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = (data) => {
        const { name, username, email, password } = data
        emailRegister(email, password)
            .then(result => {
                console.log(result)
                const userInfo = {
                    displayName: name,
                    username
                }
                updateProfile(userInfo)
            })
            .catch(err => console.error(err))
    }

    const updateProfile = (userInfo) => {
        userUpdate(userInfo)
            .then(result => {
                console.log(result)
                toast.success("User created successfully!")
                navigate('/login')
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='w-full px-6'>
            <div className='mt-6'>
                <Link to='/'><MdOutlineArrowBackIos /></Link>
                <h3 className='font-bold mt-5'>Create account</h3>
                <h1 className='text-4xl font-bold mb-12'>Let's get to know you better!</h1>
            </div>

            <form className='flex flex-col' onSubmit={handleSubmit(handleRegister)}>
                <label className='font-bold mb-2'>Your Name</label>
                <input {...register("name", { required: "Please provide your name" })} type="text" placeholder="Your Name" className="input mb-3" />
                {errors.name && <span className='text-error font-bold'>{errors.name.message}</span>}

                <label className='font-bold mb-2'>Username</label>
                <input {...register("username", { required: "Please provide a username" })} type="text" placeholder="username" className="input mb-3" />
                {errors.username && <span className='text-error font-bold'>{errors.username.message}</span>}

                <label className='font-bold mb-2'>Email</label>
                <input {...register("email", { required: "Please provide your email" })} type="email" placeholder="username@email.com" className="input mb-3" />
                {errors.email && <span className='text-error font-bold'>{errors.email.message}</span>}

                <label className='font-bold mb-2'>Password</label>
                <input {...register("password", { required: "Please provide a password" })} type="password" placeholder="password" className="input mb-16" />
                {errors.password && <span className='text-error font-bold'>{errors.password.message}</span>}

                <input value="Register" type="submit" className='btn btn-warning absolute bottom-8 left-6 right-6' />
            </form>
        </div>
    )
}

export default Register