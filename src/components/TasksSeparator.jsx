const TasksSeparator = ({ icon, label }) => {
  return (
    <div className="flex gap-3 pb-1 border-b border-solid border-[#f4f4f5]">
      {icon}
      <p className="text-primary text-sm font-semibold">{label}</p>
    </div>
  )
}

export default TasksSeparator
