// NextJS
import Link from "next/link";

// Component
import WorkPreview from "@/components/workPreview";
import FAQ from "@/components/faq";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";

// Material UI
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ExploreIcon from "@mui/icons-material/Explore";
import VerifiedIcon from "@mui/icons-material/Verified";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import ScienceIcon from "@mui/icons-material/Science";
import InsightsIcon from "@mui/icons-material/Insights";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CallIcon from "@mui/icons-material/Call";

// Images
import Image from "next/image";
import heroImage from "../../public/hero-image.jpg";
import illustration from "../../public/illustration.svg";
import cssIcon from "../../public/CSS3.png";
import figmaIcon from "../../public/figma.png";
import htmlIcon from "../../public/Html 5.png";
import jsIcon from "../../public/JavaScript.png";
import nextIcon from "../../public/Nextjs.png";
import nodeIcon from "../../public/Nodejs.png";
import pythonIcon from "../../public/Python.png";
import reactIcon from "../../public/React.png";
import tailwindIcon from "../../public/Tailwind CSS.png";
import webflowIcon from "../../public/Webflow.png";
import scheduleCall from "../../public/scheduleCall.jpg";
import logo from "../../public/logo-with-background.png";

export default function Home() {
  const Process = (props) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="rounded-full flex items-center justify-center h-10 w-10 bg-primary">
          <p className="text-white">{props.number}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-on-bg-light text-3xl">{props.title}</p>
          <p className="text-on-bg-light">{props.desc}</p>
        </div>
      </div>
    );
  };

  const icons = {
    webDev: <CodeIcon sx={{ color: "white" }} fontSize="inherit" />,
    bespoke: <DeveloperModeIcon sx={{ color: "white" }} fontSize="inherit" />,
    UI: <DesignServicesIcon sx={{ color: "white" }} fontSize="inherit" />,
    UX: <ExploreIcon sx={{ color: "white" }} fontSize="inherit" />,
    branding: <VerifiedIcon sx={{ color: "white" }} fontSize="inherit" />,
    seo: <FindReplaceIcon sx={{ color: "white" }} fontSize="inherit" />,
    ml: <ScienceIcon sx={{ color: "white" }} fontSize="inherit" />,
    data: <InsightsIcon sx={{ color: "white" }} fontSize="inherit" />,
    consulting: <LightbulbIcon sx={{ color: "white" }} fontSize="inherit" />,
  };

  const WhatWeDo = (props) => {
    return (
      <div className="flex flex-col gap-4 bg-surface p-8 rounded hover:bg-primary">
        <div className="text-6xl">{icons[props.icon]}</div>
        <div className="flex flex-col">
          <p className="text-on-bg text-2xl">{props.title}</p>
          <p className="text-secondary-text-on-bg">{props.desc}</p>
        </div>
      </div>
    );
  };

  const stackIcons = [
    htmlIcon,
    cssIcon,
    jsIcon,
    tailwindIcon,
    nodeIcon,
    reactIcon,
    nextIcon,
    pythonIcon,
    webflowIcon,
    figmaIcon,
  ];

  const defaultContent = "Lorem Ipsum";

  return (
    <main>
      <section
        id="hero"
        className="h-[calc(100vh-64px)] flex justify-center bg-black"
      >
        <Image
          alt="Mountains"
          src={heroImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: 0,
            opacity: "15%",
          }}
        />
        <div className="w-[1920px] h-full flex flex-col px-6 py-6 z-10">
          {/* Central content */}
          <div className="flex flex-row flex-1 items-center">
            {/* Left side */}
            <div className="flex w-1/2 flex-col gap-8">
              {/* Line and text */}
              <div className="flex flex-row items-center gap-2">
                <div className="h-[2px] w-6 bg-primary" />
                <p className="text-primary w-full font-medium ">
                  BUILDING BRANDS
                </p>
              </div>
              <p className="text-on-bg font-bold text-6xl leading-[125%]">
                We build stunning websites and drive traffic{" "}
                <span className="text-primary">.</span>
              </p>
              <Link
                href={"#aboutUs"}
                scroll={true}
                className="bg-primary flex items-center justify-center w-fit px-8 py-4 rounded-full"
              >
                <p className="text-white">Learn more</p>
              </Link>
            </div>
          </div>
          {/* Bottom content */}
          <div className="flex flex-row gap-8 justify-end">
            {/* Copyright */}
            <div className="flex flex-col gap-1">
              <p className="text-on-bg self-end">COMPANY NAME</p>
              <p className="text-secondary-text-on-bg">© 2024 Company Name</p>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <p className="text-on-bg self-end">EMAIL</p>
              <p className="text-secondary-text-on-bg">email@company.com</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="aboutUs"
        className="h-screen flex items-center justify-center"
      >
        <div className="flex flex-row gap-4 w-[1280px] px-6">
          <div className="flex flex-row gap-16 items-center">
            <div className="flex flex-col flex-1 gap-8">
              <p className="text-on-bg font-bold text-5xl leading-normal">
                Trusted by clients worldwide <span className="text-primary">.</span>
              </p>
              <p className="text-on-bg text-2xl leading-[150%]">
                We're obsessed with unlocking your digital potential, and we
                refuse to settle for mediocrity. We're a passionate team of
                experts, collaborating to craft winning digital strategies that
                go above and beyond. Our mission is to{" "}
                <span className="text-primary">
                  empower you to thrive online,{" "}
                </span>
                and we achieve this by continuously refining our craft, staying
                ahead of industry trends, and delivering results that shatter
                expectations.
              </p>
            </div>
            <div className="flex-1 ">
              <Image src={logo} />
            </div>
          </div>
        </div>
      </section>
      <section
        id="ourProcess"
        className="py-48 bg-on-bg flex items-center justify-center"
      >
        <div className="w-[1280px] flex flex-col gap-24 px-6">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-on-bg-light text-5xl">Our Process</p>
            <p className="text-on-bg-light text-lg text-center">
              Lorem ipsum dolor sit amet consectetur. Cras morbi eget leo at
              mollis eget leo tempor maecenas. Diam ultrices dui egestas
              suspendisse tincidunt etiam nisl. Dis posuere egestas et libero.
              Sapien neque diam gravida egestas proin consectetur cursus purus.
            </p>
          </div>
          {/* Processes */}
          <div className="flex flex-row gap-24">
            <div className="flex-1">
              <Image src={illustration} />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-16">
              <Process
                number={1}
                title={"Lorem Ipsum"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur. Neque quis sed nec mauris fermentum tincidunt neque aliquam. Vel semper eleifend in phasellus."
                }
              />
              <Process
                number={2}
                title={"Lorem Ipsum"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur. Neque quis sed nec mauris fermentum tincidunt neque aliquam. Vel semper eleifend in phasellus."
                }
              />
              <Process
                number={3}
                title={"Lorem Ipsum"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur. Neque quis sed nec mauris fermentum tincidunt neque aliquam. Vel semper eleifend in phasellus."
                }
              />
              <Process
                number={4}
                title={"Lorem Ipsum"}
                desc={
                  "Lorem ipsum dolor sit amet consectetur. Neque quis sed nec mauris fermentum tincidunt neque aliquam. Vel semper eleifend in phasellus."
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-bg py-48">
        <div className="w-[1280px] justify-center flex flex-row gap-24 px-6">
          {/* Sticky title */}
          <div className="sticky h-full top-16 flex flex-col gap-4 flex-1">
            <p className="text-secondary-text-on-bg tracking-widest">
              WHAT MAKES US DIFFERENT?
            </p>
            <p className="text-on-bg text-5xl leading-[125%] font-bold">
              We offer a robust set of services to our clients{" "}
              <span className="text-primary">.</span>
            </p>
          </div>
          {/* Grid */}
          <div className="flex-2 grid grid-cols-2 gap-4 ">
            <WhatWeDo
              title="Web Development"
              desc={"My description"}
              icon={"webDev"}
            />
            <WhatWeDo
              title="Bespoke Apps"
              desc={"My description"}
              icon={"bespoke"}
            />
            <WhatWeDo title="UI Design" desc={"My description"} icon={"UI"} />
            <WhatWeDo title="UX Research" desc={"My description"} icon={"UX"} />
            <WhatWeDo
              title="Branding"
              desc={"My description"}
              icon={"branding"}
            />
            <WhatWeDo
              title="Machine Learning & AI"
              desc={"My description"}
              icon={"ml"}
            />
            <WhatWeDo
              title="Data & Analytics"
              desc={"My description"}
              icon={"data"}
            />
            <WhatWeDo title="SEO" desc={"My description"} icon={"seo"} />
            <WhatWeDo
              title="Consulting"
              desc={"My description"}
              icon={"consulting"}
            />
          </div>
        </div>
      </section>
      <section className="py-48 bg-surface flex items-center justify-center">
        <div className="flex flex-col gap-12 items-center justify-center w-[1280px]">
          <div className="flex flex-col gap-2 items-center ">
            <p className="text-5xl font-bold text-on-bg">
              Our Stack <span className="text-primary">.</span>
            </p>
            <p className="text-secondary-text-on-bg">Lorem ipsum</p>
          </div>
          <div className="flex flex-row flex-wrap gap-16 items-center justify-center ">
            {stackIcons.map((icon, index) => (
              <Image key={index} src={icon} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-48 bg-bg">
        <div className="flex flex-col w-[1280px] px-6 gap-48">
          {/* Header */}
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-secondary-text-on-bg tracking-widest">
              THE LATEST AND GREATEST
            </p>
            <p className="text-on-bg text-5xl leading-[125%] font-bold">
              Our Works <span className="text-primary">.</span>
            </p>
          </div>
          {/* Works */}
          <WorkPreview
            title={"Pulse Poetry"}
            caseStudy={false}
            webAddress={"http://www.pulsePoetry.com"}
            work={["UX Research", "UI Design", "Development"]}
            platform={["Desktop", "Mobile"]}
            status={"Ongoing"}
            overview="Lorem ipsum dolor sit amet consectetur. Neque amet convallis ultrices ac. Imperdiet iaculis tincidunt imperdiet egestas elit leo vivamus et. Morbi nam sed proin nibh orci sed laoreet aliquam. Non nisl lorem turpis facilisis pellentesque."
          />
          <WorkPreview
            title={"TDM"}
            caseStudy={false}
            webAddress={"http://www.pulsePoetry.com"}
            work={["UX Research", "UI Design", "Development"]}
            platform={["Desktop", "Mobile"]}
            status={"Ongoing"}
            overview="Lorem ipsum dolor sit amet consectetur. Neque amet convallis ultrices ac. Imperdiet iaculis tincidunt imperdiet egestas elit leo vivamus et. Morbi nam sed proin nibh orci sed laoreet aliquam. Non nisl lorem turpis facilisis pellentesque."
          />
          <WorkPreview
            title={"Dishdelve"}
            caseStudy={false}
            webAddress={"http://www.pulsePoetry.com"}
            work={["UX Research", "UI Design", "Development"]}
            platform={["Desktop", "Mobile"]}
            status={"Ongoing"}
            overview="Lorem ipsum dolor sit amet consectetur. Neque amet convallis ultrices ac. Imperdiet iaculis tincidunt imperdiet egestas elit leo vivamus et. Morbi nam sed proin nibh orci sed laoreet aliquam. Non nisl lorem turpis facilisis pellentesque."
          />
        </div>
      </section>
      <section className="flex items-center justify-center py-48 bg-surface">
        <div className="flex flex-row gap-32 px-4">
          {/* Left side */}
          <div className="flex flex-col flex-1 gap-6">
            <p className="text-secondary-text-on-bg tracking-widest">
              WE'RE HERE TO HELP
            </p>
            <p className="text-on-bg text-5xl leading-normal font-bold">
              Frequently Asked Questions <span className="text-primary">.</span>
            </p>
            <p className="text-on-bg text-lg leading-normal">
              If you have any other questions, feel free to shoot us a message!
            </p>
            <p className="text-primary font-medium text-lg">Get in touch.</p>
          </div>
          {/* Right side */}
          <div className="flex-1">
            <FAQ />
          </div>
        </div>
      </section>
      <section className="py-48 bg-bg flex items-center justify-center">
        <div className="flex flex-col w-[1280px] px-6 gap-32">
          {/* Header */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-secondary-text-on-bg tracking-widest text-center">
              READY TO ELEVATE YOUR COMPANY?
            </p>
            <p className="text-center text-5xl text-on-bg font-bold">
              Let's work together <span className="text-primary">.</span>
            </p>
          </div>
          {/* Form */}
          <ContactForm />
          {/* Book now */}
          <div className="flex flex-row gap-24 bg-on-bg py-24 px-12 rounded">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-2">
                <p className="text-on-bg-light tracking-widest">CAN'T WAIT?</p>
                <p className="text-5xl text-on-bg-light leading-tight font-bold">
                  Schedule a quick 15 minute call{" "}
                  <span className="text-primary">.</span>
                </p>
              </div>
              <p className="text-on-bg-light leading-normal">
                Lorem ipsum dolor sit amet consectetur. Neque amet convallis
                ultrices ac. Imperdiet iaculis tincidunt imperdiet egestas elit
                leo vivamus et. Morbi nam sed proin nibh orci sed laoreet
                aliquam. Non nisl lorem turpis facilisis pellentesque
              </p>
              <Link
                className="bg-primary flex gap-2 items-center justify-center rounded text-on-bg w-fit px-8 py-4"
                href={""}
              >
                <p>Book a call</p>
                <CallIcon sx={{ color: "white" }} />
              </Link>
            </div>
            <div className="flex-1">
              <Image src={scheduleCall} className="rounded" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
