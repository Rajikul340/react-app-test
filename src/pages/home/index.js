import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleCard from "@/components/card/SingleCard";
import Layout from "@/components/Layout/Layout";


const HomePage = () => {
  
    const [loadData, setLoadData] = useState(null);


  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setLoadData(data);
      });
  }, []);



 

  return (
    <Layout>
      <Container>
        <Row md={4} className=" ">
          {loadData?.map((item, i) => (
            <SingleCard item={item} key={i} index={i}/>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default HomePage;
