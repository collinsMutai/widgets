import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is Lorem Ipsum?",
    content: "Lorem Ipsum is simply dummy text of the printing a",
  },
  {
    title: "What is Lorem",
    content: "Lorem Ipsum is simply dummy text of the printing a",
  },
  {
    title: "What is",
    content: "Lorem Ipsum is simply dummy text of the printing a",
  },
];

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
