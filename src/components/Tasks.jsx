import { useState } from 'react'
import Button from './Button'
import {
  AddIcon,
  TrashIcon,
  SunIcon,
  SunCloudIcon,
  MoonIcon,
} from '../assets/icons'
import TasksSeparator from './TasksSeparator'
import TaskItem from './TaskItem'
import { toast } from 'sonner'
import AddTaskDialog from './AddTaskDialog'
import {  useQueryClient } from '@tanstack/react-query'
import { useGetTasks } from '../hooks/data/use-get-tasks'

const Tasks = () => {
  const queryClient = useQueryClient()
  const { data: tasks } = useGetTasks()
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const morningTasks = tasks?.filter((task) => task.time === 'morning')
  const afternoonTasks = tasks?.filter((task) => task.time === 'afternoon')
  const nightTasks = tasks?.filter((task) => task.time === 'night')

  const handleClearTasks = () => {
    toast.success('Todas as tarefas foram removidas!')
  }

  const handleCheckboxClick = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        if (task.status === 'pending') {
          toast.success('Tarefa iniciada!')
          return { ...task, status: 'in_progress' }
        } else if (task.status === 'in_progress') {
          toast.success('Tarefa concluída!')
          return { ...task, status: 'done' }
        } else if (task.status === 'done') {
          toast.success('Tarefa reaberta!')
          return { ...task, status: 'pending' }
        }
      }
      return task
    })
    queryClient.setQueryData('tasks', updatedTasks)
  }

  return (
    <div className="py-16 px-8 w-full space-y-6">
      <div className="flex justify-between w-full">
        <div>
          <span className="text-xs font-semibold text-primary">
            Minhas tarefas
          </span>
          <h2 className="font-semibold text-xl">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button color="ghost" onClick={handleClearTasks}>
            Limpar tarefas <TrashIcon />
          </Button>
          <Button color="primary" onClick={() => setIsAddDialogOpen(true)}>
            Nova tarefa <AddIcon />
          </Button>

          <AddTaskDialog
            isOpen={isAddDialogOpen}
            onClose={() => setIsAddDialogOpen(false)}
          />
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} label="Manhã" />
          {morningTasks?.length === 0 && (
            <p className="text-sm text-textGray">
              Nenhuma tarefa para o período da manhã.
            </p>
          )}
          {morningTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
            />
          ))}
        </div>
        <div className="space-y-3 my-6">
          <TasksSeparator icon={<SunCloudIcon />} label="Tarde" />
          {afternoonTasks?.length === 0 && (
            <p className="text-sm text-textGray">
              Nenhuma tarefa para o período da tarde.
            </p>
          )}
          {afternoonTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} label="Noite" />
          {nightTasks?.length === 0 && (
            <p className="text-sm text-textGray">
              Nenhuma tarefa para o período da noite.
            </p>
          )}
          {nightTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
