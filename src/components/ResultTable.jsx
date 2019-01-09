import React from 'react';

export default function ResultTable(props) {
  const numberOfRows = props.numberOfRows || 5;
  return (
    <table className="table is-fullwidth table is-bordered">
      <thead>
        <tr>
          <th className="has-text-right">ID</th>
          <th className="has-text-centered">Repo Title</th>
          <th className="has-text-centered">Owner</th>
          <th className="has-text-centered">Stars</th>
          <th className="has-text-centered">Create at</th>
        </tr>
      </thead>
      <tbody>
        {props.children
          .slice(props.startItemBy, numberOfRows + props.startItemBy)
          .map(row => (
            <tr key={row.id}>
              <td className="has-text-centered">{row.id}</td>
              <td className="has-text-centered">{row.title}</td>
              <td className="has-text-centered">{row.owner}</td>
              <td className="has-text-centered">{row.stars}</td>
              <td className="has-text-centered">{row.createAt}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
