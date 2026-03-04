import CheckIcon from '../assets/icons/check.svg?react'
import LoaderIcon from '../assets/icons/loader.svg?react'
import DetailIcon from '../assets/icons/details.svg?react'

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
  return (
    <div
      className={`px-4 py-3 justify-between flex items-center text-sm gap-2 rounded-lg ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
              checked={task.status === 'done'}
            className="absolute opacity-0 w-full h-full cursor-pointer"
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && <LoaderIcon className="animate-spin" />}
        </label>
        {task.title}
      </div>
      <a href="#" className="text-[#00adb5] hover:text-[#00adb5]/80">
        <DetailIcon />
      </a>
    </div>
  )
}

export default TaskItem
