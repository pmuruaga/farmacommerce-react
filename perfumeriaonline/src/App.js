import './App.css';
import Public from './Routes/Public';
import MenuNavigation from './Components/MenuNavigation';
import { 
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuNavigation />          
        <Public />
      </header>
    </div>
  );
}

export default App;
