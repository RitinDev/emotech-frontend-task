import './CenterStage.css'
import MicImage from '../images/mic.png'

import { useState } from 'react';
import { CaretLeftFilled, CheckCircleFilled, AudioOutlined, FontColorsOutlined, UploadOutlined } from '@ant-design/icons';
import { Image, Radio, Space, Input } from 'antd';

const { TextArea } = Input;

const CenterStage = ({ imageList, setImageList, imageIndex, setImageIndex }) => {

    const [value, setValue] = useState(1);

    const onChange = e => {
        setValue(e.target.value);
    };

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        color: '#000000',
        marginBottom: '10px',
        fontSize: '1.2rem',
    };

    const selectedRadioStyle = {
        ...radioStyle,
        color: '#3cd0b2',
        fontWeight: 'bold',
    };


    return (
        <div className="center-stage">
            <p className="untitled"><CaretLeftFilled /> Untitled</p>
            <div className="center-stage-image-container">
                <Image className='center-stage-background'
                    src={imageList[imageIndex]}
                    width='100%' height='100%'
                    style={{
                        objectFit: 'cover',
                        borderRadius: '12.5px',
                        filter: 'opacity(0.75)',
                    }}
                    preview={false} />
                <Image className='center-stage-mic'
                    src={MicImage}
                    width='20%' height='90%'
                    style={{
                        position: 'absolute',
                        zIndex: '1',
                        bottom: '100%', left: '12.5%',
                        objectFit: 'cover',
                        filter: 'contrast(0.9)',
                    }}
                    preview={false} />
            </div>
            <div className='center-stage-input-blocks'>
                <div className='input-block one'>
                    <span className='input-block-title one'><CheckCircleFilled className='check' />Mode</span>
                    <Radio.Group defaultValue="a" onChange={onChange} value={value}>
                        <Space direction="vertical" style={{ alignItems: 'flex-start', gap: '15px' }}>
                            <Radio style={value === 'a' ? selectedRadioStyle : radioStyle} value="a"><AudioOutlined className='check' />Audio + Text</Radio>
                            <Radio style={value === 'b' ? selectedRadioStyle : radioStyle} value="b"><FontColorsOutlined className='check' />Text</Radio>
                            <Radio style={value === 'c' ? selectedRadioStyle : radioStyle} value="c"><AudioOutlined className='check' />Audio</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className='input-block two'>
                    <span className='input-block-title two'><CheckCircleFilled className='check' />Audio Input<UploadOutlined className='upload-button' /></span>

                </div>
                <div className='input-block three'>
                    <span className='input-block-title three'><CheckCircleFilled className='check' />Text Input <UploadOutlined className='upload-button' /></span>
                    <TextArea
                        showCount
                        maxLength={300}
                        autoSize={{ minRows: 4, maxRows: 8 }}
                        style={{ width: '100%', minHeight: '100px' }}
                        placeholder="Type your text here..."
                    />
                </div>
            </div>
        </div>
    )
}

export default CenterStage;