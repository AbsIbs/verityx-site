/* NextJS */
import Image from "next/image";

/* Material UI */
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* Temp image */
import tempImage from "../../public/Mockup.png";

const WorkPreview = (props) => {
  return (
    <div className="flex flex-col gap-16 ">
      {/* Title */}
      <p className="text-on-bg text-2xl font-medium px-4 border-l-2 border-primary">
        {props.title.toUpperCase()}
      </p>
      {/* Top row */}
      <div className="flex flex-row items-center gap-4">
        <div className="flex-1">
          <Image src={tempImage} className="rounded" />
        </div>
        <div className="flex-1">
          <Image src={tempImage} className="rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <ArrowForwardIcon sx={{ color: "white" }} fontSize="large" />
          <p className="text-on-bg tracking-widest">VIEW PROJECT</p>
        </div>
      </div>
      {/* Middle Row */}
      <div className="flex flex-row items-end gap-4">
        <div className="flex flex-col">
          {props.caseStudy ? (
            <p className="text-on-bg tracking-widest">CASE STUDY</p>
          ) : (
            <>
              <p className="text-secondary-text-on-bg tracking-widest">
                WEBSITE
              </p>
              <a target="_blank" href={props.webAddress} className="text-on-bg">
                {props.webAddress.replace("http://www.", "")}
              </a>
            </>
          )}
        </div>
        <div className="flex-1">
          <Image src={tempImage} className="rounded" />
        </div>
        <div className="flex-1">
          <Image src={tempImage} className="rounded" />
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-row gap-32">
        {/* Work */}
        <div className="flex flex-col gap-2.5">
          {props.work.map((work, index) => {
            return (
              <div
                key={index}
                className="py-3 px-6 bg-on-bg-light rounded items-center justify-center w-fit"
              >
                <p className="text-on-bg">{work}</p>
              </div>
            );
          })}
        </div>
        {/* Overview */}
        <div className="flex flex-col ">
          <p className="text-secondary-text-on-bg tracking-widest">OVERVIEW</p>
          <p className="text-on-bg leading-normal">{props.overview}</p>
        </div>
        {/* Platform */}
        <div className="flex flex-col">
          <p className="text-secondary-text-on-bg tracking-widest">PLATFORM</p>
          {props.platform.map((platform, index) => (
            <p key={index} className="text-on-bg">
              {platform}
            </p>
          ))}
        </div>
        {/* Status */}
        <div className="flex flex-col">
          <p className="text-secondary-text-on-bg tracking-widest">STATUS</p>
          <p className="text-on-bg">{props.status}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPreview;
