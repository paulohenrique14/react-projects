import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Posts = ({post, modify}) => {
  const navigate = useNavigate()
  return (
    <div className='border-1 flex justify-center items-center w-5/6'>
        <div className='flex flex-col items-center w-2/3 h-auto p-5 gap-2 bg-slate-100 border-2'>
            <h1 className='text-3xl'>{post.title}</h1>
            <img src={post.image} alt="" />
            <p className='text-xl'>{post.body}</p>
            <div className='flex gap-1'>
              {post.tagsArr.map((tag) => (
                <p>#{tag}</p>
              ))}
            </div>
            {modify && 
              <div className='flex justify-end gap-5 w-full'>
                <button className ='text-black border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white transition-all duration-300'>
                  <Link to = {`/post/edit/${post.id}`}>Editar</Link>
                </button>
                <button className ='text-black border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white transition-all duration-300'>
                  Apagar
                </button>
              </div>
            }


        </div>


    </div>
  )
}

export default Posts