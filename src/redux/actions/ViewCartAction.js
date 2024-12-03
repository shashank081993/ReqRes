// i want to add items to cart
export const addItemToCart = (ItemDetails) => {
  return {
    type: "ADD-TO-CART",
    payload: {
      id: ItemDetails.pid,
      title: ItemDetails.ptitle,
      price: ItemDetails.pPrice,
    },
  };
};

export const deleteItemFromCart = (pid) => {
  console.log("id to be delete:" + pid);
  return {
    type: "DELETE-ITEM",
    payload: pid,
  };
};
// Delete item from cart

// export const deleteItemFromCart = (id) => {
//   return {
//     type: "Delete-item-From",
//     payload: id,
//   };
// };

// export const viewCart = () => {
//   return {
//     type: "VIEW-CART-DETAILS",
//   };
// };
