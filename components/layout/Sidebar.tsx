import { FC } from 'react'
import Image from 'next/image'
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/outline'

import SideBarMenuItem from './SideBarMenuItem'
import logo from 'public/Twitter.webp'
import user from 'public/user.jpg'

const Sidebar: FC = () => {
  return (
    <div className="max-w-[250px] h-screen flex flex-col">
      <Image
        src={logo}
        alt="logo"
        width={900}
        height={324}
        layout="responsive"
      />
      <div className="flex flex-col space-y-1">
        <SideBarMenuItem text="Home" Icon={HomeIcon} />
        <SideBarMenuItem text="Explore" Icon={HashtagIcon} />
        <SideBarMenuItem text="Notification" Icon={BellIcon} />
        <SideBarMenuItem text="Messages" Icon={InboxIcon} active />
        <SideBarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SideBarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SideBarMenuItem text="Profile" Icon={UserIcon} />
        <SideBarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="w-full bg-blue-400 text-white text-xl font-bold rounded-full py-3 my-6 hover-button">
        Tweet
      </button>
      <div className="flex items-center space-x-2 mt-auto mb-3">
        <div className="flex-1">
          <Image
            src={user}
            alt="user's avatar"
            width={640}
            height={640}
            layout="responsive"
            className="rounded-full"
          />
        </div>
        <div className="flex-2 flex flex-col justify-center">
          <h4 className="text-xl font-semibold">User Name</h4>
          <p>twitter@address</p>
        </div>
        <DotsCircleHorizontalIcon className="flex-1 w-7 h-7 text-gray-600" />
      </div>
    </div>
  )
}

export default Sidebar
