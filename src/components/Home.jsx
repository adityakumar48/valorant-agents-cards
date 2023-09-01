import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://valorant-api.com/v1/agents");
    const data = await res.json();

    if (data.status === 200) {
      setData(data.data);
    }
  };
  data.sort((a, b) => {
    return a.displayName.localeCompare(b.displayName);
  });

  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(data);
  return (
    <div className="h-[90vh] px-24">
      <h3 className="text-2xl mb-4 text-gray-300 spacing tracking-wider pt-8">
        All Agents
      </h3>
      <div className="flex flex-wrap">
        {data.map((item, index) => {
          return <Card data={item} key={item.uuid} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
