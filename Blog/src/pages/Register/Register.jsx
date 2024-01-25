import React from 'react'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [displayName, setDisplayName]         = useState('');
    const [email, setEmail]                     = useState('');
    const [password, setPassword]               = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError]                     = useState('');

    const {createUser, loading, authError} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('')

        if (password !== confirmPassword ) {
            setError('senhas diferem, favor verificar.');
            return;
        }

        const user = {
            displayName,
            email,
            password
        };

        console.log(user);

        const res = await createUser(user)
    }

    useEffect(() => {
        if (authError){
            setError(authError);
            console.log(authError)
        }
    }, [authError])
    
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p><b>Compartilhe</b> suas histórias conosco!</p>
        <br />
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                    type="text" 
                    required 
                    name='displayName' 
                    placeholder='Nome do usuário'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
            <br />
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
            <label>
                <span>Confirme sua senha:</span>
                <input 
                    type="password"
                    required 
                    name='confirmPassword' 
                    placeholder='Repita sua senha'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <br />
            <button className='btn'>Cadastrar</button>
            {error && 
            <p className='error'>{error}</p>
        }
        </form>
    </div>
  )
}

export default Register