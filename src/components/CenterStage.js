import './CenterStage.css'

import { CaretLeftFilled } from '@ant-design/icons';
import { Image } from 'antd';


const CenterStage = () => {
    const testImage = "https://images.unsplash.com/photo-1677069955603-26200937faa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"

    return (
        <div className="center-stage">
            <p className="untitled"><CaretLeftFilled /> Untitled</p>
            <div className="center-stage-image-container">
                <Image className='center-stage-image'
                    src={testImage}
                    width='100%' height='100%'
                    style={{ objectFit: 'cover', borderRadius: '12.5px' }}
                    preview={false} />
            </div>
        </div>
    )
}

export default CenterStage;