import React, {useState} from "react";
import Title from "../UI/Title";
import FaqsImage from '../assets/FaqsImage.svg'
import FaqsData from "../data/FaqsData";
import FaqCard from "../UI/FaqCard";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="mt-20 lg:mt-48 pt-5 flex flex-col" id="Faqs">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-2/3">
          <Title name={"FAQs"} />
          <h2 className="text-wrap md:text-7xl text-5xl mt-10">Common Questions.</h2>
          <p className="text-base mt-5 mb-5">
          The online form also includes an extensive set of resources to guide users through the financial disclosure program. Alongside the main application form, users can find links to a comprehensive list of frequently asked questions (FAQs) covering key areas of the program. These FAQs address common concerns about eligibility, requirements, deadlines, and the specific steps involved in the disclosure process, making it easier for users to understand what is expected and how to comply.
          </p>
        </div>
        <div>
          <img src={FaqsImage} alt="faqs-section-image" />
        </div>
      </div>
      <div className="lg:w-2/3 w-full mt-5">
        {FaqsData.map((a,index)=>{
          return (
            <FaqCard question={a.question} answer={a.answer} key={index} isActive={activeIndex === index}
            onToggle={() => handleToggle(index)} />
          )
        })}
      </div>
    </section>
  );
};

export default Faqs;
