import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Trending from "../Trending/Trending";
import { use } from "react";

const Home = ({ allApps }) => {
  const data = use(allApps);
  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <Trending data={data}></Trending>
    </div>
  );
};

export default Home;
