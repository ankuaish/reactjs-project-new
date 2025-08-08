import React, { useEffect, useState } from "react";

export const Clock = ({ color }) => {
  const [clock, setClock] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1
        style={{
          color: color,
          border: "2px",
          background: "#000",
          margin: "20px",
        }}
      >
        {clock}
      </h1>
    </div>
  );
};
