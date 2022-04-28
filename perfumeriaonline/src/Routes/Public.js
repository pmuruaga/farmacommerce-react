import HomePage from '../Pages/HomePage';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import ProductDetailsPage from '../Pages/ProductDetailsPage';
import NotFoundPage from '../Pages/NotFoundPage';
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function Public() {
  return (   
        <Routes>            
            <Route path="/" element={<HomePage />} /> 
            <Route path='/home' element={<Navigate to="/" />} />     
            <Route path="/registro" element={<RegisterPage />} />              
            <Route path="/login" element={<LoginPage />} />                        
            <Route path="/detalle/:id" element={<ProductDetailsPage />} />                                      
            <Route path="*" element={<NotFoundPage />} />                                    
        </Routes>
  );
}

export default Public;
