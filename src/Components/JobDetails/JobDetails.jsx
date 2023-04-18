import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = ({ job }) => {
  const {
    id,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    location,
    remote,
  } = job;

  //   const { email, phone } = contactInformation;
  //contactInformation,
  return (
    <div className="md:flex justify-center align-middle items-center w-full mt-10 mb-16">
      <div className="space-y-5">
        <h3>
          <span className="font-bold">Job Description:-</span>
          <ul>{jobDescription}</ul>
        </h3>
        <h3>
          <span className="font-bold">Job Responsibility :-</span>
          <ul>{jobResponsibility}</ul>
        </h3>
        <h3>
          <span className="font-bold">Educational Requirements:-</span>
          <ul>{educationalRequirements}</ul>
        </h3>
        <h3>
          <span className="font-bold">Experiences:-</span>
          <ul>{experiences}</ul>
        </h3>
      </div>
      <div>
        <div className="w-96 p-10 bg-indigo-100 ml-5 rounded-lg">
          <h1 className="font-bold">Job Details</h1>
          <span>---------------------------------------------</span>
          <p>
            <span className="flex items-center">
              <AiOutlineDollarCircle />
              <span className="font-bold mr-2 ml-1">Salary: </span> {salary}
            </span>
          </p>
          <p>
            <span className="flex items-center">
              <AiOutlineCalendar />
              <span className="font-bold mr-2 ml-1">JobTitle: </span> {jobTitle}
            </span>
          </p>
          <h3 className="font-bold mt-5">Contact information</h3>
          <span>---------------------------------------------</span>
          <p>
            <span className="flex items-center">
              <BsTelephoneForward />
              <span className="font-semibold ml-2">Phone:- </span>{" "}
              {job?.contactInformation?.phone}
            </span>
          </p>
          <p>
            <span className="flex items-center">
              <HiOutlineMailOpen />
              <span className="font-semibold ml-2">Email:- </span>{" "}
              {job?.contactInformation?.email}
            </span>
          </p>
          <p>
            <span className="flex items-center">
              <CiLocationOn />
              <span className="font-semibold ml-2">Location:- </span> {location}
            </span>
          </p>
        </div>
        <button
          onClick={() => addToDb(id)}
          className=" border  w-96 px-0 mt-5 mx-5 h-12 rounded-md text-white text-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
