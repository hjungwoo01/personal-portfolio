import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl py-4">
      <hr className="w-full h-0.5 mx-auto bg-gray-300 border-0"></hr>
      <div className="flex flex-col items-center justify-between mt-4 md:flex-row text-gray-700">
        <div className="flex flex-row items-center space-x-1 text-gray-600 dark:text-gray-300">
          <span>© 2025 Jay Hong</span>
          <a href="/" className="hover:underline">
            Portfolio
          </a>
        </div>
        <div className="flex flex-row items-center space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/hjungwoo01" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
              size={30}
            />
          </a>
          <a href="https://www.linkedin.com/in/jay-hong-661a4145/" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className="hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
