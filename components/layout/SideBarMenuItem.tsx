import { FC, ComponentProps } from 'react'

interface SideBarItemProps {
  text: string
  Icon: (props: ComponentProps<'svg'>) => JSX.Element
  active?: boolean
}

const SideBarMenuItem: FC<SideBarItemProps> = ({
  text,
  Icon,
  active = false,
}) => {
  return (
    <div className="flex items-center space-x-2 space-y-1 text-xl pl-5 py-1 hover-menu">
      <Icon
        className={`w-6 h-6 font-medium text-gray-600 ${
          active && 'text-blue-400'
        }`}
      />
      <p
        className={`text-xl font-medium text-gray-600 pb-1 ${
          active && 'text-blue-400'
        }`}
      >
        {text}
      </p>
    </div>
  )
}

export default SideBarMenuItem
