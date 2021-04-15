import React from 'react'
import "../styles/Resources.css"
import { motion } from "framer-motion";

const Resources = () => {
  return (
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
      <div className="resources">
        <div className="content">
          <h1>Resources</h1>
          <div className="cards">
            <a className="card" href="https://www.wri.org/">
              <div className="card-image-wrapper">
                <img className="card-image" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGQj_17VEyLSA/company-logo_200_200/0/1611839914587?e=2159024400&v=beta&t=2Iv1BNs0iNqnYnpT8N2dQ2eY3M-mZm6mfQuXD_XP0OU" alt="article"/>
              </div>
                <div className="card-content">
                  <h2>World Resources Institute</h2>
                  <h3>A global research organization working on six critical goals that the world must achieve this decade in order to secure a sustainable future:climate, energy, food, ...</h3>
                </div>
            </a>
            <a className="card" href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/">
              <div className="card-image-wrapper">
                <img className="card-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Sustainable_Development_Goals_logo.svg/1200px-Sustainable_Development_Goals_logo.svg.png" alt="article"/>
              </div>
                <div className="card-content">
                  <h2>UN Sustainable Development Goals</h2>
                  <h3>The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all. They address the global ...</h3>
                </div>
            </a>
            <a className="card" href="https://www.nature.org/en-us/">
              <div className="card-image-wrapper">
                <img className="card-image" src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/c1b1a7dc1c3912cbabf3bfbf92299eb4" alt="article"/>
              </div>
                <div className="card-content">
                  <h2>The Nature Conservancy</h2>
                  <h3>The Nature Conservancy is a global environmental organization ...</h3>
                </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resources;
