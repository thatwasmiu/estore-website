import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Menu from './pages/menu/Menu';
import './App.css';
import LoginPage from "./pages/login-form/LoginPage.jsx";
import Test from "./pages/test-route/Test.jsx";


const App = () => {

  console.log('test');
  return <>
    <Menu />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element = {<HomePage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </> 
};

export default App;
