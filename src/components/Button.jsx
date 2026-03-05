const Button = ({ children, size = 'small' ,variant = 'primary', ...props}) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00adb5] text-white'
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]'
    }
    if(variant === 'secondary'){
      return 'bg-[#f0f0f0] text-[#35383e]'
    }
  }

  const getSizeClasses = () => {
    if (size === 'small') {
      return 'text-xs py-1'
    }
    if(size === 'large'){
      return 'text-sm py-2 w-full'
    }
  }
  return (
    <button
      className={`px-3 ${getVariantClasses()} ${getSizeClasses()} justify-center cursor-pointer rounded-md flex items-center gap-2 hover:opacity-80 transition-opacity`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
