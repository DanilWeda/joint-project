import './App.css';
import NewPage from './NewPage/NewPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import SingPage from './SingPage/SingPage';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NewPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/singin' element={<SingPage />} />
        <Route path='*' element={<NewPage />} />
      </Routes>
    </div>
  );
}

export default App;
