import { createPortal } from 'react-dom'
import Input from './Input'
import Button from './Button'
import { CSSTransition } from 'react-transition-group'
import { useRef } from 'react'
import './AddTaskDialog.css'
import SelectTime from './SelectTime'

const AddTaskDialog = ({ isOpen, onClose }) => {
  const nodeRef = useRef()
  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed backdrop-blur-xs top-0 bottom-0 left-0 h-screen w-screen flex items-center justify-center"
          >
            <div className="p-5 rounded-xl text-center bg-white shadow">
              <h2 className="text-[#35383e] font-semibold text-xl">
                Nova tarefa
              </h2>
              <p className="text-[#9a9c9f] text-sm mt-1 mb-4">
                Insira as informações abaixo
              </p>
              <div className="space-y-4 flex flex-col w-84">
                <Input id="title" label="Título" placeholder="Título" />
                <SelectTime id="time" label="Horário" />
                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descrição"
                />
                <div className="flex gap-3">
                  <Button size="large" variant="secondary" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button size="large">Salvar</Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
