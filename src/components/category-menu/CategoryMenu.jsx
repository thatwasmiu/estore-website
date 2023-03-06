import CategoryItem from "../category-item/CategoryItem";

const CategoryMenu = ({ categories }) => (
    <div className="categories-container">
      {categories.map((category) => ( 
        <CategoryItem key={category.id} tag={category.tag}/>
      ))}
    </div>
);

export default CategoryMenu;