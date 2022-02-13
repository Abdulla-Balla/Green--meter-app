import { AiFillHome }from 'react-icons/ai'
import { VscGraph, VscSettingsGear } from 'react-icons/vsc'

export const SidebarData = [
    {
        title: 'Home',
        path: '/live',
        icon: <AiFillHome />,
        className: 'nav-option'
    },
    {
        title: 'History',
        path: '/history',
        icon: <VscGraph />,
        className: 'nav-option'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <VscSettingsGear />,
        className: 'nav-option'
    }
]