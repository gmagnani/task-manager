import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const TaskDetails = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()

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
    <div>
      <h1>Detalhes da tarefa {taskId}</h1>
    </div>
  )
}

export default TaskDetails
