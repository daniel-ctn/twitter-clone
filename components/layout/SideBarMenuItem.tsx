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
    <div className="flex items-center space-x-1.5 space-y-1 text-xl ml-4 pl-6 py-1 hover-menu">
      <Icon
        className={`w-7 h-7 font-medium text-gray-600 ${
          active && '!font-bold text-blue-400'
        }`}
      />
      <p
        className={`text-2xl font-medium text-gray-600 pb-1.5 ${
          active && '!font-bold text-blue-400'
        }`}
      >
        {text}
      </p>
    </div>
  )
}

export default SideBarMenuItem
