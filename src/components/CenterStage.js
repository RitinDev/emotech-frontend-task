import './CenterStage.css'
import MicImage from '../images/mic.png'

import { CaretLeftFilled } from '@ant-design/icons';
import { Image } from 'antd';


const CenterStage = () => {
    const testImage = "https://images.unsplash.com/photo-1677069955603-26200937faa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"

    return (
        <div className="center-stage">
            <p className="untitled"><CaretLeftFilled /> Untitled</p>
            <div className="center-stage-image-container">
                <Image className='center-stage-background'
                    src={testImage}
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
                    <p className='input-block-title'>Title</p>
                </div>
                <div className='input-block two'>
                    <p className='input-block-title'>Description</p>
                </div>
                <div className='input-block three'>
                    <p className='input-block-title'>Tags</p>
                </div>
            </div>
        </div>
    )
}

export default CenterStage;