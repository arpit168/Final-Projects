import React from 'react'
import {motion} from "motion/react"

const Footer = () => {
  return (
    <motion.div drag className='d-flex  bg-gray-300  p-3 text-xl text-center  font-semibold text-black  '>
        <span>All rights reserved </span>
        <span>Copyright @2025</span>
        <span>Made by 💕 with Arpit gupta</span>
    </motion.div>
  )
}

export default Footer