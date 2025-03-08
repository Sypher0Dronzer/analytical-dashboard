import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useStore } from "../../store/fetchAll";
import { motion } from "framer-motion";

const colors = [
  "#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#EF4444", "#3B82F6", "#22C55E",
  "#EAB308", "#DB2777", "#14B8A6", "#9333EA", "#F87171", "#FACC15", "#4ADE80", "#60A5FA",
  "#D946EF", "#F472B6", "#A78BFA", "#F97316", "#16A34A", "#BE185D", "#06B6D4", "#B91C1C",
  "#FBBF24", "#0EA5E9", "#7C3AED", "#EA580C", "#2563EB", "#15803D", "#C026D3", "#E11D48",
  "#E879F9", "#F43F5E", "#0284C7", "#10B981", "#D97706", "#4F46E5"
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div className="bg-gray-800 p-3 border border-gray-700 rounded-md shadow-lg text-gray-200">
      <p className="text-sm font-semibold mb-2">{`Year: ${label}`}</p>
      <div className="grid grid-cols-3 gap-2 text-xs">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.name}:</span>
            <span className="font-semibold">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompanyAreaGraph = () => {
  const { vehiclesByCompanyAndYear } = useStore();

  // Assign colors to companies
  const companyColors = vehiclesByCompanyAndYear.reduce((acc, item, index) => {
    acc[item.company] = colors[index ]; // Cycle through colors
    return acc;
  }, {});

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Total Vehicles By Model Year
      </h2>

      <div className="pr-2">
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" type="number" domain={[1997, 'dataMax']} interval={'preserveStartEnd'} tick={{ fontSize: 13, fill: "#9ca3af" }}/>
            <YAxis tick={{ fontSize: 13, fill: "#9ca3af" }}/>
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: "12px", fontWeight: "thin" }} />

            {vehiclesByCompanyAndYear.map((companyData) => (
              <Area
                key={companyData.company}
                type="monotone"
                data={companyData.data}
                dataKey="count"
                name={companyData.company}
                stackId="1"
                stroke={companyColors[companyData.company]}
                fill={companyColors[companyData.company]}
                fillOpacity={0.7}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CompanyAreaGraph;
