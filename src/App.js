import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './screens/LoginPage/LoginPage'
import SingUpPage from './screens/SingUpPage/SingUpPage'
import NewPage from './screens/NewPage/NewPage'
import styled from 'styled-components'

const AppWrapper = styled.div`
  box-sizing: border-box;
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30vh;
`

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<NewPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/singup' element={<SingUpPage />} />
        <Route path='*' element={<NewPage />} />
      </Routes>
    </AppWrapper>
  )
}

export default App
