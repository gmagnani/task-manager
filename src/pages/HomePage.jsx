import DashboardCards from '../components/DashboardCards'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import TaskItem from '../components/TaskItem'
import { useGetTasks } from '../hooks/data/use-get-tasks'

const HomePage = () => {
  const { data: tasks } = useGetTasks()
  return (
    <div className="flex">
      <Sidebar />
      <div className="py-16 px-8 w-full space-y-6">
        <Header title="Início" subtitle="Início" />
        <DashboardCards />
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-[10px] col-span-2 p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Tarefas</h3>
              <span className="text-sm text-darkGray">
                Resumo das tarefas disponíveis
              </span>
            </div>

            <div className="space-y-3">
              {tasks?.length > 0 ? (
                tasks.map((task) => <TaskItem key={task.id} task={task} />)
              ) : (
                <p className="text-sm text-textGray">
                  Você ainda não tem tarefas!
                </p>
              )}
            </div>
          </div>
          <div className="bg-white rounded-[10px] p-6 flex items-center justify-center">
            <p className="text-darkGray">
              "O segredo de progredir é começar. O segredo de começar é quebrar
              suas tarefas complexas e esmagadoras em pequenas tarefas
              gerenciáveis e começar pela primeira."{' '}
              <span className="font-semibold">— Mark Twain</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
