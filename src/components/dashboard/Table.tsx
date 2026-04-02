type Column = {
  header: string;
  key: string;
};

type TableProps = {
  data: Record<string, any>[];
  columns: Column[];
  classname?: string;
};

const Table = ({ data, columns, classname }: TableProps) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th className={classname} key={col.key}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td className={classname} key={col.key}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
