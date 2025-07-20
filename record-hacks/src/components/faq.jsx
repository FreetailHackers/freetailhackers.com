import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import Markdown from "react-markdown";
import "./faq.css"

const FAQ = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("FAQ").select("*");
      setData(data);
    };

    getData();
  }, []);

  if (!data || data.length === 0) {
    return null;
  }

  // Calculate the midpoint to split the data array in half
  const halfIndex = Math.ceil(data.length / 2);
  const leftColumnData = data.slice(0, halfIndex);
  const rightColumnData = data.slice(halfIndex);

  return (
    <section className={`mx-auto mb-20 max-w-[50rem]`} id="faq">
      <h2 className="text-5xl text-center md:text-left text-orange font-heading font-bold tracking-wider mb-7">ANY QUESTIONS?</h2>

      <div className="flex flex-wrap gap-2 md:flex-nowrap md:gap-11">
        <div className="flex flex-col gap-2">
          {leftColumnData.map((item, index) => (
            <FAQQuestion
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {rightColumnData.map((item, index) => (
            <FAQQuestion
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Split the answer on one or more newlines to create paragraphs
  const paragraphs = answer.split(/\n+/).filter(Boolean);

  return (
    <div
      className={`ml-5`}
    >
      <h3 onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer select-none pb-2 font-bold`}>
        <img src="./assets/FAQ-icon.svg" className={`relative left-[-24px] top-[18px] transition-transform duration-300 ${isOpen ? "transform-[rotate(135deg)]" : "transform-[rotate(0)] colors"}`}/>
        {question}
      </h3>
      <div className={`whitespace-pre-line max-h-0 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100 block' : ''}`}>
        {paragraphs.map((para, index) => (
          // <p key={index} className="faq-answer-paragraph">
          //   {para}
          // </p>
          // <br/>
          <div className={`reactMarkdown`} key={index}><Markdown children={para}/></div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
