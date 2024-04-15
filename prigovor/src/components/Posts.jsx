import React from 'react'

const Posts = ({post}) => {
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

        </div>


    </div>
  )
}

export default Posts