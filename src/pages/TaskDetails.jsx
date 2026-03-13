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
import { useUpdateTask } from '../hooks/data/use-update-task'
import { useGetTask } from '../hooks/data/use-get-task'
import { useDeleteTask } from '../hooks/data/use-delete-task'

const TaskDetails = () => {
  const { taskId } = useParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const navigate = useNavigate()
  const { data: task } = useGetTask(taskId, reset)
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask(taskId)
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask(taskId)

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleSaveClick = async (data) => {
    updateTask(data, {
      onSuccess: () => {
        toast.success('Tarefa atualizada com sucesso!')
      },
      onError: () => {
        toast.error('Erro ao atualizar tarefa!')
      },
    })
  }

  const handleDeleteClick = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success('Tarefa deletada com sucesso!')
        navigate(-1)
      },
      onError: () => {
        toast.error('Erro ao deletar tarefa!')
      },
    })
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
              disabled={isDeleting}
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
            <Button
              size="large"
              type="submit"
              disabled={isUpdating || isDeleting}
            >
              {}
              {isUpdating || isDeleting ? (
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
