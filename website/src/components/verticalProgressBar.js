"use client";
import { useScrollPercentage } from "react-scroll-percentage";

const VerticalProgressBar = (props) => {
  const [ref, percentage] = useScrollPercentage();

  return (
    <div
      ref={ref}
      className="w-1 bg-transparent absolute px-16"
      style={{ height: props.divHeight }}
    >
      <div
        className={`w-1 bg-primary`}
        style={{ height: `${percentage * 100}%` }}
      ></div>
    </div>
  );
};

export default VerticalProgressBar;
