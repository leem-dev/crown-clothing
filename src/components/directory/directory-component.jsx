import CategoryItem from "../category-item/category-component";

import "./directory-component.css";

const Directory = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
