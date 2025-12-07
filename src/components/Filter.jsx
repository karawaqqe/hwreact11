import React from "react";

function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Фільтр завдань..."
      className="filter"
    />
  );
}

export default Filter;
