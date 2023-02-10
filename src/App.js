import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CreateCard from './pages/CreateCard/CreateCard';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ShopPage from './pages/ShopPage/ShopPage';
import SinglePage from './pages/SinglePage/SinglePage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/create' element={<CreateCard />} />
        <Route path='/reg' element={<RegisterPage />} />
        <Route path='/product/:id' element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
