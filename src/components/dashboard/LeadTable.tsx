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
  return (
    <>
      <div className="bg-[#FFFFFF] shadow-[0px_0px_16px_0px_#0000000A] rounded-[20px] p-6 ">
        <div className="flex flex-col gap-3">
          <span className="font-normal text-[14px] leading-[22px] text-[#000000]">
            New Leads Assigned
          </span>
          <div>
            <table>
              <thead>
                <tr>
                  {LeadColumns.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, ind) => {
                  return (
                    <tr key={ind + 1}>
                      {LeadColumns.map((col) => (
                        <td>{(lead as any)[col.key]}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadTable;
