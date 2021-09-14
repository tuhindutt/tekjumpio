import React from "react";

import Container from "../../components/Container";
import AboutTabs from "./AboutTabs";
import "./About.css";

// import css

const About = () => {
  return (
    <div className="pt-24">
      <Container>

        <div className="bg-opacity-60 shadow-3xl rounded-xl p-8 mb-10 text-center">
          <div>
            <h1 className="text-7xl text-white text-center pb-4 animate-fadeInText">
              Our Mission
            </h1>

            <p className="text-white font-thin text-base leading-normal p-2 animate-fadeInText text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
              nulla! Maiores et perferendis eaque, exercitationem praesentium
              nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
            </p>

            <p className="text-white font-thin text-base leading-normal p-2 animate-fadeInText text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
              nulla! Maiores et perferendis eaque, exercitationem praesentium
              nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil.Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
            </p>

          </div>
        </div>

        <AboutTabs />

        {/* <div className="hidden sm:flex p-8">
          <div className="card">
            <h3 className="title">Reviews</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>

            <p className="mt-32 pl-4 pr-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="card">
            <h3 className="title">Reviews</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <p className="mt-32 pl-4 pr-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="card">
            <h3 className="title">Reviews</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <p className="mt-32 pl-4 pr-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="card">
            <h3 className="title">Reviews</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <p className="mt-32 pl-4 pr-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="card">
            <h3 className="title">Reviews</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <p className="mt-32 pl-4 pr-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="card">
            <h3 className="title">Reviews</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <p className="mt-32 pl-4 pr-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default About;
