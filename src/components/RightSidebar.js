import React, { useState } from 'react';
import './RightSidebar.css';
import { Input } from 'antd';
import { FolderOutlined, RightOutlined } from '@ant-design/icons';

const RightSidebar = () => {
    const [directoryPath, setDirectoryPath] = useState('');

    const handleDirectoryChange = (event) => {
        setDirectoryPath(event.target.value);
    }
    return (
        <div className="right-sidebar">
            <p className='output-settings-header'>Output Settings</p>
            <div className="directory-location">
                <p className='directory-location-header'>Location</p>
                <div className="file-location-input">
                    <span className="input-prefix"><FolderOutlined style={{background: '#e3ecf1'}}/></span>
                    <Input
                        style={{ backgroundColor: '#e3ecf1' }}
                        placeholder="Choose Directory"
                        value={directoryPath}
                        onChange={handleDirectoryChange}
                    />
                    <span className="input-suffix"><RightOutlined style={{background: '#e3ecf1'}} /></span>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar