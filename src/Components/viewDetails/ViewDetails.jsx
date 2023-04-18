import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import JobDetails from "../JobDetails/JobDetails";

const ViewDetails = () => {
  const { detailsId } = useParams();

  const [job, setJobDetail] = useState({});
  // console.log(job);

  const jobs = useLoaderData();
  useEffect(() => {
    const exist = jobs.find((job) => job.id == detailsId);
    setJobDetail(exist);
  }, [detailsId]);

  return (
    <div className="mx-5 -mt-2">
      <div>
        <DetailsBanner Children={"Job Details"}></DetailsBanner>
      </div>
      <div>
        <JobDetails job={job}></JobDetails>
      </div>
    </div>
  );
};

export default ViewDetails;
