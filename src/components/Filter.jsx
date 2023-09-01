import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Filter = ({ FilterItem }) => {
  return (
    <div className="h-[10vh] flex items-center justify-between">
      <div>
        <h1 className="text-2xl tracking-widest">Filter </h1>
      </div>
      <div className="flex gap-7 ">
        <motion.p
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("All")}
        >
          All
        </motion.p>
        <motion.p
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Duelist")}
        >
          Duelist
        </motion.p>
        <motion.p
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Controller")}
        >
          Controller
        </motion.p>
        <motion.p
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Initiator")}
        >
          Initiator
        </motion.p>
        <motion.p
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Sentinel")}
        >
          Sentinel
        </motion.p>
      </div>
    </div>
  );
};

Filter.propTypes = {
  FilterItem: PropTypes.func,
};

export default Filter;
