import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import './App.css';
import LoginPage from "./pages/login-form/LoginPage.jsx";
import Test from "./pages/test-route/Test.jsx";
import NavBar from './pages/nav-bar/NavBar';


const App = () => {

  console.log('test');
  return <>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element = {<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
        <Route path="/test" element={<Test />} />
    </Routes>
  </> 
};

export default App;
