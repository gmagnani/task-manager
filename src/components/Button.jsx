const Button = ({ children, variant = 'primary' }) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00adb5] text-white'
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]'
    }
  }
  return (
    <button
      className={`px-3 py-1 text-xs ${getVariantClasses()} rounded-md flex items-center gap-2 hover:opacity-80 transition-opacity`}
    >
      {children}
    </button>
  )
}

export default Button
