import { use } from "react";
import { useParams } from "react-router";

const AppDetails = ({ allApps }) => {
  const { appId } = useParams();
  const data = use(allApps);

  const app = data.find((item) => parseInt(item.id) === parseInt(appId));
  console.log(app);
  return (
    <div>
      <p>SmPlan:ToDo List with Reminder</p>
      <p>Developed by productive.io</p>
    </div>
  );
};

export default AppDetails;
