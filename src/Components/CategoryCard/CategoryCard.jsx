import React from "react";

const CategoryCard = ({ job }) => {
  return (
    <div className="mx-auto mt-10 mb-5 rounded-sm border">
      <div className="border-2 bg-indigo-50 p-12 space-y-5">
        <img className="bg-indigo-200 p-2" src={job.image} alt="" />
        <h3 className="text-2xl font-semibold">{job.title}</h3>
        <p className="text-lg text-gray-500">{job.post}+ jobs Available</p>
      </div>
    </div>
  );
};

export default CategoryCard;
