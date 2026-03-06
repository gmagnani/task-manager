const Button = ({ children, size = 'small' ,variant = 'primary', ...props}) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-primary text-white'
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-darkGray'
    }
    if(variant === 'secondary'){
      return 'bg-background text-darkBlue'
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
