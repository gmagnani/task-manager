import Button from "./Button";
import AddIcon from '../assets/icons/add.svg?react'
import TrashIcon from '../assets/icons/trash.svg?react'

const Tasks = () => {
    return(
        <div className="py-16 px-8 w-full">
           <div className="flex justify-between w-full">
             <div>
                <span className="text-xs font-semibold text-[#00adb5]">Minhas tarefas</span>
                <h2 className="font-semibold text-xl">Minhas Tarefas</h2>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="ghost">Limpar tarefas <TrashIcon/></Button>
                <Button variant="primary">Nova  tarefa <AddIcon/></Button>
            </div>
           </div>
        </div>
    )
}

export default Tasks