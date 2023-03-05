import './Sidebar.css';
import viteLogo from '../images/vite.svg';

import { useState } from 'react';

import { HomeOutlined, AppstoreAddOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

const Sidebar = () => {
    const menuItems = [
        { icon: <HomeOutlined />},
        { icon: <AppstoreAddOutlined /> },
        { icon: <ClockCircleOutlined /> },
        { icon: <UserOutlined /> },
    ];
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div className='sidebar'>
            <img src={viteLogo} alt='Vite Logo' className='vite-logo' />
            <ul className='sidebar-menu'>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`sidebar-menu-item ${activeItem === index ? 'active' : ''}`}
                        onClick={() => setActiveItem(index)}
                    >
                        {item.icon}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Sidebar;