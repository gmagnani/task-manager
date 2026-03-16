import { tv } from 'tailwind-variants'

const SideBarButton = ({ children, color, href }) => {
  const sidebar = tv({
    base: 'flex items-center gap-2 px-6 py-3 rounded-lg',
    variants: {
      color: {
        selected: 'text-primary bg-primary/15',
        unselected: 'text-darkBlue',
      },
    },
    defaultVariants: {
      color: 'unselected',
    },
  })
  return (
    <a href={href} className={sidebar({ color })}>
      {children}
    </a>
  )
}

export default SideBarButton
