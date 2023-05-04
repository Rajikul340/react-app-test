import Layout from "@/components/Layout/Layout";
import Details from "@/components/Summary/Details";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SummaryPage = () => {
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

  return (
    <Layout>
      {loadData?.map((details, i) => (
        <Details details={details} key={i} />
      ))}
    </Layout>
  );
};

export default SummaryPage;
