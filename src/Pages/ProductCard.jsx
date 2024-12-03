import "./ProductCard.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, image, price }) => {
  const nav = useNavigate();
  const viewDetails = (id) => {
    nav(`/viewdetails/${id}`);
  };
  return (
    <div className="product-card">
      <div className="add-cart"></div>
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <h3 className="product-title">
        <FaIndianRupeeSign />
        {price}
      </h3>
      <button onClick={() => viewDetails(id)}>view details</button>
    </div>
  );
};
ProductCard.propTypes;
export default ProductCard;
