import React from "react";

const Badge = ({ badge }) => {
  return (
    <div className={badge}>
      {badge && (
        <h5 className="font-primaryFont top-0 left-0 bg-black text-white px-5 py-2 inline-block absolute m-3 ">
          {badge}
        </h5>
      )}
    </div>
  );
};

export default Badge;
