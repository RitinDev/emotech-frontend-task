// Static imports
import './App.css'

// Import components
import Sidebar from './components/Sidebar'
import RightSidebar from './components/RightSidebar';
import CenterStage from './components/CenterStage';

function App() {
  return (
    <div className="app-container">
      {/* <h1>Hello World</h1> */}
      <Sidebar />
      <CenterStage />
      <RightSidebar />
    </div>
  );
}

export default App;
