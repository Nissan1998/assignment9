import React from "react";
import Lottie from "lottie-react";
import Error from "../../assets/43391-404-error-page-not-found-confused-robot.json";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-96">
        <Lottie animationData={Error} loop={true}></Lottie>
      </div>
      <h3 className="text-5xl">{error?.message}</h3>
    </div>
  );
};

export default ErrorPage;
