import { FC, ComponentProps } from 'react'

interface SideBarItemProps {
  text: string
  Icon: (props: ComponentProps<'svg'>) => JSX.Element
}

const SideBarMenuItem: FC<SideBarItemProps> = ({ text, Icon }) => {
  return (
    <div className="flex items-center space-x-1.5 space-y-1 text-xl ml-8">
      <Icon className="w-7 h-7 text-gray-600" />
      <p className="text-2xl font-semibold text-gray-600 pb-1.5">{text}</p>
    </div>
  )
}

export default SideBarMenuItem
