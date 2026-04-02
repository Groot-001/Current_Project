import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Table from "./Table";

const leads = [
  {
    id: 1,
    name: "Sanjay Thapa",
    phone: "9825665523",
    source: "Facebook",
    service: "IVF",
    address: "Kathmandu, Bhaktapur",
    createdAt: "16/02/2057",
  },
  {
    id: 2,
    name: "Kavita Sharma",
    phone: "9856235654",
    source: "Twitter",
    service: "IVF",
    address: "Pokhara, Lalitpur",
    createdAt: "16/02/2057",
  },
  {
    id: 3,
    name: "Dr. Anil Joshi",
    phone: "9756655235",
    source: "Instagram",
    service: "IUI",
    address: "Biratnagar, Janakpur",
    createdAt: "16/02/2057",
  },
  {
    id: 4,
    name: "Nisha Rai",
    phone: "9825566364",
    source: "WhatsApp",
    service: "IVF",
    address: "Nepalgunj, Butwal",
    createdAt: "16/02/2057",
  },
  {
    id: 5,
    name: "Aarav Gurung",
    phone: "9756542315",
    source: "Youtube",
    service: "IVF",
    address: "Dharan, Itahari",
    createdAt: "16/02/2057",
  },
  {
    id: 6,
    name: "Priya Koirala",
    phone: "9756235468",
    source: "Youtube",
    service: "IVF",
    address: "Hetauda, Bhadrapur",
    createdAt: "16/02/2057",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    phone: "9825665523",
    source: "Facebook",
    service: "IVF",
    address: "Kathmandu, Bhaktapur",
    createdAt: "16/02/2057",
  },
  {
    id: 2,
    name: "Kavita Sharma",
    phone: "9856235654",
    source: "Twitter",
    service: "IVF",
    address: "Pokhara, Lalitpur",
    createdAt: "16/02/2057",
  },
  {
    id: 3,
    name: "Dr. Anil Joshi",
    phone: "9756655235",
    source: "Instagram",
    service: "IUI",
    address: "Biratnagar, Janakpur",
    createdAt: "16/02/2057",
  },
  {
    id: 4,
    name: "Nisha Rai",
    phone: "9825566364",
    source: "WhatsApp",
    service: "IVF",
    address: "Nepalgunj, Butwal",
    createdAt: "16/02/2057",
  },
  {
    id: 5,
    name: "Aarav Gurung",
    phone: "9756542315",
    source: "Youtube",
    service: "IVF",
    address: "Dharan, Itahari",
    createdAt: "16/02/2057",
  },
  {
    id: 6,
    name: "Priya Koirala",
    phone: "9756235468",
    source: "Youtube",
    service: "IVF",
    address: "Hetauda, Bhadrapur",
    createdAt: "16/02/2057",
  },
];

const LeadColumns = [
  { key: "id", header: "S.N" },
  { key: "name", header: "Lead Name" },
  { key: "phone", header: "Phone No" },
  { key: "source", header: "Source" },
  { key: "service", header: "Service" },
  { key: "address", header: "Address" },
  { key: "createdAt", header: "Created At" },
];

const LeadTable = () => {
  const totalRow = leads.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setrowPerPage] = useState(5);
  const [showDropDown, setShowDropDown] = useState(false);
  const start = (currentPage - 1) * rowPerPage + 1;
  const end = Math.min(rowPerPage * currentPage, totalRow);
  const paginatedData = leads.slice(start, end);
  const totalPage = Math.ceil(totalRow / rowPerPage);

  const classname = "bg-white py-2 px-5";

  return (
    <>
      <div className="bg-[#FFFFFF] shadow-[0px_0px_16px_0px_#0000000A] rounded-[20px] p-6 flex gap-6">
        <div className="flex flex-col gap-3">
          <span className="font-normal text-[14px] leading-[22px] text-[#000000]">
            New Leads Assigned
          </span>

          {/* Table container */}
          <div className="border-[#F6EBF2] border-[0.4px] border-b-0 rounded-t-lg">
            <Table
              columns={LeadColumns}
              data={paginatedData}
              classname={classname}
            />
          </div>

          {/* Pagination Container */}
          <div className="rounded-b-lg py-3 px-5 bg-[#EBEBEB66] flex justify-between">
            <span>
              {start} - {end} of {totalRow}
            </span>

            <div className="flex gap-2">
              <span onClick={() => setShowDropDown(!showDropDown)}>
                Rows Per Page: {rowPerPage}
              </span>

              {showDropDown && (
                <div>
                  <select
                    name="RowPerPage"
                    id="RowPerPage"
                    onChange={(e) => setrowPerPage(Number(e.target.value))}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
              )}

              <div className="flex">
                <ChevronLeft onClick={() => setCurrentPage(currentPage - 1)} />
                {currentPage} / {totalPage}
                <ChevronRight onClick={() => setCurrentPage(currentPage + 1)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadTable;
