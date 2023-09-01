import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import AbilityCard from "./AbilityCard";

const Agent = ({ data }) => {
  const { id } = useParams();
  console.log(data);

  // find the agent with the same id as the one in the url
  const agent = data?.find((item) => item?.uuid === id);
  console.log(agent);

  return (
    agent && (
      <div className="md:px-24">
        <h1 className="mt-8  text-4xl tracking-widest hover:underline duration-200 transition-all ease-in-out">
          Agent Details
        </h1>
        <div className=" md:flex block justify-between  pt-12 ">
          <div className=" mx-auto h-full w-1/2">
            <img src={agent?.fullPortrait} alt={agent?.displayName} />
          </div>
          <div className="bg-[#1D1D1D]  md:w-[60%] p-5  shadow-gray-900  shadow-lg m-4 rounded-xl">
            <p className="text-4xl pt-5 flex items-center">
              <img
                src={agent?.displayIconSmall}
                className="h-12 w-12 rounded-full"
                alt=""
              />
              <span className="ml-4 text-4xl font-bold tracking-wider">
                {agent?.displayName}
              </span>
            </p>
            <h3 className="text-2xl pt-10">Role —</h3>
            <div className="flex items-center py-2">
              <div className="w-5">
                <img
                  src={agent?.role?.displayIcon}
                  alt={agent?.role?.displayName}
                />
              </div>
              <span className="text-[#20BD5F] ml-2 opacity-80 text-2xl ">
                {agent?.role?.displayName}
              </span>
            </div>
            <p className="pt-4 text-gray-400">Description</p>
            <p className="pt-2">{agent?.description}</p>
            <p
              className="pt-4 text-gray-400 text-
          lg"
            >
              Devleoper —{" "}
              <span className=" text-white">{agent?.developerName}</span>
            </p>
            <p className=" pt-8 text-2xl  pb-5">Abilites </p>
            <div className="w-full h-full">
              <div className="w-16 pb-5 justify-between gap-2  flex">
                {agent?.abilities?.map((item, index) => {
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
        </div>
        <h1 className="text-5xl pl-8 pt-10">Abilites —</h1>
        <div className="flex flex-wrap justify-center pt-8">
          {agent?.abilities?.map((item, index) => {
            if (item?.displayIcon === null) {
              return null;
            }

            return <AbilityCard type="abilities" data={item} key={index} />;
          })}
        </div>

        <h1 className="text-5xl pl-8 pt-14">Role —</h1>
        <div className="md:flex flex-wrap justify-center pt-8">
          <AbilityCard type="roles" data={agent?.role} />
        </div>
      </div>
    )
  );
};

Agent.propTypes = {
  data: PropTypes.array,
};

export default Agent;
