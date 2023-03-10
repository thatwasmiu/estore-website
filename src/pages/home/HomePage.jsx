import { useEffect, useState } from 'react';
import CategoryMenu from "../../components/category-menu/CategoryMenu";

const HomePage = () => {
    const [categoryList, setCategories] = useState([]);
  
    useEffect(() => {
      fetch('./categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
    }, []);

    return <CategoryMenu categories={categoryList} />;
}    

export default HomePage;