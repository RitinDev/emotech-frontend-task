import React, { useState } from 'react';
import './RightSidebar.css';
import { Input } from 'antd';
import { FolderOutlined, RightOutlined, PlusSquareOutlined, CaretDownOutlined } from '@ant-design/icons';

const RightSidebar = () => {
    const testImage = "https://images.unsplash.com/photo-1677069955603-26200937faa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"

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
                    <span className="input-prefix"><FolderOutlined style={{ background: '#e3ecf1' }} /></span>
                    <Input
                        style={{ backgroundColor: '#e3ecf1' }}
                        placeholder="Choose Directory"
                        value={directoryPath}
                        onChange={handleDirectoryChange}
                    />
                    <span className="input-suffix"><RightOutlined style={{ background: '#e3ecf1' }} /></span>
                </div>
            </div>
            <div className="image-gallery">
                <div className='image-gallery-header'>
                    <p>Picture</p>
                    <span className='plus-icon'><PlusSquareOutlined /></span>
                </div>
                <div className='image-gallery-images'>
                    <img src={testImage} alt="test" />
                    <img src={testImage} alt="test" />
                    <img src={testImage} alt="test" />
                    <img src={testImage} alt="test" />
                    <img src={testImage} alt="test" />
                </div>
            </div>
            <div className='advanced-settings'>
                <p className='advanced-settings-header'>Advanced Settings</p>
                <span className='down-arrow'><CaretDownOutlined /></span>
            </div>
            <button className='generate-video-button'>GENERATE VIDEO</button>
        </div>
    )
}

export default RightSidebar