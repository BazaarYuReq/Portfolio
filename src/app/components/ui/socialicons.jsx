import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  const socials = [
    { icon: <FaInstagram />, link: "https://instagram.com/bilegdemberel_vs_chemistry", color: "text-pink-700", hover: "hover:text-pink-500" },
    { icon: <FaGithub />, link: "https://github.com/yourusername", color: "text-black", hover: "hover:text-gray-700" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername", color: "text-blue-700", hover: "hover:text-blue-500" },
  ];

  return (
    <div className="flex gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          {/* Fixed base */}
          <div className="absolute inset-0 rounded-2xl bg-neutral-300 shadow-inner" />

          {/* Icon button face */}
          <div
            className={`
              relative
              bg-white
              rounded-2xl
              p-6
              border border-neutral-200
              translate-y-[-2px]
              shadow-[0_6px_0_rgb(200,200,200)]
              transition-all duration-100 ease-out
              hover:translate-y-[-2px]
              hover:shadow-[0_12px_0_rgb(200,200,200)]
              active:translate-y-0
              active:shadow-[0_2px_0_rgb(200,200,200)]
              flex items-center justify-center
              text-5xl
              ${social.color} ${social.hover}
            `}
          >
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
