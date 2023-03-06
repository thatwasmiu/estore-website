import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import Menu from './routes/menu/Menu';
import './App.css';

const App = () => {

  console.log('test');
  return <>
    <Menu />
    <Routes>
      <Route path="/" element = {<HomePage />} />
    </Routes>
  </> 
};

export default App;
