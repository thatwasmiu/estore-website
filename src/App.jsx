import { useEffect, useState } from 'react';
import CategoryMenu from "./components/category-menu/CategoryMenu"
import { Route, Routes } from 'react-router-dom';


const App = () => {
  const [categoryList, setCategories] = useState([]);

  useEffect(() => {
    fetch('./categories.json')
    .then((res) => res.json())
    .then((data) => setCategories(data.categories));
  }, []);

  console.log('test');
  return <>
    <Routes>
      <Route path="/" element = {<CategoryMenu categories={categoryList}/>} />
    </Routes>
  </> 
};

export default App;
