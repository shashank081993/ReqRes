import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import "./ViewCart.css";
import { deleteItemFromCart } from "../redux/actions/ViewCartAction";
function ViewCart() {
  const cartItems = useSelector((state) => state.cart.cart);

  //to get total proce using dispatch
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteItemFromCart(id));
  };
  console.log(cartItems);
  return (
    <div>
      <Navbar />
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <table border={1} className="cart-table">
          <tr>
            <td>Item</td>
            <td>Price</td>
          </tr>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td key={item.id}>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => deleteItem(item.id)}>delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td> Total price</td>
            <td>{totalPrice}</td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default ViewCart;
