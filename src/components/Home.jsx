import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import PropTypes from "prop-types";

const Home = ({ setFetechedData }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  const fetchData = async () => {
    const res = await fetch("https://valorant-api.com/v1/agents");
    const data = await res.json();

    if (data.status === 200) {
      setData(data.data);
      setFilteredData(data.data);
      setFetechedData(data.data);
    }
  };
  data.sort((a, b) => {
    return a.displayName.localeCompare(b.displayName);
  });

  useEffect(() => {
    fetchData();
  }, []);

  const FilterItem = (category) => {
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filteredData = data.filter(
        (item) => item?.role?.displayName === category
      );
      setFilteredData(filteredData);
    }
  };

  return (
    <div className="h-[90vh]  px-24">
      <Filter FilterItem={FilterItem} />
      <h3 className="text-2xl mb-4 text-gray-300 spacing tracking-wider pt-8">
        All Agents
      </h3>
      <div className="flex flex-wrap">
        {filteredData.map((item, index) => {
          return <Card data={item} key={item.uuid} index={index} />;
        })}
      </div>
    </div>
  );
};

Home.propTypes = {
  setFetechedData: PropTypes.func,
};

export default Home;
