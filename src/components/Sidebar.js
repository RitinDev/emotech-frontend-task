// Static imports
import './Sidebar.css';
import viteLogo from '../images/vite.svg';

// Import useState hook from React
import { useState } from 'react';

// Import icons from Ant Design
import { HomeOutlined, AppstoreAddOutlined, ClockCircleOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = () => {
    const menuItems = [
        { icon: <HomeOutlined /> },
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
            <div className='sidebar-settings'>
                <SettingOutlined />
            </div>
        </div>
    );
}

export default Sidebar;