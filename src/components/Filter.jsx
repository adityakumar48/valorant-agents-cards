import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Filter = ({ FilterItem }) => {
  return (
    <div className="h-[10vh] flex items-center justify-between">
      <div>
        <h1 className="text-2xl tracking-widest">Filter </h1>
      </div>
      <div className="flex gap-7 ">
        <motion.button
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("All")}
        >
          All
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Duelist")}
        >
          Duelist
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Controller")}
        >
          Controller
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Initiator")}
        >
          Initiator
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "#20BD5F" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-3 cursor-pointer  py-2 rounded-full border border-[#20BD5F]"
          onClick={() => FilterItem("Sentinel")}
        >
          Sentinel
        </motion.button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  FilterItem: PropTypes.func,
};

export default Filter;
