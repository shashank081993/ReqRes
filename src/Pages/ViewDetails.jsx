import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import TableCol from "../components/TableCol/TableCol";
import Button from "../components/Button/Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/actions/ViewCartAction";

//import { addItemToCart } from "../redux/actions/ViewCartAction";

function ViewDetails() {
  const { id } = useParams();
  const [prodDtls, setProdDtls] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  //const productDetails = [];
  useEffect(
    //function
    () => {
      const fetchProductDetails = async () => {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${id}`
          );
          setProdDtls(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          console.log(error);
        }
      };
      fetchProductDetails();
    },
    [id]
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const headers = ["Field", "Value"];
  const data = [
    ["ID", prodDtls.id],
    ["Title", prodDtls.title],
    ["Category", prodDtls.category],
    ["Price", `$${prodDtls.price}`],
    ["Stock", prodDtls.stock],
    ["Rating", prodDtls.rating],
    [
      "Dimensions",
      `${prodDtls.dimensions?.width} x ${prodDtls.dimensions?.height} x ${prodDtls.dimensions?.depth}`,
    ],
    ["Warranty", prodDtls.warrantyInformation],
    ["Shipping", prodDtls.shippingInformation],
  ];
  const addItemTocartC = (ItemDetails) => {
    dispatch(addItemToCart(ItemDetails));
    //console.log(id + "   item added");
  };
  const ItemDetails = {
    pid: prodDtls.id,
    ptitle: prodDtls.title,
    pPrice: prodDtls.price,
  };
  return (
    <div>
      <Navbar />
      <TableCol headers={headers} data={data} />
      <Button text="AddToCart" onClick={() => addItemTocartC(ItemDetails)} />
    </div>
  );
}

export default ViewDetails;
