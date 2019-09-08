import React, { useState } from 'react';
import TableHeadColumn from './ResultTableHeadColumn.jsx';

export default function ResultTable({
  numberOfRows = 5,
  tableHeadStructure,
  children,
  startItemBy,
}) {
  const [sort, setSort] = useState({
    by: 'stars',
    isOrderByDESC: true,
    type: 'Number',
  });

  const changeSorting = (sortBy, type = '') => {
    if (sortBy === sort.by) {
      setSort({
        ...sort,
        isOrderByDESC: !sort.isOrderByDESC,
      });
    } else {
      setSort({
        by: sortBy,
        isOrderByDESC: true,
        type,
      });
    }
  };

  let resultModifier = sort.isOrderByDESC ? -1 : 1;
  if (sort.type === 'String') resultModifier *= -1;
  /**
   *  convertFunction is constructor of object which is name like sort.type eg.:
   *  sort.Type === "Number" so convertFunction(x) is Number(x).
   */
  // eslint-disable-next-line no-new-func
  const convertFunction = Function(`return ${sort.type}`)();
  children.sort((a, b) => {
    if (convertFunction(a[sort.by]) === convertFunction(b[sort.by])) {
      return 0;
    }
    if (convertFunction(a[sort.by]) > convertFunction(b[sort.by])) {
      return 1 * resultModifier;
    }
    return -1 * resultModifier;
  });

  return (
    <table className="table is-fullwidth table is-bordered">
      <thead>
        <tr>
          {tableHeadStructure.map(item => (
            <TableHeadColumn
              key={item.name}
              onClick={() => changeSorting(item.name, item.type)}
              sortIco={sort.by === item.name ? sort.isOrderByDESC : undefined}
            >
              {item.text}
            </TableHeadColumn>
          ))}
        </tr>
      </thead>
      <tbody>
        {children.slice(startItemBy, numberOfRows + startItemBy).map(row => (
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
