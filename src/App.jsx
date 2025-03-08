import { useEffect } from "react";
import { useStore } from "./store/fetchAll";
import Cafv from "./components/Charts/Cafv";

import Header from "./components/common/Header";
import StatCard from "./components/common/StatCard";
import { BarChart2, Loader, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import YrVsCountLineChart from "./components/Charts/YrVsCountLineChart";
import { MakerCountChart } from "./components/Charts/MakerCountChart";
import CompanyAreaGraph from "./components/Charts/CompanyAreaGraph";
import VehicleType from "./components/Charts/VehicleType";
import VehicleTable from "./components/VehicleTable";
import { CountryCountChart } from "./components/Charts/CountryCountChart";
import { CityCountChart } from "./components/Charts/CityCountChart";

export default function App() {
  const { fetchData, isFetching } = useStore();
  useEffect(() => {
    fetchData();
  }, []);

  if (isFetching) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-white size-10" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-gray-100 h-screen overflow-x-hidden">
      <Header title="Overview" />
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard
          name="Total Vehicles"
          icon={Zap}
          value="$12,345"
          color="#6366F1"
        />
        <StatCard
          name="Average Electric Range"
          icon={Users}
          value="1,234"
          color="#8B5CF6"
        />
        <StatCard
          name="Total BEV Vehicles"
          icon={ShoppingBag}
          value="567"
          color="#EC4899"
        />
        <StatCard
          name="Total PHEV Vehicles"
          icon={BarChart2}
          value="12.5%"
          color="#10B981"
        />
      </motion.div>
      {/* <VehicleTable/> */}
      <CompanyAreaGraph />
      <MakerCountChart />
      <CountryCountChart/>
      <CityCountChart/>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <Cafv />
        <VehicleType />
      </div>
      <YrVsCountLineChart />
    </div>
  );
}
