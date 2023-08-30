import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuChevronFirst, LuGraduationCap } from "react-icons/lu";
import p1 from "@/public/p1.png";
import p2 from "@/public/p2.png";
import p3 from "@/public/p3.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "HTML & CSS & javaScript",

    description:
      "I started my first steps in front-end dev by learning some basics like HTML 5 , CSS 3 . After that I developed my self and I became using js  .",
    icon: React.createElement(LuChevronFirst),
    date: "2019",
  },
  {
    title: "React & tailwind",
    description:
      "After learning basics, I rised to another level . I used React.js as a frameWork .",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "H-BacDz",
    description:
      "I created this website to help Bac-Exame'students, this website contain free courses, excercises, exames ...  .",
    tags: ["React", "farmer", "Tailwind", "javaScript"],
    imageUrl: p1,
  },
  {
    title: "Payment Methods",
    description:
      "I worked as a fron-end developer to build this website that show you the best and the new payment methods in the world.",
    tags: ["Vite", "javaScript", "Farmer", "Tailwind"],
    imageUrl: p3,
  },
  {
    title: "Portfolio",
    description:
      "This is my portfolio ,.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: p2,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
] as const;