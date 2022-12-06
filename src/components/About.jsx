import React from "react";
import "animate.css";

const About = () => {
  return (
    <div name="about"
    className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> 
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 "><span className="text-bold text-5xl">A</span>BOUT</p>
        </div>
        <p className="text-xl mt-20">
       <b className="text-5xl text-gray-600"><em>Hello world!</em> </b>I'm Aditi Singh, a Front-End Web Developer. I graduated
       from  chhattisagarh Swami Vivekanand Technical, University with a 
       bachelor of technology in Computer Science. I like making fun, interactive
       things with code. I'm passionate about Javascript, React.js and many more Front-End technologies.

        </p>
        <br />
        <p className="text-xl">
        I learnt JavaScript and many technologies which is help me to develop our final year project(frenzzy),
         it's a realtime chat application. I had done many small projects related to web development, and i'm passionate
          about to learning new technologies as well as also a quick learner.
        In my free time i learnt how to code with React.js or other programming language, that's why i love 
        coding.
        </p>
      </div>
    </div>
  );
};

export default About;
