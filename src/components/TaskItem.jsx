const TaskItem = ({ task }) => {
    const getStatusClasses = () => {
        switch (task.status) {
            case 'pending':
                return 'bg-[#35383e]/10 text-[#35383e]'
            case 'in_progress':
                return 'bg-[#ffaa04]/10 text-[#ffaa04]'
            case 'done':
                return 'bg-[#00adb5]/10 text-[#00adb5]'
            default:
                return ''
        }
    }
    return(
        <div className={`px-4 py-3 flex items-center text-sm gap-2 rounded-lg ${getStatusClasses()}`}>
            {task.title}
        </div>
    )
}

export default TaskItem;