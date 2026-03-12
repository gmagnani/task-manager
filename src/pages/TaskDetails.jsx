import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Sidebar from '../components/Sidebar'
import { ArrowLeftIcon, ChevronRightIcon, TrashIcon } from '../assets/icons'
import Button from '../components/Button'
import Input from '../components/Input'
import SelectTime from '../components/SelectTime'

const TaskDetails = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    const getTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'GET',
      })

      const task = await response.json()
      setTask(task)
    }

    getTask()
  }, [taskId])

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
              <span className="text-textGray cursor-pointer" onClick={handleBackClick}>Minhas tarefas</span>{' '}
              <ChevronRightIcon className="text-textGray" />{' '}
              <span className="text-primary font-semibold">{task?.title}</span>
            </div>
            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>

          <div>
            <Button className="h-fit self-end" color="danger">
              <TrashIcon /> Deletar tarefa
            </Button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl space-y-6">
          <div>
            <Input id="title" label="Título" value={task?.title} />
          </div>
          <div>
            <SelectTime id="time" label="Horário" value={task?.time} />
          </div>
          <div>
            <Input
              id="description"
              label="Descrição"
              value={task?.description}
            />
          </div>
        </div>
        <div className='flex justify-end w-full gap-3'>
            <Button color="secondary" size='large'>Cancelar</Button>
            <Button size='large'>Salvar</Button>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails
