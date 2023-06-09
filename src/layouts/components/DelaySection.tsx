"use client";
import { motion } from "framer-motion";

const DelaySection = ({
  children,
  delay = 0
} : {
  children: React.ReactNode
  delay: number
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}

export default DelaySection;