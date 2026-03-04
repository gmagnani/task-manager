import { createPortal } from 'react-dom'

const AddTaskDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return createPortal(
    <div className="fixed backdrop-blur-xs top-0 bottom-0 left-0 h-screen w-screen flex items-center justify-center">
      <div className='p-5 rounded-xl text-center bg-white shadow'>
        <h2 className='text-[#35383e] font-semibold text-xl'>Nova tarefa</h2>
        <p className='text-[#9a9c9f] text-sm mt-1'>Insira as informações abaixo</p>
      </div>
    </div>,
    document.body
  )
}

export default AddTaskDialog
