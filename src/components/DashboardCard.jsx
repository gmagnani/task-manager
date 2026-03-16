const DashboardCard = ({ icon, mainText, secondaryText }) => {
  return (
    <div className="h-37.5 bg-white rounded-[10px] flex flex-col items-center justify-center gap-1">
      <div className="flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <p className="font-semibold text-darkBlue text-2xl">{mainText}</p>
      </div>
      <p className="text-darkBlue text-center">{secondaryText}</p>
    </div>
  )
}

export default DashboardCard
