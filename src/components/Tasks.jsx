import { SunIcon, SunCloudIcon, MoonIcon } from '../assets/icons'
import TasksSeparator from './TasksSeparator'
import TaskItem from './TaskItem'
import { useGetTasks } from '../hooks/data/use-get-tasks'
import Header from './Header'

const Tasks = () => {
  const { data: tasks } = useGetTasks()

  const morningTasks = tasks?.filter((task) => task.time === 'morning')
  const afternoonTasks = tasks?.filter((task) => task.time === 'afternoon')
  const nightTasks = tasks?.filter((task) => task.time === 'night')

  

  return (
    <div className="py-16 px-8 w-full space-y-6">
      <Header title="Minhas tarefas" subtitle="Minhas tarefas" />
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
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
