import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CreateCard from './pages/CreateCard/CreateCard';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='/create' element={<CreateCard />}/>
      </Routes>
    </div>
  );
}

export default App;
