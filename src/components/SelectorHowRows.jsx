import React from 'react';

export default function SelectorHowRows({ maxNumberOfRows, stepBy, onChange }) {
  if (!onChange) {
    throw new ReferenceError('Not add props onChange');
  }
  const options = [];
  for (let i = stepBy; i <= maxNumberOfRows; i += stepBy) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="select is-small">
      <select
        onChange={e => {
          onChange(e.target.value);
        }}
      >
        {options}
      </select>
    </div>
  );
}
