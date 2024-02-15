import React from 'react'
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const {login, authError, auth} = useAuthentication()

  const handleSubmit = async(e) =>{
    e.preventDefault();

    setError('')
    
    const user = {
      email,
      password
    };

    console.log(user)

    const res = await login(user)

  };

  useEffect(() => {
    if (authError){
        setError(authError);
        console.log(authError)
    }
}, [authError])

  return (
    <div>
        <div className="headerComponents">
          <h1>Login</h1>
          <p>Entre na sua conta e compartilhe suas histórias tinhosas!</p>
        </div>
        
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email:</span>
                <input 
                    type="email" 
                    required 
                    name='email' 
                    placeholder='Email do usuário'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}    
                />
            </label>
            <br />
            <label>
                <span>Senha:</span>
                <input 
                    type="password"
                    required 
                    name='password' 
                    placeholder='Insira sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <br />
            <button className='btn'>Logar</button>
            {error && 
            <p className='error'>{error}</p>
            }
        </form>
    </div>
  )
}

export default Login