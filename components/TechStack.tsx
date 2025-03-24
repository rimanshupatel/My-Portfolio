import Link from "next/link";
import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiGoogle,
  SiOpenai,
  SiVercel,
  SiMongodb,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiStripe,
  SiCloudflare,
  // Add more icons as needed
} from "react-icons/si";

export default function TechStack() {
  const technologies = [
    {
      name: "Next.js",
      url: "https://nextjs.org",
      icon: <SiNextdotjs className="w-12 h-12 text-white" />,
    },
    {
      name: "Typescript",
      url: "https://www.typescriptlang.org",
      icon: <SiTypescript className="w-12 h-12 text-blue-400" />,
    },
    {
      name: "Gemini",
      url: "https://gemini.google.com",
      icon: <SiGoogle className="w-12 h-12 text-green-400" />,
    },
    {
      name: "Claude AI",
      url: "https://claude.ai",
      icon: <SiOpenai className="w-12 h-12 text-purple-400" />,
    },
    {
      name: "V0",
      url: "https://v0.dev",
      icon: <SiVercel className="w-12 h-12 text-gray-300" />,
    },
    {
      name: "Mongodb",
      url: "https://www.mongodb.com",
      icon: <SiMongodb className="w-12 h-12 text-green-400" />,
    },
    {
      name: "Prisma",
      url: "https://www.prisma.io",
      icon: <SiPrisma className="w-12 h-12 text-blue-400" />,
    },
    {
      name: "React",
      url: "https://reactjs.org",
      icon: <SiReact className="w-12 h-12 text-blue-400" />,
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" />,
    },
    {
      name: "Stripe",
      url: "https://stripe.com",
      icon: <SiStripe className="w-12 h-12 text-purple-400" />,
    },
    {
      name: "Cloudflare",
      url: "https://www.cloudflare.com",
      icon: <SiCloudflare className="w-12 h-12 text-orange-400" />,
    },
    {
      name: "Vercel",
      url: "https://vercel.com",
      icon: <SiVercel className="w-12 h-12 text-gray-300" />,
    },
  ];

  return (
    <section className="py-8 lg:py-16 ">
      <div className="w-full mx-auto px-4 pb-16">
        <div className="my-12 lg:mb-24">
          <h2 className="text-4xl font-bold mb-2 text-center text-white">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 text-center">
            Here are the technologies we'll be using in this course.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8 max-w-7xl mx-auto">
          {technologies.map((tech) => (
            <Link
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700"
            >
              <div className="mb-3">{tech.icon}</div>
              <p className="text-base font-medium text-gray-200 group-hover:text-white">
                {tech.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
