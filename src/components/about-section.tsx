import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "HTML/CSS" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Flutter" },
  { skill: "Spring Boot" },
  { skill: "Firebase" },
  { skill: "Git" },
  { skill: "Jupyter Notebooks" },
  { skill: "Selenium" },
  { skill: "Vue.js" },
  { skill: "SQL" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jay and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Singapore.
            </p>
            <br />
            <p>
              I am currently pursuing a Bachelor of Computing in Computer Science at the National University of Singapore (NUS), with an expected graduation in 2026. My coursework includes Algorithms, AI, Machine Learning, Software Engineering, Linear Algebra, and Discrete Math. I also serve as a Teaching Assistant for Data Structures and Algorithms (CS2040).
            </p>
            <br />
            <p>
              I have a diverse professional background, having worked as a Fullstack Developer at Arrowster in Vietnam and QUBER in South Korea. At Arrowster, I created dynamic web pages using HTML, CSS, and Bootstrap, automated QA testing with Selenium and Python, resolved critical issues in Vue.js, and improved application performance through load testing with JMeter. At QUBER, I developed a comprehensive Android scheduler and memo app, and integrated an AI chatbot to enhance user experience.
            </p>
            <br />
          
            <p>
              I am committed to continuous learning and improvement, always seeking out new challenges and opportunities to expand my skills. My passion for technology drives me to explore innovative solutions and stay at the forefront of industry developments. I look forward to leveraging my expertise in exciting and impactful projects, and I am eager to collaborate with like-minded professionals to achieve great things.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
