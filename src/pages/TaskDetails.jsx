import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import Sidebar from '../components/Sidebar'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from '../assets/icons'
import Button from '../components/Button'
import Input from '../components/Input'
import SelectTime from '../components/SelectTime'
import { useForm } from 'react-hook-form'

import { toast } from 'sonner'

const TaskDetails = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    const getTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'GET',
      })

      const task = await response.json()
      setTask(task)
      reset(task)
    }

    getTask()
  }, [taskId, reset])

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleSaveClick = async (data) => {
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: data.title.trim(),
        time: data.time,
        description: data.description.trim(),
      }),
    })
    if (!response.ok) {
      toast.error('Erro ao salvar tarefa!')
      return
    }
    const updatedTask = response.json()
    setTask(updatedTask)
    toast.success('Tarefa salva com sucesso!')
  }

  const handleDeleteClick = async () => {
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      toast.error('Erro ao deletar tarefa!')
      return
    }
    toast.success('Tarefa deletada com sucesso!')
    navigate(-1)
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-8 py-16 space-y-6">
        <div className=" flex justify-between w-full">
          <div>
            <button
              onClick={handleBackClick}
              className="mb-3 h-8 w-8 rounded-full bg-primary flex justify-center items-center cursor-pointer "
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center gap-1 text-xs">
              <Link to="/" className="text-textGray cursor-pointer">
                Minhas tarefas
              </Link>{' '}
              <ChevronRightIcon className="text-textGray" />{' '}
              <span className="text-primary font-semibold">{task?.title}</span>
            </div>
            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>

          <div>
            <Button
              className="h-fit self-end"
              color="danger"
              onClick={handleDeleteClick}
            >
              <TrashIcon /> Deletar tarefa
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSaveClick)}>
          <div className="bg-white p-6 rounded-xl space-y-6">
            <div>
              <Input
                id="title"
                label="Título"
                {...register('title', {
                  required: 'O título é obrigatório',
                  validate: (value) => {
                    if (!value.trim()) return 'O título não pode ser vazio'
                    return true
                  },
                })}
                error={errors?.title?.message}
              />
            </div>
            <div>
              <SelectTime
                id="time"
                label="Horário"
                {...register('time', { required: 'O horário é obrigatório' })}
                error={errors?.time?.message}
              />
            </div>
            <div>
              <Input
                id="description"
                label="Descrição"
                {...register('description', {
                  required: 'A descrição é obrigatória',
                  validate: (value) => {
                    if (!value.trim()) return 'A descrição não pode ser vazia'
                    return true
                  },
                })}
                error={errors?.description?.message}
              />
            </div>
          </div>
          <div className="flex justify-end w-full gap-3">
            <Button color="secondary" size="large">
              Cancelar
            </Button>
            <Button size="large" type="submit" disabled={isSubmitting}>
              {}
              {isSubmitting ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                'Salvar'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskDetails
