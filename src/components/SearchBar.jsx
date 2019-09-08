import React from 'react';

export default function SearchBar({ onChange }) {
  if (!onChange) {
    throw new ReferenceError('Not add props onChange');
  }

  let timeoutFingerprint = null;

  return (
    <div className="control has-icons-right">
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={e => {
          const { value } = e.target;
          clearInterval(timeoutFingerprint);
          timeoutFingerprint = setTimeout(() => {
            clearInterval(timeoutFingerprint);
            onChange(value);
          }, 1500);
        }}
      />
      <span className="icon is-small is-right">
        <i className="fas fa-search" />
      </span>
    </div>
  );
}
