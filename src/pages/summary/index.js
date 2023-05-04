import React from "react";
import SummaryPage from "./[summary]";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";

const index = () => {
  return (
    <Layout>
      <SummaryPage />
    </Layout>
  );
};

export default index;
