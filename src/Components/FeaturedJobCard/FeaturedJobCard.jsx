import React from "react";
import { Link } from "react-router-dom";

const FeaturedJobCard = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remote,
    location,
    employmentType,
    salary,
  } = job;
  return (
    <div className="border-2 rounded-md p-5 space-y-5">
      <img className="w-28" src={companyLogo} alt="" />
      <h1 className="text-4xl font-semibold">{jobTitle}</h1>
      <h4>{companyName}</h4>
      <button className="border border-indigo-500 px-4 rounded-md py-1 text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600 font-bold">
        {remote ? "Remote" : "Onsite"}
      </button>
      <button className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600  ml-5 border border-indigo-500  font-bold text-lg px-4 rounded-md py-1">
        {employmentType}
      </button>

      <p>
        <img
          className="inline"
          src={"https://i.ibb.co/9vJNmK6/location.png"}
          alt=""
        />{" "}
        {location}{" "}
        <span className="ml-5">
          {" "}
          <img
            className="inline"
            src={"https://i.ibb.co/WVL0cy9/Frame.png"}
            alt=""
          />{" "}
          Salary :- {salary}
        </span>
      </p>
      <div>
        <Link
          to={`viewDetails/${id}`}
          className=" border  px-4 py-2 rounded-md text-white text-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
