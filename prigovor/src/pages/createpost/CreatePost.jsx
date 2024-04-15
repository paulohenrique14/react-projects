import React from 'react'
import { useState, useEffect } from 'react'
import { useHandlePost } from '../../hooks/useHandlePost';
// import '../../index.css'

import {useSelector } from 'react-redux';

const CreatePost = () => {

    const [title, setTitle]            = useState('');
    const [body, setBody]              = useState('');
    const [image, setImage]            = useState('');
    const [tags, setTags]              = useState([]);
    const [screenError, setScreenError] = useState('');

    const userID = useSelector(state => state.user.user.userId)

    const {addPost, error} = useHandlePost('posts')
    
    const handlePost = (e) => {
        e.preventDefault()

        setScreenError('')

        if (image === '' || tags === '' || body === '' || title === ''){
            setScreenError('Favor preencher todos os campos corretamente');
            setTimeout(() => {
                setScreenError('')
            }, 2000)
        }

        if (error !== '') {
            setScreenError(error.message)
            return
        }

        // const tagsArr = tags.toLowerCase().trim();

        const tagsArr = tags.toLowerCase().split(',').map(tag => tag.trim())

        const post = {
            title,
            body,
            image,
            tagsArr,
            userID
        }

        // console.log(post)
        addPost(post)

    }

    return (
        <div className= 'flex flex-col justify-evenly items-center h-full px-12 py-2'>
            <div className='flex items-center w-1/2 p-5 justify-center flex-col bg-slate-100 border-2'>     
                <div>
                    <h1 className='text-4xl'>Create a post</h1>
                    <p className='text-xl'>Share moments with your friends!</p>
                </div>           
                <form onSubmit={handlePost} className='flex flex-col justify-center items-center w-3/4'>
                <label className='py-5 flex flex-col w-96'>
                    <input 
                        type="text"
                        placeholder='post title'
                        value={title}
                        onChange={((e) => setTitle(e.target.value))}
                        className='w-full h-full bg-white border border-primary px-4 py-2 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <label className='py-5 flex flex-col w-96'>
                    <textarea 
                        type="text"
                        placeholder='post body'
                        value={body}
                        onChange={((e) => setBody(e.target.value))}
                        className='w-full h-full bg-white border resize-none border-primary px-4 py-2 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                <div className='flex flex-col justify-center items-center'>
                    <img src={image} alt="" className='w-auto h-full overflow-hidden transition-all duration-500' />
                    <label className='py-5 flex flex-col w-96'>
                    <input 
                        type="text"
                        placeholder='image url'
                        value={image}
                        onChange={((e) => setImage(e.target.value))}
                        className='w-full h-full bg-white border border-primary px-4 py-2 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                </div>

                <label className='py-5 flex flex-col w-96'>
                    <input 
                        type="text"
                        placeholder='post tags'
                        value={tags}
                        onChange={((e) => setTags(e.target.value))}
                        className='w-full h-full bg-white border border-primary px-4 py-2 focus:outline-none focus:border-primary-500 focus:border-2'
                    />
                </label>
                {screenError === '' ?
                    <button className='text-black border-2 border-primary px-4 py-2 hover:bg-primary hover:text-white transition-all duration-300 w-1/2 my-5'>Postar</button>
                    :
                    <p>{screenError}</p>
                }
            </form>
            </div>
            
        </div>
  )
}

export default CreatePost