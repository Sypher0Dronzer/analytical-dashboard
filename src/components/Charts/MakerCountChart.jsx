import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useStore } from "../../store/fetchAll";
import { motion } from "framer-motion";

export  const MakerCountChart = () => {
  const { vehiclesByMake } = useStore();

  return (
    <motion.div
			className='bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
      <h2 className="text-lg font-bold  mb-2">Top 10 Total Vehicles By Make</h2>
      
      <ResponsiveContainer width="100%" height={500}>
        <BarChart layout="vertical" data={vehiclesByMake}>
          <XAxis type="number" 
          tick={{ fontSize: 13, fill: "#9ca3af" }}
          />
          <YAxis type="category" dataKey="name" width={100} 
          tick={{ fontSize: 13, fill: "#9ca3af" }} 
          />
          <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
          <Bar dataKey="value" fill="#6366F1" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

