import { useState } from 'react'
import { AddIcon, TrashIcon } from '../assets/icons'
import AddTaskDialog from './AddTaskDialog'
import Button from './Button'
import { useDeleteAllTasks } from '../hooks/data/use-delete-all-tasks'
import { toast } from 'sonner'

const Header = ({ title, subtitle }) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const { mutate: deleteAllTasks } = useDeleteAllTasks()
  const handleDeleteAllTasks = () => {
    deleteAllTasks(undefined, {
      onSuccess: () => {
        toast.success('Tarefas deletadas com sucesso!')
      },
      onError: () => {
        toast.error('Erro ao deletar tarefas!')
      },
    })
  }

  return (
    <div className="flex justify-between w-full">
      <div>
        <span className="text-xs font-semibold text-primary">{subtitle}</span>
        <h2 className="font-semibold text-xl">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <Button color="ghost" onClick={handleDeleteAllTasks}>
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
  )
}

export default Header
