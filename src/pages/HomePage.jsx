import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/HomePage.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{opacity: 0}}>
      <div className="homepage">
        <div className="content">
          <div className="info">
            <h2>Sustainability and Consumption</h2>
            <p>
              "The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all" - United Nations
            </p>
            <NavLink to="/form" className="info-btn">Start Improving</NavLink>
          </div>
        </div>
      </div>
      
    </motion.div>
  )
}
  
export default HomePage;
