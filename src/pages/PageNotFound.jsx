import React from 'react'
import "../styles/PageNotFound.css"
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
      <div className="pagenotfound">
        <div className="content">
          <h1>That page was not found</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default PageNotFound;
