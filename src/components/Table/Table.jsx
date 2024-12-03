import PropTypes from "prop-types";
const Table = ({ data, columns }) => {
  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}
    >
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f4f4f4",
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} style={{ textAlign: "left" }}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
