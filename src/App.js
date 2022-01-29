import React from "react";
import Accordian from "./component/Accordion";

const items = [
  { title: "What is React?", content: "React is a front end js framework" },
  {
    title: "Why use React?",
    content: "It is very good",
  },
  { title: "How to use react?", content: "just learn react" },
];

export default () => {
  return (
    <div>
      <Accordian items={items} />
    </div>
  );
};
