
const CategoryItem = ({ id, tag }) => (
    <div className="category-container" key={id}>
        <div className="category-body-container">
        <h2>{tag}</h2>
        </div>
    </div>
)

export default CategoryItem;