import { useEffect, useState } from 'react'
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

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const morningTasks = tasks.filter((task) => task.time === 'morning')
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon')
  const nightTasks = tasks.filter((task) => task.time === 'night')

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'GET',
      })

      const tasks = await response.json()
      setTasks(tasks)
    }

    getTasks()
  }, [])

  const handleClearTasks = () => {
    setTasks([])
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
    setTasks(updatedTasks)
  }

  const handleAddTask = async (newTask) => {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
    })
    if (!response.ok) {
      toast.error('Erro ao adicionar tarefa!')
      return
    }

    setTasks([...tasks, newTask])
    toast.success('Tarefa adicionada com sucesso!')
  }

  const onDeleteSuccess = async (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
    toast.success('Tarefa deletada com sucesso!')
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
            onAddTask={handleAddTask}
          />
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} label="Manhã" />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
              onDeleteSuccess={onDeleteSuccess}
            />
          ))}
        </div>
        <div className="space-y-3 my-6">
          <TasksSeparator icon={<SunCloudIcon />} label="Tarde" />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
              onDeleteSuccess={onDeleteSuccess}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} label="Noite" />
          {nightTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
              onDeleteSuccess={onDeleteSuccess}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
