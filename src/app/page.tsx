"use client";

import { FaInstagram, FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";
import { useState } from "react";
function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]">
      <h3 className="text-lg font-semibold text-yellow-400 mb-2">
        {title}
      </h3>
      <p className="text-sm text-neutral-400">{text}</p>
    </div>
  );
}
function RoadmapItem({
  month,
  title,
  points,
  highlight = false,
}: {
  month: string;
  title: string;
  points: string[];
  highlight?: boolean;
}) {
  return (
    <div className="relative w-[22vw]">

      {/* Dot */}
      <div
        className={`
          absolute -left-[52px] top-2 w-5 h-5 rounded-full
          ${highlight ? "bg-yellow-400 shadow-[0_0_15px_rgba(212,175,55,0.8)]" : "bg-neutral-700"}
        `}
      />

      {/* Card */}
      <div
        className={`
          bg-neutral-900/70 border border-neutral-800
          rounded-2xl p-6
          transition-all duration-300
          hover:border-yellow-400
          hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
        `}
      >
        <p className="text-sm text-yellow-400 mb-1">{month}</p>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <ul className="space-y-2 text-sm text-neutral-400">
          {points.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-yellow-400">▹</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] flex flex-row bg-black">
      
      <section className="bg-black w-[25vw] h-[100vh] text-white border-yellow-500 border-3 flex flex-col justify-between items-center">

  {/* ================= BLACK PFP BOX (UNCHANGED) ================= */}
  <div className="bg-black w-[22vw] h-[40vh] border-2 rounded-3xl m-[20px]" />

  {/* ================= EXPAND / COLLAPSE YELLOW BOX ================= */}
  {(() => {
    const [open, setOpen] = useState(true);

    return (
      <div
        className={`
          flex justify-center items-center
          bg-yellow-500 w-[22vw] rounded-3xl
          transition-all duration-500 ease-in-out
          ${open ? "pt-[20px] pb-[30px]" : "pt-[12px] pb-[12px]"}
          translate-y-[-100px]
          overflow-hidden
        `}
        style={{
          maxHeight: open ? "260px" : "56px",
        }}
      >
        <div className="flex flex-col items-center w-full">

          {/* HEADER (CLICK TO TOGGLE) */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-6 text-black font-bold"
          >
            <span>My Socials</span>
            <span
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {/* CONTENT */}
          <div
            className={`
              flex gap-4 mt-4
              transition-all duration-300
              ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {/* Instagram */}
            <a
              href="https://instagram.com/bilegdemberel_vs_chemistry"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-neutral-300 shadow-[0_8px_0_rgb(180,180,180)]"></div>
              <div className="relative bg-white rounded-2xl p-4 flex items-center justify-center text-pink-800 hover:text-pink-700 shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)] transition-all duration-150 hover:translate-y-[-2px]">
                <FaInstagram className="text-4xl" />
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-neutral-300 shadow-[0_8px_0_rgb(180,180,180)]"></div>
              <div className="relative bg-white rounded-2xl p-4 flex items-center justify-center text-blue-900 hover:text-blue-700 shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)] transition-all duration-150 hover:translate-y-[-2px]">
                <FaFacebook className="text-4xl" />
              </div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/BazaarYuReq"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-neutral-300 shadow-[0_8px_0_rgb(180,180,180)]"></div>
              <div className="relative bg-white rounded-2xl p-4 flex items-center justify-center text-indigo-800 hover:text-indigo-700 shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)] transition-all duration-150 hover:translate-y-[-2px]">
                <FaDiscord className="text-4xl" />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/BazaarYuReq"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-neutral-300 shadow-[0_8px_0_rgb(180,180,180)]"></div>
              <div className="relative bg-white rounded-2xl p-4 flex items-center justify-center text-gray-900 hover:text-gray-800 shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)] transition-all duration-150 hover:translate-y-[-2px]">
                <FaGithub className="text-4xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  })()}

  {/* ================= SKILLS (UNCHANGED) ================= */}
  <div className="w-[22vw] h-[25vh] bg-black">
    <section className="bg-black translate-y-[-130px]">
      <h2 className="text-3xl text-yellow-500 font-bold font-sans text-center">
        My Skills
      </h2>
      <section className="grid grid-cols-3 gap-8 w-[22vw] h-[33vh] mx-auto place-items-center bg-black">
        <img src="/languages/html.svg" alt="HTML" width="128" height="128" />
        <img src="/languages/css.svg" alt="CSS" width="128" height="128" />
        <img src="/languages/javascript.svg" alt="JavaScript" width="128" height="128" />
        <img src="/languages/typescript.svg" alt="TypeScript" width="128" height="128" />
        <img src="/languages/react.svg" alt="React" width="128" height="128" />
        <img src="/languages/nodejs.svg" alt="NodeJS" width="128" height="128" />
      </section>
    </section>
  </div>

</section>

<section
className="w-[75vw] h-[100vh] text-yellow-500 text-center">
<div >
  <h1 className="text-5xl">My Coding Journey</h1>
  <p>August 2025,
    I started my coding journey and I knew nothing about coding with the basic table row and column knowledge to do my bidding in ICT subject I studied in 9th and 10th grade
  </p>
  <p>September 2025,
    This is where I started picking up normal web developing skills in web building using HTML and CSS. During this time I was making new friends in my coding bootcamp to discuss about our projects we're going to make.
  </p>
  <p>October 2025,
    This month was hard as to learn my JavaScript with my studies in subject almost catching up
  </p>
  <p>November 2025,
    The first project started with my teammates but I struggled in building the app using NextJS and React, only coming up with the routing to other pages and normal popups on click to save it in local memory. I almost gave up here to do coding, as many of my friends knew how to do it better than mine. Espeically after hacktoberfest after my team lost 3rd place in close tie </p>
  <p>December 2025,
    I've kept creating many small projects to increase my coding skill but especially for my team's project and making one with the longest time of tampering becoming the project but I started my own project almost at december, in which my personal project must be created for my graduation from the coding bootcamp. So I came up with a great idea to save time and develop it more unique and better than any other projects, I started a project named PersonalPlanner. At first it was a mess with bad ui and messy as my before projects. Then I decided to just work on making it visiually pleasing with its own style so I basically made a laptop inside of an computer.
  </p>
  <p>January 2025,
    I finished my coding bootcamp with my team project and personal project being 29/30, which I didn't think about achieving such feat. I have overestimated my friends skill over mine. I engineered my project more unique and complex yet so simple than my friends. Now, I'm thinking about making my project use barely any back-end to be client-side focused to turn it into MVP as a solo till I find people to work on my project with me. That way I can have my project well known around the world with genius engineering as a beginner coder.

  </p>
  <p>Now I'm working on my projects to implement my MVP and work with many tech stack to create many projects that will benefit not only me but many millions of people around the world. Internshipping at my coding academy to level my skill further and learn coding further with python, rust and redis. But till June I might not dedicate as much as I did before as I have to lock in.</p>
</div>
<div className="grid grid-cols-3 gap-8 mb-12">
          <InfoCard title="What I Do" text="Frontend development with modern tools." />
          <InfoCard title="Focus" text="Clean UI, smooth UX, scalable code." />
          <InfoCard title="Learning" text="Full-stack & backend systems." />
        </div>
<section className="mt-24">
  <h2 className="text-4xl font-bold mb-12">
    My <span className="text-yellow-400">Journey</span>
    <span className="block text-sm text-neutral-400 mt-2">
      September 2025 – January 2026
    </span>
  </h2>

  <div className="relative border-l border-neutral-800 pl-10 space-y-16">

    {/* SEPTEMBER */}
    <RoadmapItem
      month="September 2025"
      title="Strong Frontend Foundations"
      points={[
        "Mastered HTML, CSS, and modern layouts",
        "Deep dive into JavaScript fundamentals",
        "Built small UI components daily",
      ]}
    />

    {/* OCTOBER */}
    <RoadmapItem
      month="October 2025"
      title="React & Component Architecture"
      points={[
        "React hooks and component patterns",
        "State management & props flow",
        "Built reusable UI systems",
      ]}
    />

    {/* NOVEMBER */}
    <RoadmapItem
      month="November 2025"
      title="Next.js & Real Projects"
      points={[
        "Next.js App Router & routing",
        "Client vs Server Components",
        "Built full landing pages & portfolios",
      ]}
    />

    {/* DECEMBER */}
    <RoadmapItem
      month="December 2025"
      title="Backend & Full-Stack Basics"
      points={[
        "Node.js & API fundamentals",
        "Authentication concepts",
        "Connecting frontend to backend",
      ]}
    />

    {/* JANUARY */}
    <RoadmapItem
      month="January 2026"
      title="Polish, Deploy & Freelance Ready"
      points={[
        "Optimized UI/UX & performance",
        "Deployment & GitHub workflow",
        "Prepared for freelancing & internships",
      ]}
      highlight
    />

  </div>
</section>
</section>

    </main>
  );
}
