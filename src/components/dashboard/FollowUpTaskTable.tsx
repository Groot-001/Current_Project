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
];

// This is used to define the shape of an object.
type Column = {
  header: string;
  key: keyof (typeof leads)[number] | "index";
};

// This is for the header which is blueprint for the table
const FollowUpTaskColumn: Column[] = [
  {
    header: "S.N", // what column should be called.
    key: "index", // what data will it connect to.
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
  return (
    <>
      <div className="rounded-[21px] p-6 bg-[#FFFFFF] shadow-[0px_0px_16px_0px_#0000000A]">
        <div className="flex flex-col gap-3">
          <span className="font-normal text-[14px] leading-[22px] text-[#000000] tracking-normal">
            Follow-up Tasks Today
          </span>

          <div className="border-[0.4px] border-[#F6EBF2] border-b-0 rounded-t-[10px] bg-[#FFFFFF]">
            <table className="w-full">
              <thead>
                {/* So basically the table is one structure and thead is for the table header part, the tr is table row which means we are creating a single row for the header. Inside that row we are creating th which means table header which is header cell like the placeholder for the data of that row */}
                <tr className="border-[#F6EBF2] border-b-[0.4px]">
                  {FollowUpTaskColumn.map((col) => (
                    <th
                      key={col.key}
                      className="font-normal text-sm text-[#2E2E2E] px-5 py-[10px]"
                    >
                      {col.header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* In the header we have used tr first because we only need one row and all the things will be inside that row only but in the body we need more rows which will be defined by the number of objects in the array so we are mapping the leads array to define the number of rows being used. */}
              <tbody>
                {leads.map((lead, ind) => {
                  // Here we are mapping the leads to define the number of rows used in the table.

                  let rowStyle = "";
                  if (ind === 0 || ind === 2 || ind === 4)
                    rowStyle = "bg-[#F6EBF22E]";
                  else if (ind === 3) rowStyle = "bg-[#F6EBF2]";
                  else rowStyle = "bg-[#FFFFFF]";

                  return (
                    <tr key={lead.id} className={rowStyle}>
                      {FollowUpTaskColumn.map((col) => (
                        // Here we are using the followuptaskcolumn because it will decide the number of cols used in the table and for each table we are creating a description cell like placeholder.
                        <td
                          key={col.key}
                          className="font-light text-sm text-[#585858] px-5 py-5"
                        >
                          {/* here we are using the col.key === index so that because the key is index which will not match any property from lead so if the value is index then we will just show the index number which will be S.N */}
                          {col.key === "index"
                            ? ind + 1
                            : (lead as any)[col.key]}
                          {/* lead[col.key],this is called dynamic accessing of the data. */}
                        </td>
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

export default FollowUpTaskTable;
