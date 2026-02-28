import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
// import Toolbar from "../components/dashboard/Toolbar";
// import Summary from "../components/dashboard/Summary";
import LeadTable from "../components/dashboard/LeadTable";
// import TasksOverview from "../components/dashboard/TasksOverview";
// import FollowUpTaskTable from "../components/dashboard/FollowUpTaskTable";

const Dashboard = () => {
  return (
    <>
      <div className="bg-slate-100 min-h-screen w-full flex flex-col">
        <Header />

        <div className="flex flex-1 items-start">
          <Sidebar />
          {/* <Toolbar /> */}
          {/* <Summary /> */}
          <LeadTable />
          {/* <TasksOverview /> */}
          {/* <FollowUpTaskTable /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
