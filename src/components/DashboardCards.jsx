import {
  LoaderIcon,
  Tasks2Icon,
  TasksIcon,
} from '../assets/icons'
import DashboardCard from '../components/DashboardCard'
import { useGetTasks } from '../hooks/data/use-get-tasks'

const DashboardCards = () => {
  const { data: tasks } = useGetTasks()

  const availableTasks = tasks?.filter((task) => task.status !== 'done').length
  const completedTasks = tasks?.filter((task) => task.status === 'done').length
  const inProgressTasks = tasks?.filter(
    (task) => task.status === 'in_progress'
  ).length
  return (
    <div className="grid grid-cols-4 gap-9">
      <DashboardCard
        icon={<Tasks2Icon />}
        mainText={tasks?.length}
        secondaryText="Tarefas totais"
      />
      <DashboardCard
        icon={<LoaderIcon />}
        mainText={availableTasks}
        secondaryText="Tarefas disponiveis"
      />
      <DashboardCard
        icon={<LoaderIcon />}
        mainText={inProgressTasks}
        secondaryText="Tarefas em andamento"
      />
      <DashboardCard
        icon={<TasksIcon />}
        mainText={completedTasks}
        secondaryText="Tarefas concluídas"
      />
    </div>
  )
}

export default DashboardCards
