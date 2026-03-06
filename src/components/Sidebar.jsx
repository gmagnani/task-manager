import SideBarButton from "./SideBarButton"
import { HomeIcon, TasksIcon } from '../assets/icons'

const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="px-8 py-6 space-y-4">
        <h1 className="text-xl font-semibold text-primary">Task Manager</h1>
        <p>
          Um simples{' '}
          <span className="text-primary">organizador de tarefas</span>
        </p>
      </div>
      <div className="flex flex-col p-2 gap-2">
        <SideBarButton variant="unselected"><HomeIcon/>Inicio</SideBarButton>
        <SideBarButton variant="selected"><TasksIcon/>Minhas Tarefas</SideBarButton>
      </div>
    </div>
  )
}

export default Sidebar
