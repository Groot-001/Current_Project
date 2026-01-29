// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import Toolbar from "../components/Toolbar";
// import Summary from "../components/Summary";
// import LeadTable from "../components/LeadTable";
import TasksOverview from "../components/TasksOverview";

const Dashboard = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-slate-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* <Header /> */}
          {/* <Sidebar /> */}
          {/* <Toolbar /> */}
          {/* <Summary /> */}
          {/* <LeadTable /> */}
          <TasksOverview />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
