// NextJS
import Link from "next/link";

// Images
import Image from "next/image";
import heroImage from "../../public/hero-image.jpg";

// Fonts
import { Barlow_Condensed } from "next/font/google";
const barlow_Condensed = Barlow_Condensed({ weight: "400", preload: false });

export default function Home() {
  return (
    <main>
      <section
        id="#hero"
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
        <div className="w-[1920px] h-full flex flex-col px-[20px] py-[20px] z-10">
          {/* Central content */}
          <div className="flex flex-row flex-1 items-center">
            {/* Left side */}
            <div className="flex w-1/2 flex-col gap-4">
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
              <p className="text-on-bg leading-[150%]">
                SEO, social media & analytics. Get found, get engaged, get
                results. Dominate search & Maximize reach.
              </p>
              <Link href={''} className="bg-primary flex items-center justify-center w-fit px-8 py-4 rounded-full">
                <p className="text-white">Learn more</p>
              </Link>
            </div>
          </div>
          {/* Bottom content */}
          <div className="flex flex-row gap-8 justify-end">
            {/* Copyright */}
            <div className="flex flex-col gap-1">
              <p className="text-on-bg self-end">COMPANY NAME</p>
              <p className="text-secondary-text-on-BG">© 2024 Company Name</p>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <p className="text-on-bg self-end">EMAIL</p>
              <p className="text-secondary-text-on-BG">email@company.com</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-20">
          <p className="text-white">hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
          <p>hello world</p>
        </div>
      </section>
    </main>
  );
}
