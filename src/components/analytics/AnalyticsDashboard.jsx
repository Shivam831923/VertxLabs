import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { LineChart } from "./LineChart";
import { WorldMapChart } from "./WorldMapChart";
import Countries from "./Countries";
import DropDownButton from "../ui/DropDownButton";

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [visitorFilter, setVisitorFilter] = useState("Visitors");
  const [timeFilter, setTimeFilter] = useState("Last 30 days");
  const [showVisitorDropdown, setShowVisitorDropdown] = useState(false);
  const [showVisitorDropdownInsight, setShowVisitorDropdownInsight] =
    useState(false);
  const [showVisitorDropdownDemographics, setShowVisitorDropdownDemographics] =
    useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("Visitors");
  const [add, setAdd] = useState("+ Add");
  const [selectedMetrics, setSelectedMetrics] = useState(["Visitors"]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const metricsData = {
    Visitors: {
      value: "13.49K",
      percentage: "+469%",
      subValue: "(897)",
      color: "#FFFFFF",
      data: [
        300, 500, 800, 1300, 1200, 1000, 900, 800, 1000, 1300, 800, 700, 600,
        700, 800, 700, 600, 2000, 800, 600, 1000, 800, 600, 1200, 1000, 1400,
        600, 1200, 1600,
      ],
    },
    Connections: {
      value: "3.49K",
      percentage: "+180%",
      subValue: "(497)",
      color: "#A855F7", // Purple color
      data: [
        250, 400, 700, 1500, 1300, 1200, 1100, 1000, 400, 1000, 600, 400, 1100,
        900, 850, 800, 850, 1500, 900, 700, 900, 850, 900, 950, 1000, 1200, 650,
        700, 1200,
      ],
    },
    Interactions: {
      // value: "5.27K",
      // percentage: "+215%",
      // subValue: "(356)",
      // color: "#22C55E", // Green color
      // data: [
      // 200, 350, 600, 900, 1100, 950, 850, 950, 700, 800, 900, 750, 850, 950, 900, 850, 800, 1200, 700, 650, 850, 900,
      // 750, 1100, 900, 1000, 800, 900, 1100,
      // ],
    },
    Impressions: {
      // value: "24.8K",
      // percentage: "+325%",
      // subValue: "(1.2K)",
      // color: "#3B82F6", // Blue color
      // data: [
      // 400, 600, 900, 1400, 1300, 1100, 1000, 950, 1100, 1400, 900, 800, 750, 850, 950, 900, 800, 2200, 1000, 800,
      // 1200, 1000, 800, 1400, 1200, 1600, 800, 1400, 1800,
      // ],
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMetric = (metric) => {
    if (selectedMetrics.includes(metric)) {
      setSelectedMetrics(selectedMetrics.filter((m) => m !== metric));
    } else {
      setSelectedMetrics([...selectedMetrics, metric]);
    }
    setShowAddDropdown(false);
  };

  const handleAddClick = () => {
    setShowAddDropdown(!showAddDropdown);
  };

  return (
    <div className="h-full overflow-auto  bg-[#1D1D1D] text-white w-[100%]">
<div className="bg-[#000000] border-b border-gray-800">
  <div className="flex w-full overflow-x-auto">
    <button
      onClick={() => setActiveTab("overview")}
      className={`text-lg px-4 py-4 font-manrope font-semibold text-[16px] leading-[100%] tracking-[0em] ${
        activeTab === "overview"
          ? "text-white border-b-2 border-white md:border-b-0"
          : "text-gray-400"
      }`}
    >
      Overview
    </button>

<button
  onClick={() => setActiveTab("report")}
  className={`block md:hidden text-lg px-4 py-4 font-manrope font-semibold text-[16px] leading-[100%] tracking-[0em] ${
    activeTab === "report"
      ? "text-white border-b-2 border-white"
      : "text-gray-400"
  }`}
>
  Reports
</button>

    <button
      onClick={() => setActiveTab("demographics")}
      className={`text-lg px-4 py-4 font-manrope font-semibold text-[16px] leading-[100%] tracking-[0em] ${
        activeTab === "demographics"
          ? "text-white border-b-2 border-white"
          : "text-gray-400"
      }`}
    >
      Demographics
    </button>

    <div className="flex-1"></div>
    <button
      onClick={() => setActiveTab("more")}
      className={`hidden md:block text-lg px-4 md:px-8 py-4 w-[98px] ${
        activeTab === "more"
          ? "text-white border-b-2 border-white"
          : "text-gray-400 border-l border-gray-700"
      }`}
    >
      More
    </button>
  </div>
</div>


      <div className="p-4 md:p-6">
        {activeTab === "overview" && (
          <div>
            <h1 className="font-manrope font-extrabold text-[28px] leading-[100%] tracking-[-0.04em] text-white text-3xl md:text-4xl font-bold mb-6 ml-2">
              Overview
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
              <Card className="col-span-1 lg:col-span-2 bg-[#000000] border border-[#1D1D1D] border[1px] rounded-lg overflow-hidden text-white">
                <div className="max-w-5xl mx-auto">
                  <div className="bg-black rounded-lg p-6">
                
                    <div className="flex flex-wrap gap-3 mb-6">
                
                      <DropDownButton
                        showVisitorDropdown={showVisitorDropdown}
                        setShowVisitorDropdown={setShowVisitorDropdown}
                      />

                      <div className="relative">
                        <button
                          className="flex items-center justify-between gap-2 px-4 py-2 bg-[#000000] w-[140px] h-[24px] rounded-[20px] border border-[1px]"
                          onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                        >
                          <span className="font-manrope font-semibold text-[12px] leading-[100%] tracking-[-0.04em]">
                            {timeFilter}
                          </span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {showTimeDropdown && (
                          <div className="absolute z-10 mt-1 w-[120px] bg-black border border-gray-700 rounded-md shadow-lg ">
                            <div className="py-1">
                              <button
                                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
                                onClick={() => {
                                  setTimeFilter("Today");
                                  setShowTimeDropdown(false);
                                }}
                              >
                                Today
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
                                onClick={() => {
                                  setTimeFilter("Yesterday");
                                  setShowTimeDropdown(false);
                                }}
                              >
                                Yesterday
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
                                onClick={() => {
                                  setTimeFilter("Last 7 days");
                                  setShowTimeDropdown(false);
                                }}
                              >
                                Last 7 days
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900"
                                onClick={() => {
                                  setTimeFilter("Last 30 days");
                                  setShowTimeDropdown(false);
                                }}
                              >
                                Last 30 days
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {selectedMetrics.length === 1 ? (
                        <div className="relative">
                          <button
                            className="flex items-center justify-center gap-1 px-4 py-2 bg-transparent w-[56px] h-[24px] rounded-[20px] border border-dashed border-[1px] rounded-full"
                            onClick={handleAddClick}
                          >
                            +Add
                          </button>
                          {showAddDropdown && (
                            <div className="absolute z-10 mt-1 w-48 bg-black border border-gray-700 rounded-md shadow-lg">
                              <div className="py-1">
                                {Object.keys(metricsData)
                                  .filter(
                                    (metric) =>
                                      !selectedMetrics.includes(metric)
                                  )
                                  .map((metric) => (
                                    <button
                                      key={metric}
                                      className="block w-full text-left px-4 py-2 text-white hover:bg-gray-900 "
                                      onClick={() => toggleMetric(metric)}
                                    >
                                      {metric}
                                    </button>
                                  ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        selectedMetrics.slice(1).map((metric) => (
                          <div key={metric} className="relative">
                            <button
                              className="flex items-center justify-between gap-2 px-4 py-2 bg-black border border-gray-700 rounded-full min-w-[150px]"
                              onClick={() => toggleMetric(metric)}
                            >
                              <span>{metric}</span>
                              <ChevronDown className="w-4 h-4" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="flex flex-wrap gap-6 mb-6">
                      {selectedMetrics.map((metric, index) => (
                        <div
                          key={metric}
                          className={`flex items-start ${
                            index > 0 ? "border-l border-gray-700 pl-6" : ""
                          }`}
                        >
                          <div>
                            <div className="text-5xl font-bold">
                              {metricsData[metric].value}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-green-500">
                                {metricsData[metric].percentage}
                              </span>
                              <span className="text-gray-500">
                                {metricsData[metric].subValue}
                              </span>
                            </div>
                          </div>
                          {index > 0 && (
                            <div
                              className="w-3 h-3 rounded-full ml-3 mt-4"
                              style={{
                                backgroundColor: metricsData[metric].color,
                              }}
                            ></div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="w-[100%] h-[300px] mt-4">
                      <LineChart
                        selectedMetrics={selectedMetrics}
                        metricsData={metricsData}
                        isMobile={windowWidth < 640}
                      />
                    </div>
                  </div>
                </div>

              </Card>

              <Card className="bg-[#000000]border border-[#1D1D1D] border[1px]rounded-lg overflow-hidden ">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4 ">
                
                    <h2 className="font-bold text-[20px] leading-[100%] tracking-[-0.04em] font-manrope text-white">
                      Insights
                    </h2>

                    <DropDownButton
                      showVisitorDropdown={showVisitorDropdownInsight}
                      setShowVisitorDropdown={setShowVisitorDropdownInsight}
                    />
                  </div>

                  <div className="space-y-8">
                    <div>
                      <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[-0.04em] font-manrope">
                        Founders
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="font-extrabold text-[32px] leading-[100%] tracking-[-0.04em] font-manrope">
                          7.4K
                        </span>

                        <div className="ml-4">
                          <p className="text-green-500 font-semibold text-[12px] leading-[100%] tracking-[-0.04em] font-manrope">
                            +000%
                          </p>
                          <p className="text-green-500 font-semibold text-[12px] leading-[100%] tracking-[-0.04em] font-manrope">
                            (000)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-white/30 pb-4">
                      <p className="text-white font-semibold text-[16px] leading-[100%] tracking-[-0.04em] font-manrope">
                        Investors
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="font-extrabold text-[32px] leading-[100%] tracking-[-0.04em] font-manrope">
                          6.09K
                        </span>
                        <div className="ml-4">
                          <p className="text-green-500 font-semibold text-[12px] leading-[100%] tracking-[-0.04em] font-manrope">
                            +000%
                          </p>
                          <p className="text-green-500 font-semibold text-[12px] leading-[100%] tracking-[-0.04em] font-manrope">
                            (000)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end items-center pt-4">
                      <button className="text-white flex items-center hover:underline font-manrope font-semibold text-[10px] leading-[100%] tracking-[0em]">
                        View detailed insights{" "}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="mt-6 bg-[#000000] border border-[#1D1D1D] border[1px] rounded-lg overflow-hidden ">
              <div className="p-4 ">
                <div className="items-center mb-4">
                  <h2 className="font-manrope font-bold text-[20px] leading-[100%] tracking-[-0.04em]">
                    Demographics
                  </h2>

                  <div className="mt-4">
                    <DropDownButton
                      showVisitorDropdown={showVisitorDropdownDemographics}
                      setShowVisitorDropdown={
                        setShowVisitorDropdownDemographics
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 ">
                  <div className="relative h-[300px] ">
                    <WorldMapChart />
                  </div>
                  <Countries />
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
