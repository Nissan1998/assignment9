import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("Category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="mt-16 ">
      <div className="text-center">
        <h1 className=" font-bold text-5xl mb-4">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:flex mx-5 gap-2">
        {category.map((job) => (
          <CategoryCard key={job.id} job={job}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
