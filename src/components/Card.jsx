import PropTypes from "prop-types";

const Card = ({ data }) => {
  return data.fullPortrait === null ? null : (
    <div className="bg-[#1D1D1D] w-[25rem] shadow-gray-900  shadow-lg m-4 rounded-xl">
      <div className="">
        <img
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
            {data?.abilities?.map((item) => {
              if (item?.displayIcon === null) {
                return null;
              }

              return (
                <img
                  src={item?.displayIcon}
                  alt={item.displayName}
                  loading="lazy"
                  key={item.uuid}
                  className="bg-[#262626] cursor-pointer p-4 transition-all hover:bg-[#20BD5F] duration-300 ease-in-out rounded-full"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
