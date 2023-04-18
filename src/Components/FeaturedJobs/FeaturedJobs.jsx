import React, { useEffect, useState } from "react";
import FeaturedJobCard from "../FeaturedJobCard/FeaturedJobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("FeaturedJobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [jobs]);
  const [remaining, setRemaining] = useState(4);
  const handleRemaining = () => {
    setRemaining((previous) => previous + 4);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mx-10">
        {jobs.length &&
          jobs
            ?.slice(0, remaining)
            .map((job) => (
              <FeaturedJobCard key={job.id} job={job}></FeaturedJobCard>
            ))}
      </div>
      <div className="text-center mt-5">
        <button
          onClick={handleRemaining}
          className=" border  w-36 h-12 rounded-md text-white text-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
