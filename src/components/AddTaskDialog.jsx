import { createPortal } from 'react-dom'
import Input from './Input'
import Button from './Button'
import { CSSTransition } from 'react-transition-group'
import { useEffect, useRef } from 'react'
import './AddTaskDialog.css'
import SelectTime from './SelectTime'
import { v4 } from 'uuid'
import { LoaderIcon } from '../assets/icons'
import { useForm } from 'react-hook-form'

const AddTaskDialog = ({ isOpen, onClose, onAddTaskSucces }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()
  const nodeRef = useRef()

  const handleSave = async (data) => {
    const newTask = {
      id: v4(),
      title: data.title.trim(),
      time: data.time,
      description: data.description.trim(),
      status: 'pending',
    }
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
    })
    if (!response.ok) {
      toast.error('Erro ao adicionar tarefa!')
      return
    }
    onAddTaskSucces(newTask)
    onClose()
  }

  useEffect(() => {
    if (!isOpen) {
      reset({
        title: '',
        time: '',
        description: '',
        errors: {},
      })
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
              <form onSubmit={handleSubmit(handleSave)}>
                <div className="space-y-4 flex flex-col w-84">
                  <Input
                    id="title"
                    label="Título"
                    placeholder="Título"
                    {...register('title', {
                      required: 'O título é obrigatório',
                      validate: (value) => {
                        if (!value.trim()) return 'O título não pode ser vazio'
                        return true
                      },
                    })}
                    error={errors?.title?.message}
                    disabled={isSubmitting}
                  />
                  <SelectTime
                    id="time"
                    label="Horário"
                    {...register('time', {
                      required: 'O horário é obrigatório',
                    })}
                    error={errors?.time?.message}
                    disabled={isSubmitting}
                  />
                  <Input
                    id="description"
                    label="Descrição"
                    placeholder="Descrição"
                    {...register('description', {
                      required: 'A descrição é obrigatória',
                      validate: (value) => {
                        if (!value.trim())
                          return 'A descrição não pode ser vazia'
                        return true
                      },
                    })}
                    error={errors?.description?.message}
                    disabled={isSubmitting}
                  />
                  <div className="flex gap-3">
                    <Button
                      size="large"
                      color="secondary"
                      className="w-full"
                      onClick={onClose}
                      type="button"
                    >
                      Cancelar
                    </Button>
                    <Button
                      size="large"
                      onClick={handleSave}
                      disabled={isSubmitting}
                      className="w-full"
                      type="submit"
                    >
                      {isSubmitting ? (
                        <LoaderIcon className="animate-spin" />
                      ) : (
                        'Salvar'
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
