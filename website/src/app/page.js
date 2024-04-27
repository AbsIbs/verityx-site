// NextJS
import Link from "next/link";

// Images
import Image from "next/image";
import heroImage from "../../public/hero-image.jpg";
import illustration from "../../public/illustration.svg";

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
            opacity: "35%",
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
              <p className="text-on-bg text-6xl font-medium leading-[125%]">
                We build stunning websites and drive traffic.
              </p>
              <p className="text-on-bg text-[21px] leading-[150%]">
                SEO, social media & analytics. Get found, get engaged, get
                results. Dominate search & Maximize reach.
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
        <div className="flex flex-col gap-4 w-[1280px] px-6">
          <div className="flex flex-row gap-2 items-center">
            <div className="h-[2px] w-6 bg-secondary-text-on-bg" />
            <p className="text-secondary-text-on-bg text-lg tracking-widest">
              WHAT WE STAND FOR
            </p>
          </div>
          <p className="text-on-bg text-3xl leading-[150%]">
            We're obsessed with unlocking your digital potential, and we refuse
            to settle for mediocrity. We're a passionate team of experts,
            collaborating to craft winning digital strategies that go above and
            beyond. Our mission is to{" "}
            <span className="text-primary">empower you to thrive online, </span>
            and we achieve this by continuously refining our craft, staying
            ahead of industry trends, and delivering results that shatter
            expectations.
          </p>
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
      <section className="flex items-center justify-center bg-surface py-48">
        <div className="w-[1280px] items-center justify-center flex flex-col gap-24 px-6">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-on-bg text-5xl">What we do</p>
            <p className="text-on-bg text-lg text-center">
              Lorem ipsum dolor sit amet consectetur. Neque metus varius orci
              mattis eu nunc pellentesque.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
