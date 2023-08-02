import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#434344] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-2">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-black">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="pb-[20px] sm:text-right text-4xl font-bold">
            <p>Hi, I'm Vinayak, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a dedicated and aspiring software developer with a strong
              focus on front-end development and a burgeoning interest in
              backend technologies. As I delve into backend development, I am
              eager to learn and apply technologies such as Node.js and
              databases to build robust server-side functionalities that
              complement my front-end expertise. With a growth-oriented mindset
              and a commitment to continuous learning, I am excited to
              contribute my developing skill set to the success of innovative
              software projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
