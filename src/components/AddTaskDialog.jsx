import { createPortal } from 'react-dom'
import Input from './Input'
import Button from './Button'
import { CSSTransition } from 'react-transition-group'
import { useEffect, useRef, useState } from 'react'
import './AddTaskDialog.css'
import SelectTime from './SelectTime'
import { v4 } from 'uuid'
import { LoaderIcon } from '../assets/icons'

const AddTaskDialog = ({ isOpen, onClose, onAddTaskSucces }) => {
  const [error, setError] = useState([])
  const [addTaskIsLoading, setAddTaskIsLoading] = useState(false)
  const nodeRef = useRef()
  const titleRef = useRef()
  const timeRef = useRef()
  const descriptionRef = useRef()

  const titleError = error.find((err) => err.field === 'title')
  const timeError = error.find((err) => err.field === 'time')
  const descriptionError = error.find((err) => err.field === 'description')

  const handleSave = async () => {
    const newError = []
    const title = titleRef.current.value
    const time = timeRef.current.value
    const description = descriptionRef.current.value
    if (!title.trim()) {
      newError.push({ field: 'title', message: 'O título é obrigatório' })
    }
    if (!time.trim()) {
      newError.push({ field: 'time', message: 'O horário é obrigatório' })
    }
    if (!description.trim()) {
      newError.push({
        field: 'description',
        message: 'A descrição é obrigatória',
      })
    }
    if (newError.length > 0) {
      setError(newError)
      return
    }
    setAddTaskIsLoading(true)
    const newTask = {
      id: v4(),
      title,
      time,
      description,
      status: 'pending',
    }
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
    })
    if (!response.ok) {
      setAddTaskIsLoading(false)
      toast.error('Erro ao adicionar tarefa!')
      return
    }
    setAddTaskIsLoading(false)
    onAddTaskSucces(newTask)
    onClose()
  }

  useEffect(() => {
    if (!isOpen) {
      setError([])
    }
  }, [isOpen])

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
              <h2 className="text-darkBlue font-semibold text-xl">
                Nova tarefa
              </h2>
              <p className="text-textGray text-sm mt-1 mb-4">
                Insira as informações abaixo
              </p>
              <div className="space-y-4 flex flex-col w-84">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Título"
                  error={titleError?.message}
                  ref={titleRef}
                />
                <SelectTime
                  id="time"
                  label="Horário"
                  error={timeError?.message}
                  ref={timeRef}
                />
                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descrição"
                  error={descriptionError?.message}
                  ref={descriptionRef}
                />
                <div className="flex gap-3">
                  <Button size="large" color="secondary" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    onClick={handleSave}
                    disabled={addTaskIsLoading}
                  >
                    {addTaskIsLoading ? (
                      <LoaderIcon className="animate-spin" />
                    ) : (
                      'Salvar'
                    )}
                  </Button>
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
