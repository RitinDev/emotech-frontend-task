import React, { useState } from 'react';
import './RightSidebar.css';
import { Input } from 'antd';
import { FolderOutlined, RightOutlined, PlusSquareOutlined, CaretRightFilled, CaretDownOutlined } from '@ant-design/icons';

const RightSidebar = ({ imageList, setImageList, imageIndex, setImageIndex }) => {
    const [directoryPath, setDirectoryPath] = useState('');
    const handleDirectoryChange = (event) => {
        setDirectoryPath(event.target.value);
    }

    const [advancedSettingsClicked, setAdvancedSettingsClicked] = useState(false);
    const handleAdvSettingsChange = () => {
        setAdvancedSettingsClicked(!advancedSettingsClicked);
    }

    // Function to handle the selection of an image from the pictures
    const handleImageSelection = (event) => {
        // Remove css class 'selected-image' from all images
        const images = document.querySelectorAll('.image-gallery-images img');
        images.forEach(image => {
            image.classList.remove('selected-image');
        });
        // Get the index of the image that was clicked
        const index = imageList.indexOf(event.target.src);
        // Set the imageIndex to the index of the image that was clicked
        setImageIndex(index);
        event.target.classList.add('selected-image');
    }

    const handleAddPic = () => {
        // Add a new image to the imageList
        let imgToBeAdded = 'https://images.unsplash.com/photo-1677907564592-7a2880120951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        setImageList([...imageList, imgToBeAdded]);
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
                    <span className='plus-icon' onClick={handleAddPic}><PlusSquareOutlined /></span>
                </div>
                <div className='image-gallery-images'>
                    {/* Loop through imageList and add img elements */}
                    {imageList.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Gallery ${index}`} onClick={handleImageSelection} />
                    ))}
                </div>
            </div>
            <div className='advanced-settings' onClick={handleAdvSettingsChange}>
                <p className='advanced-settings-header'>Advanced Settings</p>
                <span className='advanced-settings-arrow'>
                    {advancedSettingsClicked ? <CaretDownOutlined /> : <CaretRightFilled />}
                </span>
            </div>
            <button className='generate-video-button'>GENERATE VIDEO</button>
        </div>
    )
}

export default RightSidebar