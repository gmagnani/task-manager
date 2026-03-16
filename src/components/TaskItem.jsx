import { CheckIcon, DetailIcon, LoaderIcon, TrashIcon } from '../assets/icons'
import Button from './Button'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { useDeleteTask } from '../hooks/data/use-delete-task'
import { useUpdateTask } from '../hooks/data/use-update-task'

const TaskItem = ({ task }) => {
  const { mutate: deleteTask, isPending } = useDeleteTask(task.id)
  const { mutate: updateTask } = useUpdateTask(task.id)

  const handleDeleteTask = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success('Tarefa deletada com sucesso!')
      },
      onError: () => {
        toast.error('Erro ao deletar tarefa!')
      },
    })
  }

  const getStatusClasses = () => {
    switch (task.status) {
      case 'pending':
        return 'bg-darkBlue/10 text-darkBlue'
      case 'in_progress':
        return 'bg-process/10 text-process'
      case 'done':
        return 'bg-primary/10 text-primary'
      default:
        return ''
    }
  }

  const getNewerStatus = () => {
    if (task.status === 'pending') {
      return 'in_progress'
    }
    if (task.status === 'in_progress') {
      return 'done'
    }
    if (task.status === 'done') {
      return 'pending'
    }
  }

  const handleCheckboxClick = () => {
    updateTask(
      { status: getNewerStatus() },
      {
        onSuccess: () => {
          toast.success('Tarefa atualizada com sucesso!')
        },
        onError: () => {
          toast.error('Erro ao atualizar tarefa!')
        },
      }
    )
  }
  return (
    <div
      className={`transition px-4 py-3 justify-between flex items-center text-sm gap-2 rounded-lg ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            className="absolute opacity-0 w-full h-full cursor-pointer"
            onChange={() => handleCheckboxClick(task.id)}
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center">
        <Button color="ghost" onClick={handleDeleteTask} disabled={isPending}>
          {isPending ? (
            <LoaderIcon className="animate-spin" />
          ) : (
            <TrashIcon className="text-textGray" />
          )}
        </Button>
        <Link
          to={`/task/${task.id}`}
          className="text-primary hover:text-primary/80"
        >
          <DetailIcon />
        </Link>
      </div>
    </div>
  )
}

export default TaskItem
