import Pagination from "../shared/pagination/Pagination";
import Table from "./Table";
import { usePagination } from "../shared/pagination/usePagination";

const leads = [
  {
    id: 1,
    name: "Sanjay Thapa",
    phone: "98256555235",
    source: "Facebook",
    service: "IVF",
    assignedBy: "Suman",
    followUpDate: "2026-02-15",
  },
  {
    id: 2,
    name: "Kavita Sharma",
    phone: "9856235654",
    source: "Twitter",
    service: "IVF",
    assignedBy: "Ravi",
    followUpDate: "2026-02-15",
  },
  {
    id: 3,
    name: "Dr. Anil Joshi",
    phone: "9756655235",
    source: "Instagram",
    service: "IUI",
    assignedBy: "Aarav",
    followUpDate: "2026-02-15",
  },
  {
    id: 4,
    name: "Nisha Rai",
    phone: "9856235654",
    source: "WhatsApp",
    service: "IVF",
    assignedBy: "Karan",
    followUpDate: "2026-02-15",
  },
  {
    id: 5,
    name: "Aarav Gurung",
    phone: "9756542315",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Rajesh",
    followUpDate: "2026-02-15",
  },
  {
    id: 6,
    name: "Priya Koirala",
    phone: "9756235468",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Deepak",
    followUpDate: "2026-02-15",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    phone: "98256555235",
    source: "Facebook",
    service: "IVF",
    assignedBy: "Suman",
    followUpDate: "2026-02-15",
  },
  {
    id: 2,
    name: "Kavita Sharma",
    phone: "9856235654",
    source: "Twitter",
    service: "IVF",
    assignedBy: "Ravi",
    followUpDate: "2026-02-15",
  },
  {
    id: 3,
    name: "Dr. Anil Joshi",
    phone: "9756655235",
    source: "Instagram",
    service: "IUI",
    assignedBy: "Aarav",
    followUpDate: "2026-02-15",
  },
  {
    id: 4,
    name: "Nisha Rai",
    phone: "9856235654",
    source: "WhatsApp",
    service: "IVF",
    assignedBy: "Karan",
    followUpDate: "2026-02-15",
  },
  {
    id: 5,
    name: "Aarav Gurung",
    phone: "9756542315",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Rajesh",
    followUpDate: "2026-02-15",
  },
  {
    id: 6,
    name: "Priya Koirala",
    phone: "9756235468",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Deepak",
    followUpDate: "2026-02-15",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    phone: "98256555235",
    source: "Facebook",
    service: "IVF",
    assignedBy: "Suman",
    followUpDate: "2026-02-15",
  },
  {
    id: 2,
    name: "Kavita Sharma",
    phone: "9856235654",
    source: "Twitter",
    service: "IVF",
    assignedBy: "Ravi",
    followUpDate: "2026-02-15",
  },
  {
    id: 3,
    name: "Dr. Anil Joshi",
    phone: "9756655235",
    source: "Instagram",
    service: "IUI",
    assignedBy: "Aarav",
    followUpDate: "2026-02-15",
  },
  {
    id: 4,
    name: "Nisha Rai",
    phone: "9856235654",
    source: "WhatsApp",
    service: "IVF",
    assignedBy: "Karan",
    followUpDate: "2026-02-15",
  },
  {
    id: 5,
    name: "Aarav Gurung",
    phone: "9756542315",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Rajesh",
    followUpDate: "2026-02-15",
  },
  {
    id: 6,
    name: "Priya Koirala",
    phone: "9756235468",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Deepak",
    followUpDate: "2026-02-15",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    phone: "98256555235",
    source: "Facebook",
    service: "IVF",
    assignedBy: "Suman",
    followUpDate: "2026-02-15",
  },
  {
    id: 2,
    name: "Kavita Sharma",
    phone: "9856235654",
    source: "Twitter",
    service: "IVF",
    assignedBy: "Ravi",
    followUpDate: "2026-02-15",
  },
  {
    id: 3,
    name: "Dr. Anil Joshi",
    phone: "9756655235",
    source: "Instagram",
    service: "IUI",
    assignedBy: "Aarav",
    followUpDate: "2026-02-15",
  },
  {
    id: 4,
    name: "Nisha Rai",
    phone: "9856235654",
    source: "WhatsApp",
    service: "IVF",
    assignedBy: "Karan",
    followUpDate: "2026-02-15",
  },
  {
    id: 5,
    name: "Aarav Gurung",
    phone: "9756542315",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Rajesh",
    followUpDate: "2026-02-15",
  },
  {
    id: 6,
    name: "Priya Koirala",
    phone: "9756235468",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Deepak",
    followUpDate: "2026-02-15",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    phone: "98256555235",
    source: "Facebook",
    service: "IVF",
    assignedBy: "Suman",
    followUpDate: "2026-02-15",
  },
  {
    id: 2,
    name: "Kavita Sharma",
    phone: "9856235654",
    source: "Twitter",
    service: "IVF",
    assignedBy: "Ravi",
    followUpDate: "2026-02-15",
  },
  {
    id: 3,
    name: "Dr. Anil Joshi",
    phone: "9756655235",
    source: "Instagram",
    service: "IUI",
    assignedBy: "Aarav",
    followUpDate: "2026-02-15",
  },
  {
    id: 28,
    name: "Nisha Rai",
    phone: "9856235654",
    source: "WhatsApp",
    service: "IVF",
    assignedBy: "Karan",
    followUpDate: "2026-02-15",
  },
  {
    id: 29,
    name: "Aarav Gurung",
    phone: "9756542315",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Rajesh",
    followUpDate: "2026-02-15",
  },
  {
    id: 30,
    name: "Priya Koirala",
    phone: "9756235468",
    source: "Youtube",
    service: "IVF",
    assignedBy: "Deepak",
    followUpDate: "2026-02-15",
  },
];

