import "./CategoryText.css";
const CategoryText = (props) => {
  const { varTitle, varDesc } = props;
  return (
    <div className="category-container">
      <h3>{varTitle}</h3>
      <p>{varDesc}</p>
    </div>
  );
};
export default CategoryText;
