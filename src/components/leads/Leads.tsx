import { ChevronDown, Key, Search, Trash } from "lucide-react";
import { Calendar } from "lucide-react";
import { Funnel } from "lucide-react";
import { Download, Plus } from "lucide-react";
import Table from "../dashboard/Table";

const leads = [
  {
    id: 1,
    name: "Sanjay Thapa",
    age: "32 years",
    phone: "9825665523",
    email: "something@gmail.com",
    whatsapp: "9797979797978",
    categories: "something",
    service: "IVF",
    source: "Facebook",
    branch: "Kathmandu",
    owner: "someone",
    address: "ktm",
    createdAt: "16 Feb 2024",
    description: "Something else",
    action: "sd;lfkjds;",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    age: "20 years",
    phone: "9825665523",
    email: "something@gmail.com",
    whatsapp: "9797979797978",
    categories: "something",
    service: "IVF",
    source: "Facebook",
    branch: "Kathmandu",
    owner: "someone",
    address: "ktm",
    createdAt: "16 Feb 2024",
    description: "Something else",
    action: "sd;lfkjds;",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    age: "20 years",
    phone: "9825665523",
    email: "something@gmail.com",
    whatsapp: "9797979797978",
    categories: "something",
    service: "IVF",
    source: "Facebook",
    branch: "Kathmandu",
    owner: "someone",
    address: "ktm",
    createdAt: "16 Feb 2024",
    description: "Something else",
    action: "sd;lfkjds;",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    age: "20 years",
    phone: "9825665523",
    email: "something@gmail.com",
    whatsapp: "9797979797978",
    categories: "something",
    service: "IVF",
    source: "Facebook",
    branch: "Kathmandu",
    owner: "someone",
    address: "ktm",
    createdAt: "16 Feb 2024",
    description: "Something else",
    action: "sd;lfkjds;",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    age: "20 years",
    phone: "9825665523",
    email: "something@gmail.com",
    whatsapp: "9797979797978",
    categories: "something",
    service: "IVF",
    source: "Facebook",
    branch: "Kathmandu",
    owner: "someone",
    address: "ktm",
    createdAt: "16 Feb 2024",
    description: "Something else",
    action: "sd;lfkjds;",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    age: "20 years",
    phone: "9825665523",
    email: "something@gmail.com",
    whatsapp: "9797979797978",
    categories: "something",
    service: "IVF",
    source: "Facebook",
    branch: "Kathmandu",
    owner: "someone",
    address: "ktm",
    createdAt: "16 Feb 2024",
    description: "Something else",
    action: "sd;lfkjds;",
  },
  {
    id: 1,
    name: "Sanjay Thapa",
    age: "21 years",
    phone: "9825665523",
    email: "something@gmail.com",
    whatsapp: "9797979797978",
    categories: "something",
    service: "IVF",
    source: "Facebook",
    branch: "Kathmandu",
    owner: "someone",
    address: "ktm",
    createdAt: "16 Feb 2024",
    description: "Something else",
    action: "sdlfkjds",
  },
];

const LeadColumns = [
  { key: "id", header: "S.N" },
  { key: "name", header: "Full Name" },
  { key: "age", header: "Age" },
  { key: "phone", header: "Phone No" },
  { key: "email", header: "Email" },
  { key: "whatsapp", header: "WhatsApp" },
  { key: "categories", header: "categories" },
  { key: "service", header: "Service" },
  { key: "source", header: "Source" },
  { key: "branch", header: "Branch" },
  { key: "owner", header: "Owner" },
  { key: "address", header: "Address" },
  { key: "createdAt", header: "Created Date" },
  { key: "description", header: "Description" },
  { key: "action", header: "Action" },
];

const Leads = () => {
  const classname = "bg-[#FFFFFF] py-2 px-3";

  return (
    <div className="bg-[#FFFFFF] rounded-xl">
      <div className="flex gap-2 items-end px-5 py-5">
        <span className="text-[#2E2E2E] font-normal text-lg">Leads</span>
        <span className="text-[#A03879] font-medium text-xs">(125)</span>
      </div>

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
      {/* Delete features */}
      {/* <div className="flex gap-4 py-1 px-5">
        <div className="rounded-full py-2 px-3 border-[#EF2424] border-[0.6px] flex gap-2">
          <Trash size={20} stroke="#EF2424" strokeWidth={1.5} />
          <span className="text-[#EF2424] font-normal text-sm text-center">
            Delete
          </span>
        </div>

        <div className="rounded-full py-2 px-3 border-[#EBEBEB] border-[0.6px] flex gap-2">
          <span className="text-[#2A2A2A] font-normal text-sm text-center">
            Bulk Action
          </span>
          <ChevronDown size={20} />
        </div>

        <div className="rounded-full py-2 px-3 border-[#EBEBEB] border-[0.6px] flex gap-2">
          <span className="text-[#2A2A2A] font-normal text-sm text-center">
            Assign to
          </span>
          <ChevronDown size={20} />
        </div>
      </div> */}

      <div>
        <Table columns={LeadColumns} data={leads} classname={classname} />
      </div>
    </div>
  );
};

export default Leads;
