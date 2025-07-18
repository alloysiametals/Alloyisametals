
interface CompositionProps {
  data: { element: string; min?: number; max?: number | string }[];
}

const Composition = ({ data }: CompositionProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 mb-8">
    <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Composition</h2>
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3">Element</th>
          <th className="border border-gray-300 p-3">Min</th>
          <th className="border border-gray-300 p-3">Max</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td className="border border-gray-300 p-3">{item.element}</td>
            <td className="border border-gray-300 p-3">{item.min || "--"}</td>
            <td className="border border-gray-300 p-3">{item.max || "--"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Composition;
