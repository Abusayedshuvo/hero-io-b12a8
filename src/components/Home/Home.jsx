import { useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Trending from "../Trending/Trending";

const Home = () => {
  const data = useLoaderData(); 
  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <Trending data={data}></Trending>
    </div>
  );
};

export default Home;
