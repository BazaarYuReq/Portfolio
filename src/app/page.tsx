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
    <main className="w-[100vw] min-h-max flex flex-row bg-black">
      <section>
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
          maxHeight: open ? "260px" : "96px",
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
                open ? "rotate-360" : "rotate-180"
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

</section>
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
