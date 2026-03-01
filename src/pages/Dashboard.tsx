import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import Toolbar from "../components/dashboard/Toolbar";
// import Summary from "../components/dashboard/Summary";
// import LeadTable from "../components/dashboard/LeadTable";
// import TasksOverview from "../components/dashboard/TasksOverview";
// import FollowUpTaskTable from "../components/dashboard/FollowUpTaskTable";

const Dashboard = () => {
  return (
    <>
      <div className="bg-slate-100 min-h-screen w-full flex flex-col">
        <Header />

        {/* flex-1 will only work when default width is not provided to the component itself. */}
        <div className="flex-1 flex items-start">
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            <Toolbar />
            {/* <Summary /> */}
            {/* <LeadTable /> */}
            {/* <TasksOverview /> */}
            {/* <FollowUpTaskTable /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