// This is used to define the shape of an object.
type Column = {
  header: string;
  key: string;
};

// This is for the header which is blueprint for the table
const FollowUpTaskColumn: Column[] = [
  {
    header: "S.N", // what column should be called.
    key: "id", // what data will it connect to.
  },
  {
    header: "Lead Name",
    key: "name",
  },
  {
    header: "Up Coming",
    key: "followUpDate",
  },
  {
    header: "PhoneNo",
    key: "phone",
  },
  {
    header: "Source",
    key: "source",
  },
  {
    header: "Service",
    key: "service",
  },
  {
    header: "Assigned By",
    key: "assignedBy",
  },
];

const FollowUpTaskTable = () => {
  const classname = "py-2 px-3";

  const totalItems = leads.length;

  const {
    page,
    totalPages,
    startIndex,
    endIndex,
    rowsPerPage,
    setPage,
    changeRowsPerPage,
  } = usePagination({
    totalItems,
  });

  const paginatedData = leads.slice(startIndex, endIndex);

  return (
    <>
      <div className="rounded-[21px] p-6 bg-[#FFFFFF] shadow-[0px_0px_16px_0px_#0000000A]">
        <div className="flex flex-col gap-3">
          <span className="font-normal text-[14px] leading-[22px] text-[#000000] tracking-normal">
            Follow-up Tasks Today
          </span>

          <div className="border-[0.4px] border-[#F6EBF2] border-b-0 rounded-t-[10px] bg-[#FFFFFF]">
            <Table
              columns={FollowUpTaskColumn}
              data={paginatedData}
              classname={classname}
            />
          </div>
          {/* Pagination Logic */}
          <Pagination
            page={page}
            onPageChange={setPage}
            totalPages={totalPages}
            start={startIndex}
            end={endIndex}
            totalItems={totalItems}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={changeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
};

export default FollowUpTaskTable;
