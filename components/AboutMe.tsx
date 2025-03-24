import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutMe() {
  const achievements = [
    {
      icon: "🚀",
      text: "Passionate frontend developer exploring the power of AI and full-stack innovation.",
    },
    {
      icon: "📚",
      text: (
        <>
          Learning{" "}
          <span className="text-purple ">Next.js, AI, and MERN stack</span> to
          build impactful projects.
        </>
      ),
    },
    {
      icon: "💡",
      text: (
        <>
          Built{" "}
          <span className="text-yellow-300">several web applications</span>{" "}
          including an{" "}
          <span>
            AI-powered blog, e-commerce platform, and real-time chat app
          </span>
          .
        </>
      ),
    },
    {
      icon: "🎯",
      text: "Aspiring AI engineer, continuously improving problem-solving and coding skills.",
    },
  ];

  return (
    <section className="bg-black-950 md:pt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="pt-16 pb-12 md:pt-10 md:pb-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Profile Header */}
            <div className="text-center space-y-2">
              <div className="relative mx-auto w-[300px] h-[300px]">
                <Image
                  src="/image.png"
                  alt="Ankita Kulkarni - Tech Leader and Educator"
                  fill
                  className="rounded-full border-4 border-gray-800 p-2 shadow-2xl object-cover"
                  priority
                />
              </div>
              <Link
                href="https://x.com/rimanshu_patel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-400 underline underline-offset-4 hover:text-purple-300 transition-colors"
              >
                @rimanshu_patel
              </Link>
            </div>

            {/* Introduction */}
            <h2
              className="text-xl text-gray-100 md:text-2xl"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Hi, I&apos;m Rimanshu 👋🏽, I have
            </h2>

            {/* Achievements List */}
            <ul className="space-y-3 pl-8 text-gray-100 marker:text-white">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Course Description */}
            <div className="space-y-4">
              <p className="text-xl text-gray-100">
                A passionate and self-motivated full-stack developer
                specializing in Next.js, React, and the MERN stack. Experienced
                in building scalable web applications with modern technologies,
                real-time data handling, and robust authentication. Strong
                problem-solving skills, keen on optimizing performance, and
                contributing to open-source projects. Enthusiastic about
                learning AI and exploring innovative solutions.
              </p>
            </div>

            {/* Signature */}
            <p className="font-logo text-4xl text-white pl-8 pt-4">Rimanshu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
