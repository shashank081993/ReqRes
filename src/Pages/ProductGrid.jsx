import ProductCard from "./ProductCard";
import "./ProductGrid.css";

function ProductGrid({ products }) {
  const rows = [];
  console.log("reached prod list place ");
  console.log(products.length);
  for (let i = 0; i < products.length; i += 4) {
    rows.push(products.slice(i, i + 4));
  }

  return (
    <div className="product-grid">
      {rows.map((row, rowIndex) => (
        <div className="product-row" key={rowIndex}>
          {row.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
ProductGrid.propTypes;
export default ProductGrid;
