import { useState } from 'react'
import Button from './Button'
import AddIcon from '../assets/icons/add.svg?react'
import TrashIcon from '../assets/icons/trash.svg?react'
import SunIcon from '../assets/icons/sun.svg?react'
import MoonIcon from '../assets/icons/moon.svg?react'
import SunCloudIcon from '../assets/icons/cloud-sun.svg?react'
import TasksSeparator from './TasksSeparator'
import TaskItem from './TaskItem'

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Tarefa 1',
      description: 'Descrição da tarefa 1',
      time: 'morning',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Tarefa 2',
      description: 'Descrição da tarefa 2',
      time: 'afternoon',
      status: 'done',
    },
    {
      id: 3,
      title: 'Tarefa 3',
      description: 'Descrição da tarefa 3',
      time: 'night',
      status: 'pending',
    },
    {
      id: 4,
      title: 'Tarefa 4',
      description: 'Descrição da tarefa 4',
      time: 'morning',
      status: 'in_progress',
    },
    {
      id: 5,
      title: 'Tarefa 5',
      description: 'Descrição da tarefa 5',
      time: 'afternoon',
      status: 'pending',
    },
    {
      id: 6,
      title: 'Tarefa 6',
      description: 'Descrição da tarefa 6',
      time: 'night',
      status: 'done',
    },
  ])

  const morningTasks = tasks.filter((task) => task.time === 'morning')
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon')
  const nightTasks = tasks.filter((task) => task.time === 'night')
  return (
    <div className="py-16 px-8 w-full">
      <div className="flex justify-between w-full">
        <div>
          <span className="text-xs font-semibold text-[#00adb5]">
            Minhas tarefas
          </span>
          <h2 className="font-semibold text-xl">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas <TrashIcon />
          </Button>
          <Button variant="primary">
            Nova tarefa <AddIcon />
          </Button>
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl">
        <div className="space-y-3">
          <TasksSeparator icon={<SunIcon />} label="Manhã" />
          {morningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="space-y-3 my-6">
          <TasksSeparator icon={<SunCloudIcon />} label="Tarde" />
          {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator icon={<MoonIcon />} label="Noite" />
          {nightTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
