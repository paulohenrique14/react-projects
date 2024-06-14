import React from 'react'
import { useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import { Link } from 'react-router-dom';

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
                <h1 className='text-4xl'>Cadastrar</h1>
                <p>Crie agora uma conta para se conectar com seus amigos e descobrir novas histórias!</p>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <label className='py-5 flex flex-col w-96'>
                    <span>Nome</span>
                    <input 
                        type="text"
                        value={username}
                        onChange={((e) => setUsername(e.target.value) )}
                        placeholder = 'como você gostaria de ser chamado?'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <span>E-mail</span>
                    <input 
                        type="email"
                        value={email}
                        onChange={((e) => setEmail(e.target.value) )}
                        placeholder = 'seu melhor E-mail'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <span>Senha</span>
                    <input 
                        type="password"
                        value={password}
                        onChange={((e) => setPassword(e.target.value) )}
                        placeholder = 'sua melhor senha'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <span>Repita sua senha</span>
                    <input 
                        type="password"
                        value={repPassowrd}
                        onChange={((e) => setRepPassword(e.target.value) )}
                        placeholder = 'repita sua senha'
                        className='w-full h-full bg-white border border-primary px-3 py-1 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>

                <p>Ja tem uma conta <Link to ={'/login'} className='underline p-1'>Acesse-se a agora!</Link></p>
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