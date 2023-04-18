import React, { Children } from "react";
import vector from "../../../public/images/Vector.png";
import vector1 from "../../../public/images/Vector1.png";

const DetailsBanner = ({ Children }) => {
  return (
    <div>
      <div className=" relative bg-sky-50">
        <div>
          <img
            className="h-36 absolute -right-0 -top-[190px] lg:-top-[50px]"
            src={vector1}
            alt=""
          />
        </div>
        <div>
          <p className="text-center lg:absolute lg:left-[550px] lg:top-8 text-3xl font-medium ">
            {Children}
          </p>
        </div>
        <div>
          <img className="h-36" src={vector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
