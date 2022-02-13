import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { SidebarData } from './SidebarData.js';
import { IconContext } from 'react-icons';
import './Sidebar.css'

function Sidebar(){
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{color:'#000'}}>
                <div className="sidebar">
                    <Link to="#" className='menu'>
                        <FiMenu onClick={toggleSidebar} size={30}/>
                    </Link>
                    <h1 className='title'>Aduno's House CO2 Monitoring App</h1>
                </div>
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={toggleSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiOutlineClose size={30}/>
                            </Link>
                        </li>
                        {SidebarData.map((item, idx)=>{
                            return (
                                <li key={idx} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className='nav-option-text'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;