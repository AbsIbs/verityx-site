"use client";
import VerticalProgressBar from "./verticalProgressBar";
import { useState, useEffect } from "react";

const TimelineComponent = () => {
  /* Calculate the div height for the vertical progress bar */
  const [divHeight, setDivHeight] = useState();
  useEffect(() => {
    const element = document.getElementById("myDiv");
    if (element) {
      setDivHeight(element.clientHeight);
    }
  }, []);

  useEffect(() => {
    console.log("Div height:", divHeight);
  }, [divHeight]); // Log divHeight whenever it changes

  const TextBody = (props) => {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-on-bg-light font-medium text-3xl">{props.title}</p>
        <p className="text-on-bg-light leading-normal text-xl">{props.desc}</p>
      </div>
    );
  };

  const Entry = (props) => {
    return (
      <div className="flex flex-row gap-12">
        {/* Step */}
        <div className="h-fit sticky top-4">
          <p className="text-4xl text-on-bg-light w-12 font-medium">{props.step}</p>
        </div>
        {/* Description */}
        <TextBody title={props.title} desc={props.desc} />
      </div>
    );
  };

  return (
    <>
      <VerticalProgressBar divHeight={divHeight} />
      <div className="flex flex-col gap-24" id={"myDiv"}>
        {/* 1st Entry */}
        <Entry
          step={"01"}
          title={"Lorem Ipsum"}
          desc={
            "We're obsessed with unlocking your digital potential, and we refuse to settle for mediocrity. We're a passionate team of experts, collaborating to craft winning digital strategies that go above and beyond. Our mission is to empower you to thrive online, and we achieve this by continuously refining our craft, staying ahead of industry trends, and delivering results that shatter expectations."
          }
        />
        {/* 2nd Entry */}
        <Entry
          step={"02"}
          title={"Lorem Ipsum"}
          desc={
            "We're obsessed with unlocking your digital potential, and we refuse to settle for mediocrity. We're a passionate team of experts, collaborating to craft winning digital strategies that go above and beyond. Our mission is to empower you to thrive online, and we achieve this by continuously refining our craft, staying ahead of industry trends, and delivering results that shatter expectations."
          }
        />
        {/* 3rd Entry */}
        <Entry
          step={"03"}
          title={"Lorem Ipsum"}
          desc={
            "We're obsessed with unlocking your digital potential, and we refuse to settle for mediocrity. We're a passionate team of experts, collaborating to craft winning digital strategies that go above and beyond. Our mission is to empower you to thrive online, and we achieve this by continuously refining our craft, staying ahead of industry trends, and delivering results that shatter expectations."
          }
        />
      </div>
    </>
  );
};

export default TimelineComponent;
