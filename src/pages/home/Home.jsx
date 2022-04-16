import React, { useState } from "react";
import "./home.css";

import { IoMdPerson } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { TiChartLine } from "react-icons/ti";
import Feature from "../../components/features/Feature";
import Header from "../../components/header/Header";
import Charts from "../../components/charts/Charts";
import Charts2 from "../../components/charts/Charts2";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [chartShow, setChartShow] = useState(false);



  const chart1 = () => setChartShow(false);
  const chart2 = () => setChartShow(true);

  return (
    <AnimatePresence>
      <div className="logistics-home">
        <div className="logistics-home-container">
          <Header />

          <div className="home-text">
            <motion.h1
              initial={{ y: -200 }}
              transition={{ type: "spring", duration: 0.5 }}
              animate={{ y: 0 }}
            >
              Good evening, <strong>Kikitech</strong>
            </motion.h1>
            <motion.p
              initial={{ y: -200 }}
              transition={{ type: "spring", duration: 0.5 }}
              animate={{ y: 0 }}
            >
              Glad to have you back, here’s an overview of your operations today{" "}
            </motion.p>
          </div>
          <div className="home-cards-container">
            <Feature
              title={"Registered Customer"}
              number={"320.8k"}
              joined={"3467 joined today"}
              color={"blue-feature"}
              icon={<IoMdPerson />}
              hover={"blue-hover"}
            />
            <Feature
              title={"Registered Transporters"}
              number={"15.6M"}
              joined={"3467 onboarded today"}
              color={"green-feature"}
              icon={<MdPeopleAlt />}
              hover={"green-hover"}
            />
            <Feature
              title={"Total Shipments"}
              number={"348.9k"}
              joined={"3467 shipped today"}
              color={"pink-feature"}
              icon={<TiChartLine />}
              hover={"pink-hover"}
            />
          </div>
          <div className="home-bottom-container">
            <div className="shipment-container">
              <div className="shipment-header">
                <motion.h1
                  initial={{ y: 10 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  animate={{ y: 0 }}
                >
                  Shipments
                </motion.h1>
                <motion.p
                  initial={{ y: 10 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  animate={{ y: 0 }}
                >
                  Shipping is going pretty well today, Here’s what we have
                </motion.p>
              </div>
              <div className="shipment-right">
                <motion.div
                  initial={{ x: 300 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  animate={{ x: 0 }}
                  className="shipment-btns"
                >
                  <button>1D</button>
                  <button>5D</button>
                  <button onClick={chart1} className="clickable">
                    1M
                  </button>
                  <button onClick={chart2} className="clickable">
                    1Y
                  </button>
                  <button>Max</button>
                </motion.div>
              </div>
            </div>
            <motion.div 
            initial={{ y: 500 }}
            transition={{ type: "spring", duration: 0.5 }}
            animate={{ y: 0 }} 
            className="charts-section">
              {chartShow ? <Charts2 /> : <Charts />}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
