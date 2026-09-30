import { use } from "react";

const AppDetail = ({ fetchPromise }) => {
  const data = use(fetchPromise);
  console.log(data);
  return <div></div>;
};

export default AppDetail;
