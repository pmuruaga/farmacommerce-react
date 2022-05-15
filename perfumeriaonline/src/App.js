// import './App.css';
import './StoreStyles.css';
import Public from './Routes/Public';
import MenuNavigation from './Components/MenuNavigation';
import HeaderSlide from './Components/HeaderSlide';
import { 
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuNavigation />         
        <HeaderSlide />
        <Public />
        <Footer />
      </header>
    </div>
  );
}

export default App;
