import React, { useEffect, useState } from "react";
import { getAppliedJob } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedJobCart from "../AppliedJobCart/AppliedJobCart";
import DetailsBanner from "../DetailsBanner/DetailsBanner";

const AppliedJob = () => {
  const allJobs = useLoaderData();
  const storedJob = getAppliedJob();
  const [remotedJob, setJob] = useState([]);
  const [isRemote, setIsRemote] = useState(false);
  const [isOnsite, setIsOnsite] = useState(false);

  console.log(remotedJob);

  const jobStore = [];
  for (const id in storedJob) {
    const exist = allJobs.find((job) => job.id === id);
    if (exist) {
      jobStore.push(exist);
    }
  }

  const handleRemoteJob = (remote) => {
    if (remote) {
      const filterJob = jobStore?.filter((job) => job.remote === remote);
      setJob(filterJob);
      setIsRemote(true);
    } else {
      const filterJob = jobStore?.filter((job) => job.remote === remote);
      setJob(filterJob);
      setIsOnsite(true);
    }
  };
  return (
    <div>
      <div className="mx-5">
        <DetailsBanner Children={"Applied Jobs"}></DetailsBanner>
      </div>
      <div className="flex justify-end mr-44 mt-5">
        <ul className="menu menu-horizontal px-1 border rounded-md">
          <li tabIndex={0}>
            <a>
              Sort By
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a onClick={() => handleRemoteJob(true)}>Remote</a>
              </li>
              <li>
                <a onClick={() => handleRemoteJob(false)}>Onsite</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {!isRemote && !isOnsite ? (
        <div>
          {jobStore.map((job) => (
            <AppliedJobCart key={job.id} job={job}></AppliedJobCart>
          ))}
        </div>
      ) : (
        <div>
          {remotedJob.map((job) => (
            <AppliedJobCart key={job.id} job={job}></AppliedJobCart>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJob;
