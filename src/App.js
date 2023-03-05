// Static imports
import './App.css'
import RightSidebar from './components/RightSidebar';

// Import components
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app-container">
      <h1>Hello World</h1>
      <Sidebar />
      <RightSidebar />
    </div>
  );
}

export default App;
