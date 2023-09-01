import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ data, index }) => {
  const navigate = useNavigate();
  return data.fullPortrait === null ? null : (
    <motion.div
      key={data.displayName}
      layoutId={data.uuid}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: "1", ease: "easeInOut", delay: index * 0.3 }}
      whileHover={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#20BD5F",
        opacity: 1,
        transition: { duration: "0.2", ease: "easeInOut", delay: 0.2 },
      }}
      className="bg-[#1D1D1D] w-[25rem] cursor-pointer shadow-gray-900  shadow-lg m-4 rounded-xl"
      onClick={() => navigate(`/agent/${data.uuid}`)}
    >
      <div className="">
        <motion.img
          layout
          src={data.fullPortrait}
          alt={data.displayName}
          loading="lazy"
          className="h-full w-full"
        />
        <div className="pl-8">
          <h2 className="text-white  pt-5 tracking-[3px] text-4xl">
            {data.displayName}
          </h2>
          <div className="flex items-center py-2">
            <div className="w-5">
              <img
                src={data?.role?.displayIcon}
                alt={data?.role?.displayName}
              />
            </div>
            <span className="text-[#20BD5F] ml-2 opacity-80 text-2xl ">
              {data?.role?.displayName}
            </span>
          </div>
        </div>
        <p className="pl-8 text-xl pb-2">Abilites</p>
        <div className="pl-5 w-full h-full">
          <div className="w-16 pb-5 justify-between gap-2  flex">
            {data?.abilities?.map((item, index) => {
              if (item?.displayIcon === null) {
                return null;
              }

              return (
                <motion.img
                  whileHover={{
                    // borderWidth: "1px",
                    // borderStyle: "solid",
                    // borderColor: "#20BD5F",
                    backgroundColor: "#20BD5F",
                    opacity: 1,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                  layout
                  src={item?.displayIcon}
                  alt={item.displayName}
                  loading="lazy"
                  key={index}
                  className="bg-[#262626] cursor-pointer p-4  rounded-full"
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default Card;
