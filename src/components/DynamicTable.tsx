import React from "react";

interface DynamicTableProps {
  data: Record<string, string>[];
  groupBy: string;
  columnHeaders?: Record<string, string>;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ data, groupBy, columnHeaders = {} }) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  const keySet = new Set<string>();
  data.forEach((row) => {
    Object.keys(row).forEach((key) => keySet.add(key));
  });
  const allKeys = Array.from(keySet);

  const valueKeys = allKeys.filter((key) => key !== groupBy);

  const groupedData: Record<string, Record<string, string>[]> = {};
  data.forEach((row) => {
    const key = String(row[groupBy] ?? "—");
    if (!groupedData[key]) groupedData[key] = [];
    groupedData[key].push(row);
  });

  const prettify = (key: string) =>
    key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim();

  return (
    <table className="w-full border-collapse text-sm lg:text-base">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-800">
            {columnHeaders?.[groupBy] || prettify(groupBy)}
          </th>
          {valueKeys.map((key) => (
            <th
              key={key}
              className="border border-gray-300 p-3 text-left font-semibold text-gray-800"
            >
              {columnHeaders?.[key] || prettify(key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(groupedData).map(([groupVal, rows]) =>
          rows.map((row, i) => (
            <tr key={`${groupVal}-${i}`} className="hover:bg-gray-50">
              {i === 0 && (
                <td
                  rowSpan={rows.length}
                  className="border border-gray-300 p-3 font-medium text-gray-800 align-top"
                >
                  {groupVal}
                </td>
              )}
              {valueKeys.map((key) => (
  <td key={key} className="border border-gray-300 p-3 text-gray-600">
    {String(row[key] ?? "—")}
  </td>
))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DynamicTable;
