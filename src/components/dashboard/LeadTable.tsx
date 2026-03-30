import { useState } from "react";
import { ChevronLeft, Download, Plus } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Search } from "lucide-react";
import { Calendar } from "lucide-react";
import { Funnel } from "lucide-react";

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

type Column = {
  key: string;
  label: string;
};

const LeadColumns: Column[] = [
  { key: "id", label: "S.N" },
  { key: "name", label: "Lead Name" },
  { key: "phone", label: "Phone No" },
  { key: "source", label: "Source" },
  { key: "service", label: "Service" },
  { key: "address", label: "Address" },
  { key: "createdAt", label: "Created At" },
];

const LeadTable = () => {
  const totalRow = leads.length;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [rowPerPage, setrowPerPage] = useState(5);
  const [showDropDown, setShowDropDown] = useState(false);
  const start = currentPage * 0 * rowPerPage;
  const end = rowPerPage;

  const renderItems = leads.slice(start, end);
  return (
    <>
      <div className="bg-[#FFFFFF] shadow-[0px_0px_16px_0px_#0000000A] rounded-[20px] p-6 flex gap-6">
        <div className="flex flex-col gap-3">
          <span className="font-normal text-[14px] leading-[22px] text-[#000000]">
            New Leads Assigned
          </span>
          {/* Search and add features */}
          <div className="py-[10px] px-5 flex justify-between items-center">
            <div className="flex gap-2 bg-[#FFFFFF] border-[#EBEBEB] border-[0.5px] rounded-full py-3 px-4">
              <Search size={20} />
              <span className="text-[#555555] font-light text-sm">Search</span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <span className="text-[#3B3B3B] font-normal text-sm">
                  Filter by Date
                </span>
                <div className="border-[#EBEBEB] border-[0.5px] rounded-full  flex gap-2 py-3 px-8">
                  <span className="text-[#585858] font-light text-sm">
                    24/02/2022
                  </span>
                  <Calendar size={20} stroke="#AFAFAF" strokeWidth={1} />
                </div>
              </div>
              <div className="border-[#EBEBEB] border-[0.6px] py-2 px-3 rounded-full flex gap-2 items-center">
                <div className="flex gap-2">
                  <Funnel size={20} />
                  <span className="text-[#3B3B3B] font-normal text-sm text-center">
                    Filters
                  </span>
                </div>
              </div>
              <div className="border-[#EBEBEB] border-[0.6px] py-2 px-3 rounded-full flex gap-2 items-center">
                <div className="flex gap-2">
                  <Download size={20} />
                  <span className="text-[#2A2A2A] font-normal text-sm text-center">
                    Export
                  </span>
                </div>
              </div>
              <div className="border-[#9F9F9F] border-[0.6px] rounded-full bg-[#A03879] flex gap-2 py-2 px-[14px] items-center">
                <Plus size={20} stroke="#FFFFFF" strokeWidth={1.5} />
                <span className="text-[#FFFFFF] font-normal text-sm text-center">
                  Add
                </span>
              </div>
            </div>
          </div>
          {/* Table container */}
          <div className="border-[#F6EBF2] border-[0.4px] border-b-0 rounded-t-lg">
            <table className="">
              <thead className="border-[#F6EBF2] border-b-[0.4px]">
                <tr className="">
                  {LeadColumns.map((col) => (
                    <th
                      className="py-[10px] px-5 font-normal text-[#2E2E2E] text-sm"
                      key={col.key}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {renderItems.map((lead, ind) => {
                  return (
                    <tr key={ind + 1}>
                      {LeadColumns.map((col) => (
                        <td className="py-[10px] px-5">
                          {(lead as any)[col.key]}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination Container */}
          <div className="rounded-b-lg py-3 px-5 bg-[#EBEBEB66] flex justify-between">
            <span>
              {start + 1} - {end} of {totalRow}
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
