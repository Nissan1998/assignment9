import React, { useState } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../Category/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Main = () => {
  // console.log(jobs);
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Main;
