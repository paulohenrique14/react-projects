import React from 'react'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../redux/UserSlice';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const [authUser, setAuthUser] = useState('');
    // const [userData, setUserData] = useState([])

    const dispatch = useDispatch();

    const {login, loading, error, auth} = useAuthentication();

    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = {
            email,
            password
        }

        const res = await login(data)

        const userData = {
            email: email,
            password: password,
            userId: auth.currentUser.reloadUserInfo.localId
          };

        console.log(userData)

        dispatch(changeUser(userData))

        

    }

  return (
    <div className='flex justify-center items-center mt-24'> 
        <div className = 'w-1/2 flex flex-col justify-center items-center bg-slate-100 border-2 p-5'>

            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-4xl'>Login</h1>
                <p className='text-xl'>Acesse sua conta para acompanhar os posts da galera e compartilhar suas histórias!</p>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <label className='py-5 flex flex-col w-96'>
                    <span>Email</span>
                    <input 
                        type="email"
                        value={email}
                        onChange={((e) => setEmail(e.target.value) )}
                        className='w-full h-full bg-white border border-primary px-4 py-2 focus:outline-none focus:border-primary-500 focus:border-2'
                        />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <span>Senha</span>
                    <input 
                        type="password"
                        value={password}
                        onChange={((e) => setPassword(e.target.value) )}
                        className='w-full h-full bg-white border border-primary px-4 py-2 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>

                <p>Ainda não tem uma conta? <Link to ={'/signup'} className='underline p-1'>Crie agora!</Link></p>
                <button className='text-black border-2 border-primary px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 w-1/2 my-5'>Login</button> 
                {error && 
                    <p className='bg-red-500 p-1 text-center my-2'>Erro! {error}</p>

                }
            </form>
        </div>

    </div>
  )
}

export default Login