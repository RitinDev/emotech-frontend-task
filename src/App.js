// Static imports
import './App.css'

// Import React
import { useState } from 'react';

// Import components
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar';
import CenterStage from './components/CenterStage';

function App() {
  const [imageList, setImageList] = useState([
    'https://images.unsplash.com/photo-1422651355218-53453822ebb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80',
    'https://images.unsplash.com/photo-1677651647819-e590284af894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1677597863331-767d47df12e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
    'https://images.unsplash.com/photo-1678039529851-1886cbaceaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
    'https://images.unsplash.com/photo-1643658836530-fbebd479413b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  ]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="app-container">
      {/* <h1>Hello World</h1> */}
      <Sidebar />
      <CenterStage imageList={imageList} setImageList={setImageList} imageIndex={selectedImageIndex} setImageIndex={setSelectedImageIndex} />
      <RightSidebar imageList={imageList} setImageList={setImageList} imageIndex={selectedImageIndex} setImageIndex={setSelectedImageIndex} />
    </div>
  );
}

export default App;
