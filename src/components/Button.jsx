import { tv } from 'tailwind-variants'

const Button = ({
  children,
  size = 'small',
  color = 'primary',
  className,
  ...props
}) => {
  const button = tv({
    base: 'px-3 justify-center cursor-pointer rounded-md flex items-center gap-2 hover:opacity-80 transition',
    variants: {
      color: {
        primary: 'bg-primary text-white',
        ghost: 'bg-transparent text-darkGray',
        secondary: 'bg-background text-darkBlue',
        danger: 'bg-danger text-white',
      },
      size: {
        small: 'text-xs py-1',
        large: 'text-sm py-2',
      },
      disable: {
        true: 'opacity-50 cursor-not-allowed hover:opacity-50',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'small',
    },
  })

  return (
    <button
      className={button({ color, size, disable: props.disabled, className })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
