import React from 'react'
import { useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Signup = () => {
    const [username, setUsername]       = useState('');
    const [email, setEmail]             = useState('');
    const [password, setPassword]       = useState('');
    const [repPassowrd, setRepPassword] = useState('');
    const [screenError, setScreenError] = useState('');

    const {createUser, loading, error} = useAuthentication();

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        if (username === '' || email === '' || password === '') {
            setScreenError('Please fill in all necessary information :)');
            return;
        }

        if (repPassowrd !== password) {
            setScreenError('Passwords do not match, please check :)')
            return;
        }
        
        const user = {
            username, 
            email,
            password
        }

        const res = await createUser(user);

        setScreenError(error.message)
    
    }
  return (
    <div className='flex justify-center items-center mt-3'>
        <div className = 'w-1/2 flex flex-col justify-center items-center bg-slate-100 border-2'>

            <div className='flex flex-col justify-center items-center gap-5 p-5'>
                <h1 className='text-4xl'>Signup</h1>
                <p>Join now to post images, connect with others, and discover new perspectives. Start sharing and exploring today!</p>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <label className='py-5 flex flex-col w-96'>
                    <span>username</span>
                    <input 
                        type="text"
                        value={username}
                        onChange={((e) => setUsername(e.target.value) )}
                        placeholder = 'your username...'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <span>email</span>
                    <input 
                        type="email"
                        value={email}
                        onChange={((e) => setEmail(e.target.value) )}
                        placeholder = 'your best email...'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <span>password</span>
                    <input 
                        type="password"
                        value={password}
                        onChange={((e) => setPassword(e.target.value) )}
                        placeholder = 'your best and more secure password...'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <span>can you repeat it?</span>
                    <input 
                        type="password"
                        value={repPassowrd}
                        onChange={((e) => setRepPassword(e.target.value) )}
                        placeholder = 'i bet you can´t...'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>

                <p>Ja tem uma conta <span>Acesse-se a agora!</span></p>
                <button className='text-black border-2 border-primary px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 w-1/2 my-5'>Criar conta</button> 
                {error && 
                    <p className='bg-red-500 p-1 text-center my-2'>Erro! {error}</p>

                }
            </form>
        </div> 

    </div>
  )
}

export default Signup