"use client";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] flex flex-row ">
      <section className="bg-purple-800 w-[25vw] h-[100vh] flex flex-col justify-between items-center">
      
      <div className="bg-black w-[22vw] h-[40vh] border-2 rounded-3xl m-[20px]" ></div>

      <div className="text-2xl">

        <p>My social accounts</p>

      </div>
 <div className="flex gap-5 justify-center mt-6 items-center bg-purple-100 w-[25vw] rounded-3xl py-[20px]">
<div className="flex gap-4">
 <div className="flex gap-4 ">
  {/* Instagram */}
  <a
    href="https://instagram.com/bilegdemberel_vs_chemistry"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block cursor-pointer"
  >
    <div className="absolute inset-0 rounded-2xl bg-neutral-300 shadow-[0_8px_0_rgb(180,180,180)]"></div>
    <div
      className="
        relative
        bg-white
        rounded-2xl
        p-4
        flex items-center justify-center
        text-pink-800
        hover:text-pink-700
        translate-y-0
        shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)]
        transition-all duration-150 ease-out
        hover:translate-y-[-2px]
        hover:shadow-[0_10px_0_rgb(200,200,200),0_14px_12px_rgba(0,0,0,0.08)]
        active:translate-y-0
        active:scale-[0.97]
      "
    >
      <FaInstagram className="text-4xl" />
    </div>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/khongoroo.khongorzul.9085"
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block cursor-pointer"
  >
    <div className="absolute inset-0 rounded-2xl bg-neutral-300 shadow-[0_8px_0_rgb(180,180,180)]"></div>
    <div
      className="
        relative
        bg-white
        rounded-2xl
        p-4
        flex items-center justify-center
        text-blue-900
        hover:text-blue-700
        translate-y-0
        shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)]
        transition-all duration-150 ease-out
        hover:translate-y-[-2px]
        hover:shadow-[0_10px_0_rgb(200,200,200),0_14px_12px_rgba(0,0,0,0.08)]
        active:translate-y-0
        active:scale-[0.97]
      "
    >
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
    <div
      className="
        relative
        bg-white
        rounded-2xl
        p-4
        flex items-center justify-center
        text-indigo-800
        hover:text-indigo-700
        translate-y-0
        shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)]
        transition-all duration-150 ease-out
        hover:translate-y-[-2px]
        hover:shadow-[0_10px_0_rgb(200,200,200),0_14px_12px_rgba(0,0,0,0.08)]
        active:translate-y-0
        active:scale-[0.97]
      "
    >
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
    <div
      className="
        relative
        bg-white
        rounded-2xl
        p-4
        flex items-center justify-center
        text-gray-900
        hover:text-gray-800
        translate-y-0
        shadow-[0_6px_0_rgb(200,200,200),0_10px_10px_rgba(0,0,0,0.05)]
        transition-all duration-150 ease-out
        hover:translate-y-[-2px]
        hover:shadow-[0_10px_0_rgb(200,200,200),0_14px_12px_rgba(0,0,0,0.08)]
        active:translate-y-0
        active:scale-[0.97]
      "
    >
      <FaGithub className="text-4xl" />
    </div>
  </a>
</div>

</div>

</div>
    <div className="w-[22vw] h-[25vh] bg-black"></div>

    </section>
    <section className="w-[75vw] h-[100vh] bg-amber-500">
      <h1 className="text-5xl text-purple-700 font-bold font-sans"> My Skills</h1>
    <section className="grid grid-cols-4 gap-8 w-[75vw] mx-auto place-items-center border-5 rounded-3xl bg-white">
  <img src="/languages/html.svg" alt="HTML" width="64" height="64" />
  <img src="/languages/css.svg" alt="CSS" width="64" height="64" />
  <img src="/languages/javascript.svg" alt="JavaScript" width="64" height="64" />
  <img src="/languages/typescript.svg" alt="TypeScript" width="64" height="64" />
  <img src="/languages/react.svg" alt="React" width="64" height="64" />
  <img src="/languages/nodejs.svg" alt="NodeJS" width="64" height="64" />
  <img src="/languages/nodejs.svg" alt="NodeJS" width="64" height="64" />
  <img src="/languages/nodejs.svg" alt="NodeJS" width="64" height="64" />
</section>

      <div className="flex flex-row gap-10">
<div className="relative">
  {/* Fixed base */}
  <div
    className="
      absolute inset-0
      rounded-2xl
      bg-neutral-300
      shadow-inner
    "
  />

  {/* Button face */}
  <div
    className="
      relative
      bg-white
      rounded-2xl
      p-6
      border border-neutral-200

      translate-y-[-2px]
      shadow-[0_6px_0_rgb(200,200,200)]

      transition-all
      duration-100
      ease-out

      hover:translate-y-[-2px]
      hover:shadow-[0_12px_0_rgb(200,200,200)]

      active:translate-y-0
      active:shadow-[0_2px_0_rgb(200,200,200)]
    "
  >
    {/* content */}
    <h3 className="font-semibold text-lg">What I do</h3>
    <p className="text-sm text-neutral-600">
    I work with HTML, CSS, JavaScript, TypeScript, React, and Next.js, focusing
    mainly on frontend development while learning full-stack skills.
    </p>
  </div>
</div>

<div className="relative">
  {/* Fixed base */}
  <div
    className="
      absolute inset-0
      rounded-2xl
      bg-neutral-300
      shadow-inner
    "
  />

  {/* Button face */}
  <div
    className="
      relative
      bg-white
      rounded-2xl
      p-6
      border border-neutral-200

      translate-y-[-2px]
      shadow-[0_6px_0_rgb(200,200,200)]

      transition-all
      duration-100
      ease-out

      hover:translate-y-[-2px]
      hover:shadow-[0_12px_0_rgb(200,200,200)]

      active:translate-y-0
      active:shadow-[0_2px_0_rgb(200,200,200)]
    "
  >
    {/* content */}
    <h3 className="font-semibold text-lg">What I do</h3>
    <p className="text-sm text-neutral-600">
    I work with HTML, CSS, JavaScript, TypeScript, React, and Next.js, focusing
    mainly on frontend development while learning full-stack skills.
    </p>
  </div>
</div>

<div className="relative">
  {/* Fixed base */}
  <div
    className="
      absolute inset-0
      rounded-2xl
      bg-neutral-300
      shadow-inner
    "
  />

  {/* Button face */}
  <div
    className="
      relative
      bg-white
      rounded-2xl
      p-6
      border border-neutral-200

      translate-y-[-2px]
      shadow-[0_6px_0_rgb(200,200,200)]

      transition-all
      duration-100
      ease-out

      hover:translate-y-[-2px]
      hover:shadow-[0_12px_0_rgb(200,200,200)]

      active:translate-y-0
      active:shadow-[0_2px_0_rgb(200,200,200)]
    "
  >
    {/* content */}
    <h3 className="font-semibold text-lg">What I do</h3>
    <p className="text-sm text-neutral-600">
    I work with HTML, CSS, JavaScript, TypeScript, React, and Next.js, focusing
    mainly on frontend development while learning full-stack skills.
    </p>
  </div>
</div>

      </div>
    </section>

    </main>
  );
}
