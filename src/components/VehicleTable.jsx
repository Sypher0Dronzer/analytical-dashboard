import React, { useState } from "react";
import { useStore } from "../store/fetchAll";
import { Search } from "lucide-react";

const VehicleTable = () => {
  const { modelTableData, totalVehicles } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(modelTableData);
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered =
      modelTableData?.filter((data) => {
        const model = data.model?.toLowerCase() || "";
        const make = data.make?.toLowerCase() || "";
        return model.includes(term) || make.includes(term);
      }) || [];

    setFilteredProducts(filtered);
  };
  return (
    <div className="overflow-x-auto sm:p-4 p-2 bg-gray-900 rounded-lg shadow-lg">
      <div className="flex justify-between items-center flex-wrap my-4 gap-2">
        <h1 className="font-semibold text-xl">Tabulated Data of Models</h1>
        <div className="relative min-w-[350px]">
          <input
            type="text"
            placeholder="Search Models or Brands..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:max-w-none max-w-[500px]"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      {/* Table Begins here */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-700 text-white text-sm sm:text-sm md:text-base sm:font-semibold font-medium">
            <th className="sm:p-3 py-2 px-1 hidden sm:block"></th>
            <th className="sm:p-3 py-2 px-1">Model</th>
            <th className="sm:p-3 py-2 px-1">Brand</th>
            <th className="sm:p-3 py-2 px-1 text-center">Type</th>
            <th className="sm:p-3 py-2 px-1 text-center">Produced Units</th>
            <th className="sm:p-3 py-2 px-1 text-center hidden sm:block">% of Total Vehicles</th>
          </tr>
        </thead>
        <tbody className="text-xs sm:text-sm">
          {filteredProducts?.map((data, index) => {
            if (index == 132) return;
            return (
              <tr
                key={index}
                className={`border-b border-gray-700 ${
                  index % 2 != 0 ? "bg-gray-800" : "bg-gray-850"
                } hover:bg-gray-700 transition`}
              >
                <td className="sm:p-3 py-2 px-1 text-gray-300 hidden sm:block">
                  {index + 1}
                </td>
                <td className="sm:p-3 py-2 px-1 text-gray-200">{data.model}</td>
                <td className="sm:p-3 py-2 px-1 text-gray-200">{data.make}</td>
                <td className="sm:p-3 py-2 px-1 text-gray-200 text-center">{data.evType}</td>
                <td className="sm:p-3 py-2 px-1 text-gray-200 text-center">
                  {data.count}
                </td>
                <td className="p-3 text-gray-200 text-center  hidden sm:block">
                  {((data.count / totalVehicles) * 100).toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
