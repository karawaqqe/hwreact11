import React from "react";

function Info({ total, completed }) {
  return (
    <div className="info">
      <span>Всього: {total}</span>
      <span>Виконано: {completed}</span>
    </div>
  );
}

export default Info;
