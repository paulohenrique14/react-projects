import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import { useState, React } from 'react'
import { useHandlePost } from '../hooks/useHandlePost'

const Posts = ({post, modify, response}) => {
  const navigate = useNavigate()

  const {deletePost, loading, error} = useHandlePost('/posts')

  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  const handleDeletePost = () => {
    deletePost(post.id, post)
    setOpenModal(false)
  }

  return (
    
    <div className='border-1 flex justify-center items-center w-5/6'>
        <Modal isOpen={openModal}>
          <div className = 'mt-5 flex flex-col gap-10'>
            <p>Deseja mesmo apagar o post?</p>
            <div className='flex gap-5'>
            <button className ='text-black border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white transition-all duration-300' onClick={(() => setOpenModal(false))}>
              Cancelar
            </button>
            <button className ='text-black border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white transition-all duration-300' onClick={handleDeletePost}>
              Apagar
            </button>
            </div>
          </div>

        </Modal>


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
                <button className ='text-black border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white transition-all duration-300' onClick={handleModal}>
                  Apagar
                </button>
              </div>
            }


        </div>


    </div>
  )
}

export default Posts