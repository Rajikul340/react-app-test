import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "@/components/FakeDB/Fakedb";
import Layout from "@/components/Layout/Layout";
import Details from "@/components/Summary/Details";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const SummaryPage = () => {
  const [cart, setCart] = useState([]);
  const route = useRouter().query;
  const id = parseFloat(route.summary);
  //   console.log("data",id);

  const [loadData, setLoadData] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        const newData = data?.filter((singledata) => singledata.score === id);
        setLoadData(newData);
      });
  }, []);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const score in storedCart) {
      const addedProduct = loadData?.find(
        (product) => product.score.toString() === score.toString()
      );
      if (addedProduct) {
        const quantity = storedCart[score.toString()];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [loadData]);

  const handleAddToCart = (selectedProduct) => {
    console.log("selected product", selectedProduct.score.toString());
    let newCart = [];
    const exists = cart.find(
      (product) => product.score.toString() === selectedProduct.score.toString()
    );
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) =>
          product.score.toString() !== selectedProduct.score.toString()
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.score.toString());
    toast.success("book added to book store");
  };

  return (
    <Layout>
      {loadData?.map((details, i) => (
        <Details details={details} key={i} handleAddToCart={handleAddToCart} />
      ))}
    </Layout>
  );
};

export default SummaryPage;
