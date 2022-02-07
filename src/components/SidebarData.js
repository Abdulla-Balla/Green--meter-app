import { AiFillHome }from 'react-icons/ai'
import { VscGraph, VscSettingsGear } from 'react-icons/vsc'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        className: 'nav-option'
    },
    {
        title: 'History',
        path: '/',
        icon: <VscGraph />,
        className: 'nav-option'
    },
    {
        title: 'Settings',
        path: '/',
        icon: <VscSettingsGear />,
        className: 'nav-option'
    }
]