import React from "react";
import { Link } from "react-router-dom";

const AppliedJobCart = ({ job }) => {
  const {
    id,
    companyName,
    companyLogo,
    jobTitle,
    remote,
    location,
    salary,
    employmentType,
  } = job;
  return (
    <div>
      <div className="md:flex justify-between w-[1000px] h-72  mx-auto mt-10 align-middle items-center border p-2 pt-7">
        <div className="bg-[#F4F4F4] w-[240px] h-[240px] md:flex flex-col justify-center items-center mb-5">
          <img className="w-28" src={companyLogo} alt="" />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{jobTitle}</h3>
          <p className="text-xl font-semibold text-slate-500">{companyName}</p>
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
        </div>
        <div>
          <Link
            to={`../viewDetails/${id}`}
            className=" border  px-4 py-2 rounded-md text-white text-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCart;
