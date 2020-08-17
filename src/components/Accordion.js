import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (index) => {
    setActiveIndex(index);
  };
  const displayItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {displayItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
