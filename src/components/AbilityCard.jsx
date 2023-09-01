import PropTypes from "prop-types";
import { motion } from "framer-motion";
const AbilityCard = ({ type, data }) => {
  return (
    <div>
      {type == "abilities" ? (
        <motion.div
          className="bg-[#1D1D1D]  w-[22rem] p-5 shadow-gray-900  shadow-lg m-4 rounded-xl"
          whileHover={{ backgroundColor: "#20BD5F", cursor: "pointer" }}
          layout
        >
          <img
            src={data?.displayIcon}
            alt={data?.displayName}
            className="w-16 h-16 mx-auto"
          />
          <h4 className="text-xl font-semibold text-center py-4">
            {data?.displayName}
          </h4>
          <p className="text-center">{data?.description}</p>
        </motion.div>
      ) : (
        <motion.div
          className="bg-[#1D1D1D]  md:w-[60%] p-5 mb-16 shadow-gray-900  shadow-lg m-4 rounded-xl"
          whileHover={{ backgroundColor: "#20BD5F", cursor: "pointer" }}
          layout
        >
          <div className="md:flex items-center">
            <img
              src={data?.displayIcon}
              alt={data?.displayName}
              className="w-16 h-16 mx-auto"
            />
            <div className="pl-8">
              <h4 className="text-xl font-semibold  py-4">
                {data?.displayName}
              </h4>
              <p className=" ">{data?.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

AbilityCard.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
};

export default AbilityCard;
