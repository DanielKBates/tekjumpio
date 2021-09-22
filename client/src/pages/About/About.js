import React from "react";

import Container from "../../components/Container";
import "./About.css";
import { Link } from "react-router-dom";
// import css
import AnimatedCard from "../../components/AnimatedCard";

const About = () => {
  return (
    <>
      <div className="multiGradient animate-animateGradient pt-6">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl xl:text-5xl font-extrabold text-white sm:text-4xl">
            <span className="block">Our Mission</span>
          </h2>
          <p className="mt-4 text-lg xl:text-xl leading-6 text-indigo-200">
            We at Tekjump have made it our mission to provide not only the
            training you need to be a full stack web developer, but also the
            crucial real world experience you need to land the job of your
            dreams. We've said 'enough' to the entry level jobs asking for 3+
            years of experience. Wow interviewers with your portfolio of{" "}
            <span className="font-bold">REAL PROJECTS</span>. Impress your new
            managers with your
            <span className="font-bold">
              {" "}
              COLLABORATIVE DEVELOPMENT SKILLS
            </span>
            . Join an ever growing community of developers, get the training
            you need, and <span className="italic">jump</span> into your new
            career.
          </p>

        </div>
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-20">
          <AnimatedCard
            threshold={0.1}
            activeClassName="opacity-100 transition duration-500 ease-in-out translate-y-0 grid grid-cols-2 gap-20"
            inactiveClassName="opacity-0 transition duration-500 ease-in-out transform translate-y-10 grid grid-cols-2 gap-20"
          >
            <div className="flex justify-center items-center pt-20 flex-col">
              <h1 className="text-white font-semibold text-4xl">
                Teaching Skills
              </h1>
              <p className="text-gray-50 text-xl my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, ipsam assumenda numquam odit, fugit id odio veniam
                eum accusantium maiores eligendi aliquam consectetur voluptatem
                et itaque magnam quis? Veritatis, delectus. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Aspernatur debitis
                molestias soluta quae, quia quod qui veritatis dolor distinctio
                quam perferendis saepe dolorem illo! Nemo quod autem consectetur
                quasi placeat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam aperiam iure voluptates labore
                exercitationem qui explicabo similique accusantium dolorum
                nostrum? Id modi tenetur voluptates at, aut voluptatem ullam
                voluptatibus? Ratione.
              </p>
            </div>
            <div className="bg-gray-400 flex items-center justify-center rounded-3xl  ">
              IMAGE
            </div>{" "}
          </AnimatedCard>
          <AnimatedCard
            threshold={0.1}
            activeClassName="opacity-100 transition duration-500 ease-in-out translate-y-0 grid grid-cols-2 gap-20"
            inactiveClassName="opacity-0 transition duration-500 ease-in-out transform translate-y-10 grid grid-cols-2 gap-20"
          >
            <div className="bg-gray-400 flex items-center justify-center rounded-3xl  ">
              IMAGE
            </div>
            <div className="flex justify-center items-center pt-20 flex-col">
              <h1 className="text-white font-semibold text-4xl">
                Building Real World Experience
              </h1>
              <p className="text-gray-50 text-xl my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, ipsam assumenda numquam odit, fugit id odio veniam
                eum accusantium maiores eligendi aliquam consectetur voluptatem
                et itaque magnam quis? Veritatis, delectus. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Quisquam tenetur excepturi
                placeat enim quia! A maiores minima ipsa incidunt reiciendis!
                Provident dolores repellendus nesciunt minus quod officiis velit
                odit consequuntur? explicabo similique accusantium dolorum
                nostrum? Id modi tenetur voluptates at, aut voluptatem ullam
                voluptatibus? Ratione.
              </p>
            </div>
          </AnimatedCard>
          <AnimatedCard
            threshold={0.1}
            activeClassName="opacity-100 transition duration-500 ease-in-out translate-y-0 grid grid-cols-2 gap-20"
            inactiveClassName="opacity-0 transition duration-500 ease-in-out transform translate-y-10 grid grid-cols-2 gap-20"
          >
            <div className="flex justify-center items-center pt-20 flex-col">
              <h1 className="text-white font-semibold text-4xl">
                Jump-starting Your New Career
              </h1>
              <p className="text-gray-50 text-xl my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique, ipsam assumenda numquam odit, fugit id odio veniam
                eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                vitae explicabo iste dolorum quidem pariatur est, nostrum
                placeat recusandae adipisci perspiciatis vel eaque veritatis
                exercitationem delectus dolorem deleniti. Illum, nulla!
                accusantium maiores eligendi aliquam consectetur voluptatem et
                itaque magnam quis? Veritatis, delectus. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aspernatur debitis molestias
                soluta quae, quia quod qui veritatis dolor distinctio quam
                perferendis saepe dolorem illo! Nemo quod autem consectetur
                quasi placeat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam aperiam iure voluptates labore
                exercitationem qui explicabo similique accusantium dolorum
                nostrum? Id modi tenetur voluptates at, aut voluptatem ullam
                voluptatibus? Ratione.
              </p>
            </div>
            <div className="bg-gray-400 flex items-center justify-center rounded-3xl  ">
              IMAGE
            </div>{" "}
          </AnimatedCard>
        </div>

        <div className="mt-28">
          <h1 className="flex justify-center text-4xl text-white">
            STUDENT PORTFOLIOS
          </h1>
          <div className="hidden sm:flex p-8">
            <Link className="card" to="/">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>

              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </Link>
            <Link className="card" to="/">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </Link>
            <Link className="card" to="/">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </Link>
            <Link className="card" to="/">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </Link>
            <Link className="card" to="/">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </Link>
            <Link className="card" to="/">
              <h3 className="title">PROJECT X</h3>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <p className="mt-32 pl-4 pr-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;


