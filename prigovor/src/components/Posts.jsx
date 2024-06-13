import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { useState, React } from 'react'

const Posts = ({post, modify}) => {
  const navigate = useNavigate()

  const [openModal, setOpenModal] = useState(false)

  // const {deletePost, error} = useHandlePost('/posts')

  const handleDeletePost = () => {
    setOpenModal(true)
  }

  return (
    
    <div className='border-1 flex justify-center items-center w-5/6'>
        <Modal isOpen={openModal}/>
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
                <button className ='text-black border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white transition-all duration-300' onClick={handleDeletePost}>
                  Apagar
                </button>
              </div>
            }


        </div>


    </div>
  )
}

export default Posts