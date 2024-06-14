import React from 'react'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'

const About = () => {
  return (
    <div className='flex flex-col justify-between items-center p-5'>
        <div className='w-2/3 h- flex flex-col items-center gap-5 mt-10  bg-slate-100 border-2 p-4'>
            <h1 className='text-6xl'>Prigovor</h1>
            <p>
                O projeto oferece aos usuários a capacidade de criar e gerenciar suas contas de forma segura, cada uma 
                acompanhada por um token de autenticação exclusivo. Os usuários podem facilmente criar, editar, visualizar e apagar os
                posts. 
            </p>
            <p>desenvolvido com as seguintes tecnologias:</p>
            <ul>
                <li>ReactJS <img src="" alt="" className/></li>
                <li>Redux <img src="" alt="" /></li>
                <li>TailwindCSS <img src="" alt="" /></li>
                <li>Native React Hooks (useState, useEffect) <img src="" alt="" /></li>
                <li>React Router <img src="" alt="" /></li>
                <li>Firebase Authentication e Firebase Database <img src="" alt="" /></li>
            </ul>
            <input type="text"/>
            <footer className='flex items-center justify-center gap-2'>
            <p>Redes sociais do desenvolvedor: </p> 
            <ul className='flex w-1/4 gap-5'>
                <li className='w-20 h-auto'>
                    <a href="https://github.com/paulohenrique14" target='_blank'><img src={github} alt="github" /></a>
                </li>
                <li className='w-20 h-auto'> 
                    <a href="https://www.linkedin.com/in/paulo-henrique-figueiredo-marques-000914181/" target='_blank'><img src={linkedin} alt="linkedin"/></a>
                </li>
                <li className='w-20 h-auto'>
                    <a href="https://www.instagram.com/paulo__hfm/" target='_blank'><img src={instagram} alt="instagram"/></a>
                </li>

            </ul>
        </footer>
        </div>


    </div>
  )
}

export default About