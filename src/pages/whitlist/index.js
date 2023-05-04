import {
  deleteShoppingCart,
  getStoredCart,
  removeFromDb,
} from "@/components/FakeDB/Fakedb";
import Layout from "@/components/Layout/Layout";
import WhitList from "@/components/WhitList/WhitList";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const WhitListPage = () => {

  const [loadData, setLoadData] = useState(null);

   console.log('load data', loadData);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        // const newData = data?.filter((singledata) => singledata.score === id);
        setLoadData(data);
      });
  }, []);

 
  const getCart = getStoredCart();
  const savedCart = [];

   console.log('get cart', getCart);

  for (const score in getCart) {
    const addedProduct = loadData?.find((product) => product.score.toString() === score.toString());
    if (addedProduct) {
      const quantity = savedCart[score.toString()];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
      console.log('save cart data',savedCart);
    }
  }


  const [cart, setCart] = useState(savedCart);
  console.log('cart data',cart);

  const handleDetails = (id) => {
    const remaining = cart.filter((product) => product.score.toString() !== id.toString());
    setCart(remaining);
    removeFromDb(id.toString());
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <Layout>
    <Container>
      <Row md={4} className=" ">
        {cart?.map((item, i) => (
          <WhitList item={item} key={i} index={i} handleDetails={handleDetails}/>
        ))}
      </Row>
    </Container>
  </Layout>
  );
};

export default WhitListPage;
