import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const [cards, setCards] = useState([
    {
      desc: "Project Proposal Document",
      filesize: "1.2 MB",
      close: true,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "Wireframe Sketch",
      filesize: "850 KB",
      close: false,
      tag: { isopen: false, tagtitle: "Upload", tagcolor: "blue" },
    },
    {
      desc: "Client Feedback Notes",
      filesize: "500 KB",
      close: true,
      tag: { isopen: true, tagtitle: "Upload", tagcolor: "blue" },
    },
  ]);

  const handleAction = (type, index) => {
    if (type === "close") {
      setCards((prev) => prev.filter((_, i) => i !== index));
    } else if (type === "download") {
      alert(`Downloading ${cards[index].desc}...`);
    }
  };

  return (
    <div>
      <div
        ref={ref}
        className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
      >
        {cards.map((item, index) => (
          <Card
            key={index}
            data={item}
            refrence={ref}
            index={index}
            onAction={handleAction}
          />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
