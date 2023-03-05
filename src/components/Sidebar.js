import './Sidebar.css';
import viteLogo from '../images/vite.svg';

import { HomeOutlined, AppstoreAddOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img src={viteLogo} alt='Vite Logo' className='vite-logo' />
            <ul className='sidebar-menu'>
                <li className='sidebar-menu-item'>
                    <HomeOutlined />
                </li>
                <li className='sidebar-menu-item'>
                    <AppstoreAddOutlined />
                </li>
                <li className='sidebar-menu-item'>
                    <ClockCircleOutlined />
                </li>
                <li className='sidebar-menu-item'>
                    <UserOutlined />
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;