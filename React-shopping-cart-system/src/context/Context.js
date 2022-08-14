import { createContext, useContext, useReducer } from "react";
//import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
import data from "../Data"

const Cart = createContext();
//faker.seed(99);
console.log(data.image)
var i=0
const Context = ({ children }) => {
  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   // image: faker.random.image(),
  //   image: data[0].image,
  //   inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  // }));
//console.log(products)
var products=[]
for(var i=0;i<14;i++){
  products[i]=data[i]
}
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
