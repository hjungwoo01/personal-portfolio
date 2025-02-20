import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub } from "react-icons/bs"

const projects = [
  {
    name: "DeFi Prototype for P2P Microloans",
    description:
      "This DeFi microfinance platform offers collateral-free microloans on the XRPL sidechain. Developed using Next.js for the frontend and FastAPI for the backend, the platform integrates AI for inclusive credit scoring through logistic regression models. This innovative solution aims to expand financial access by providing microloans to individuals without traditional collateral.",
    image: "/defi-microloans.png",
    github: "https://github.com/hjungwoo01/FinBloom",
  },
  {
    name: "Expense Tracker",
    description:
      "Expense Tracker is a user-friendly application designed for managing and visualizing personal expenses. It features robust JWT authentication and Google OAuth integration, allowing secure access and login. The backend, built with Node.js and Express, handles CRUD operations for expenses and categories through RESTful APIs. The responsive UI, developed with React, Redux, and Material-UI, ensures a seamless user experience.",
    image: "/expense-tracker.png",
    github: "https://github.com/hjungwoo01/expense_tracker",
  },
  {
    name: "Todo App",
    description:
      "Todo App is a comprehensive task management application designed to help users efficiently organize their tasks. The frontend is built with Laravel, and the backend is powered by MySQL. Users can create new todo items with optional descriptions and due dates, view all tasks categorized by completion status, update existing items, delete tasks, and mark items as completed with a tracked completion date. The app orders tasks by due date and completed tasks by completion date, providing an intuitive and organized task management experience.",
    image: "/todo-app.png",
    github: "https://github.com/hjungwoo01/laravel-todo-app",
  },
  {
    name: "AB3-17",
    description:
      "AB3-17 is a project developed as part of NUS CS2103R to assist in migrating code from Java 11 to Java 17. This migration project ensures compatibility and future-proofing for students enrolled in CS2103/T. The effort involved updating the codebase and dependencies to leverage the features and improvements of Java 17.",
    image: "/ab3-17.png",
    github: "https://github.com/hjungwoo01/AB3-J17",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 border-0 rounded" style={{ backgroundColor: "#3CB043" }}></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 md:items-center">
                  <div className="relative h-96 w-full md:w-1/2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />

                  </div>
                  <div className="mt-8 md:mt-0 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
