import { NavLink } from 'react-router'
import { tv } from 'tailwind-variants'

const SideBarButton = ({ children, href }) => {
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
    <NavLink
      to={href}
      className={({ isActive }) =>
        sidebar({ color: isActive ? 'selected' : 'unselected' })
      }
    >
      {children}
    </NavLink>
  )
}

export default SideBarButton
