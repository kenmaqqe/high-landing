import React from "react";
import Title from "../UI/Title";
import AboutUsImg from "../assets/AboutUs.svg";

const AboutUs = () => {
  return (
    <section className="mt-20 lg:mt-48 pt-5 flex flex-col" id="AboutUs">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-1/2 flex justify-center">
          <img src={AboutUsImg} alt="About-us-section-img" />
        </div>
        <div className="md:w-1/2">
          <Title name={"About Us"} />
          <h2 className="text-wrap md:text-7xl text-5xl mt-10">
            Faster, friendlier feedback loops make life easier.
          </h2>
          <p className="text-base mt-5 mb-5">
            Add a Viewer to your team so they can see everything you share, or
            invite people to individual documents. It’s up to you. Stakeholders
            can check out designs in their web browser, test prototypes and
            leave feedback for free.
          </p>
          <ul className="suare mx-4 mt-5 hidden md:block">
          <li><p>Shared Cloud Libraries, for a single source of truth</p></li>
          <li><p>Prototype previews for user testing and research</p></li>
          <li><p>Easy organization with projects</p></li>
          <li><p>Free developer handoff, right inside the browser</p></li>
          <li><p>Two-factor authentication and SSO</p></li>
        </ul>
        </div>
      </div>
      <div className="flex justify-center md:hidden">
        <ul className="suare mx-4 mt-5">
          <li><p>Shared Cloud Libraries, for a single source of truth</p></li>
          <li><p>Prototype previews for user testing and research</p></li>
          <li><p>Easy organization with projects</p></li>
          <li><p>Free developer handoff, right inside the browser</p></li>
          <li><p>Two-factor authentication and SSO</p></li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
