import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react' 
import { SidebarData } from './SidebarData.js'


function Sidebar(){
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="sidebar">
                <Link to="#" className='menu'>
                    <FiMenu onClick={toggleSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, idx)=>{
                        return (
                            <li key={idx} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Sidebar;