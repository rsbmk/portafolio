import CSS from "./icons/CSS.astro";
import Docker from "./icons/Docker.astro";
import LangChain from "./icons/LangChain.astro";
import Nestjs from "./icons/Nestjs.astro";
import NextJS from "./icons/NextJS.astro";
import OpenAi from "./icons/OpenAi.astro";
import Pinecone from "./icons/Pinecone.astro";
import Python from "./icons/Python.astro";
import React from "./icons/React.astro";
import Redis from "./icons/Redis.astro";
import SQL from "./icons/SQL.astro";
import Tailwind from "./icons/Tailwind.astro";

export const personalImageAlt = "Roberto Samuel Bocio M.";

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#0c73b8] text-white",
    icon: CSS,
  },
  REACT: {
    name: "React",
    class: "bg-[#23272f] text-white",
    icon: React,
  },
  NESTJS: {
    name: "NestJS",
    class: "bg-[#0e0e10] text-white",
    icon: Nestjs,
  },
  REDIS: {
    name: "Redis",
    class: "bg-[#fff] text-[#4a4c4d]",
    icon: Redis,
  },
  DOCKER: {
    name: "Docker",
    class: "bg-[#0db7ed] text-white",
    icon: Docker
  },
  SQL: {
    name: "SQL",
    class: "bg-[#f29111] text-white",
    icon: SQL
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#1E415D] text-white",
    icon: Python
  },
  PINECONE: {
    name: "Pinecone",
    class: "bg-white text-black",
    icon: Pinecone
  },
  OPENAI: {
    name: "Open AI",
    class: "bg-[#090909] text-white",
    icon: OpenAi
  },
  LANGCHAIN: {
    name: "Langchain",
    class: "bg-[#1D3D3E] text-white",
    icon: LangChain
  }
};

export type PROJECTS_LIST = {
  title: string;
  description: string;
  link?: string;
  github?: { label: string; href: string }[];
  image: string;
  tags: typeof TAGS[keyof typeof TAGS][];
}[];

export const PROJECTS: PROJECTS_LIST = [
  // {
  //   title: "Mavs Hero - Catálogo de héroes de Marvel",
  //   description: "Catálogo de héroes de Marvel. Creado con React y CSS Modules. Consumo de API de SuperHeroAPI. (Proximamente un nuevo diseño con Tailwind CSS)",
  //   link: "https://rsbmk.github.io/mavs/",
  //   github: "https://github.com/rsbmk/mavs",
  //   image: "/projects/mavs.png",
  //   tags: [TAGS.REACT, TAGS.CSS],
  // },
  // {
  //   title: "Giffy - Buscador de gifs",
  //   description: "Buscador de gifs. Creado con React y CSS. Consumo de API de Giphy.",
  //   link: "https://rsbmk.github.io/giffy-app/",
  //   github: "https://github.com/rsbmk/giffy-app",
  //   image: "/projects/giffy.png",
  //   tags: [TAGS.REACT, TAGS.CSS],
  // },
  {
    title: "SRI - Chat",
    description: "Asistente virtual impulsado por inteligencia artificial, diseñado para resolver dudas sobre temas tributarios en Ecuador de manera rápida, precisa y personalizada.",
    link: "https://sri-chat-ui.pages.dev/",
    github: [{ label: "Frontend", href: "https://github.com/rsbmk/sri-chat-ui" }, { label: "Backend", href: "https://github.com/rsbmk/sri-chat-api" }],
    image: "/sri-chat.png",
    tags: [TAGS.PYTHON, TAGS.PINECONE, TAGS.OPENAI, TAGS.LANGCHAIN],
  },
];

// export const BACK_PROJECTS: PROJECTS_LIST = [
//   {
//     title: "Users Games - API RESTful",
//     description: "API RESTful de usuarios y videojuegos. Creada con NestJs. Utilizando arquitectura DDD y un API GETWAY.",
//     image: "/projects/user-game-api.png",
//     github: "https://github.com/rsbmk/users-games",
//     tags: [TAGS.NESTJS, TAGS.REDIS, TAGS.DOCKER, TAGS.SQL],
//   }
// ]
