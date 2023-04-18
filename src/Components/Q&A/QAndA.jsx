import React from "react";

const QAndA = ({ q, a }) => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">{q}</div>
        <div className="collapse-content">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
};

export default QAndA;
