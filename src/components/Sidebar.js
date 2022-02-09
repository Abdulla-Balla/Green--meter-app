import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react' 
import { SidebarData } from './SidebarData.js'
import { IconContext } from 'react-icons'

function Sidebar(){
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className="sidebar">
                    <Link to="#" className='menu'>
                        <FiMenu onClick={toggleSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={toggleSidebar}>
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