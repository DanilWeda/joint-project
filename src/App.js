import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './screens/LoginPage/LoginPage';
import SignPage from './screens/SignPage/SignPage';
import NewPage from './screens/NewPage/NewPage';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NewPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/singin' element={<SignPage />} />
        <Route path='/app' element={<SignPage />} />
        <Route path='*' element={<NewPage />} />
      </Routes>
    </div>
  );
}

export default App;
