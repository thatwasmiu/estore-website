import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import Menu from './routes/menu/Menu';
import './App.css';
import LoginPage from "./routes/login-form/LoginPage.jsx";

const App = () => {

  console.log('test');
  return <>
    {/*<Menu />*/}
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element = {<HomePage />} />
    </Routes>
  </> 
};

export default App;
