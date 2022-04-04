import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

const Blogs = () => {
  return (
    <div className="m-8 min-h-screen">
      <div>
        <p className="p-2 flex gap-4 text-2xl font-serif">
          <QuestionMarkCircleIcon className="h-6 w-6 text-purple-500" /> What is
          Context API?
        </p>
        <p className="p-2 text-xl text-cyan-900">
          In react application, context API provide a way to create global
          variable. For passing data from one component to another need multiple
          props drilling. Here props drilling can avoid by using Context API. It
          return a provider and consumer. Provider component hold the data to
          serve the consumers. The data pass as context provider value and
          consumers can use the data without using props.
        </p>
      </div>
      <div>
        <p className="p-2 flex gap-4 text-2xl font-serif">
          <QuestionMarkCircleIcon className="h-6 w-6 text-purple-500" /> What is
          Semantic Tag?
        </p>
        <p className="p-2 text-xl text-cyan-900">
          It is HTML element that that describe their meaning in their name.
          This tags are easy to identify by the developers and also for search
          engines.
        </p>

        <p className="p-2 text-xl text-cyan-900">
          {" "}
          Examples: Header, Footer, Nav, Article, Section, Title etc. Here Each
          tag name identify exactly purpose of their use. Other tags like
          anchor, paragraph are write as shorted keyword.
        </p>
      </div>
      <div>
        <p className="p-2 flex gap-4 text-2xl font-serif">
          <QuestionMarkCircleIcon className="h-6 w-6 text-purple-500" />
          Inline ,Inline block, Block element?
        </p>
        <p className="p-2 text-xl text-cyan-900">
          This three CSS property describe the nature of an element.
          <li className="my-2">
            <span className="font-bold">Inline:</span> Inline elements have no
            effect of height and width so any other inline element can stay in
            same line. Example: anchor(a)
          </li>
          <li className="my-2">
            <span className="font-bold">Block:</span> Block elements reserve the
            whole region of row and every separate block elements will stay in
            different line. Heigth and width of block element can set to adjust
            it. Example: div, p, section
          </li>
          <li>
            <span className="font-bold">Inline Block:</span> This element will
            stay as inline elements but it is possible to set its heigth and
            width if require.
          </li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
