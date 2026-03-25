import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import Toolbar from "../components/dashboard/Toolbar";
import Summary from "../components/dashboard/Summary";
import LeadTable from "../components/dashboard/LeadTable";
import TasksOverview from "../components/dashboard/TasksOverview";
import FollowUpTaskTable from "../components/dashboard/FollowUpTaskTable";
import Profile from "../components/dashboard/Profile";
import ToolbarCard from "../components/dashboard/ToolbarCard";
import WorkLoadSnapshot from "../components/dashboard/WorkLoadSnapshot";
import AgentStatusTable from "../components/dashboard/AgentStatusTable";
import Notifications from "../components/dashboard/Notifications";
import BulkActionsMenu from "../components/dashboard/bulk-actions/BulkActionsMenu";

const Dashboard = () => {
  return (
    <>
      <div className="bg-slate-100 min-h-screen w-full flex flex-col">
        <Header />

        {/* flex-1 will only work when default width is not provided to the component itself. */}
        <div className="flex-1 flex items-start">
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 flex flex-col pt-[14px] pl-6 pr-12 gap-6">
            {/* <Toolbar /> */}
            {/* <ToolbarCard
              description="Overview of your leads, tasks, and bookings"
              title="My Dashboard"
            /> */}
            {/* <Summary /> */}
            {/* <LeadTable /> */}
            {/* <TasksOverview /> */}
            {/* <FollowUpTaskTable /> */}
            {/* <Profile /> */}
            {/* <WorkLoadSnapshot /> */}
            {/* <AgentStatusTable /> */}
            {/* <Notifications /> */}
            <BulkActionsMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
