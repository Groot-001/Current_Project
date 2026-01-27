const LeadTable = () => {
  return (
    <>
      <div className="max-w-[755px] w-full bg-[#FFFFFF] rounded-2xl shadow-[0_0_16px_#0000000A] p-6">
        <div className="flex flex-col">
          {/* Ttile container */}
          <div className="pb-3">
            <span className="text-[#000000] font-normal leading-[22px] text-sm">
              New Leads Assigned
            </span>
          </div>

          {/* Table data container */}
          <div className="border-[0.4px] border-b-0 border-[#F6EBF2] rounded-t-lg">
            <table className="w-full">
              <thead className="text-[#2E2E2E] font-normal leading-[20px] text-sm">
                <tr className="">
                  <th className="py-[10px] whitespace-nowrap">S.N</th>
                  <th className="py-[10px] whitespace-nowrap">Lead Name</th>
                  <th className="py-[10px] whitespace-nowrap">Phone No</th>
                  <th className="py-[10px] whitespace-nowrap">Source</th>
                  <th className="py-[10px] whitespace-nowrap">Service</th>
                  <th className="py-[10px] whitespace-nowrap">Address</th>
                  <th className="py-[10px] whitespace-nowrap">Created At</th>
                </tr>
              </thead>

              <tbody className="font-light text-[#585858] text-sm leading-[20px]">
                <tr className="bg-[#F6EBF22E] border-[#F6EBF2] border-[0.4px] border-l-0 border-r-0 border-b-0">
                  <td className="px-5 py-2 whitespace-nowrap">01</td>
                  <td className="px-5 py-2 whitespace-nowrap">Sanjay Thapa</td>
                  <td className="px-5 py-2 whitespace-nowrap">98256655235</td>
                  <td className="px-5 py-2 whitespace-nowrap">Facebook</td>
                  <td className="px-5 py-2 whitespace-nowrap">IVF</td>
                  <td className="px-5 py-2">Kathmandu, Bhaktapur</td>
                  <td className="px-5 py-2 whitespace-nowrap">16/02/2057</td>
                </tr>

                <tr>
                  <td className="px-5 py-2 whitespace-nowrap">02</td>
                  <td className="px-5 py-2 whitespace-nowrap">Kavita Sharma</td>
                  <td className="px-5 py-2 whitespace-nowrap">9856235654</td>
                  <td className="px-5 py-2 whitespace-nowrap">Twitter</td>
                  <td className="px-5 py-2 whitespace-nowrap">IVF</td>
                  <td className="px-5 py-2">Pokhara, Lalitpur</td>
                  <td className="px-5 py-2 whitespace-nowrap">16/02/2057</td>
                </tr>

                <tr className="bg-[#F6EBF22E]">
                  <td className="px-5 py-2 whitespace-nowrap">03</td>
                  <td className="px-5 py-2 whitespace-nowrap ">
                    Dr. Anil Joshi
                  </td>
                  <td className="px-5 py-2 whitespace-nowrap ">9756655235</td>
                  <td className="px-5 py-2 whitespace-nowrap ">Instagram</td>
                  <td className="px-5 py-2 whitespace-nowrap ">IUI</td>
                  <td className="px-5 py-2">Biratnagar, Janakpur</td>
                  <td className="px-5 py-2 whitespace-nowrap ">16/02/2057</td>
                </tr>

                <tr className="bg-[#F6EBF2]">
                  <td className="px-5 py-2 whitespace-nowrap">04</td>
                  <td className="px-5 py-2 whitespace-nowrap">Nisha Rai</td>
                  <td className="px-5 py-2 whitespace-nowrap">9825566364</td>
                  <td className="px-5 py-2 whitespace-nowrap">WhatsApp</td>
                  <td className="px-5 py-2 whitespace-nowrap">IVF</td>
                  <td className="px-5 py-2">Nepalgunj, Butwal</td>
                  <td className="px-5 py-2 whitespace-nowrap">16/02/2057</td>
                </tr>

                <tr className="bg-[#F6EBF22E]">
                  <td className="px-5 py-2 whitespace-nowrap">05</td>
                  <td className="px-5 py-2 whitespace-nowrap">Aarav Gurung</td>
                  <td className="px-5 py-2 whitespace-nowrap">9756542315</td>
                  <td className="px-5 py-2 whitespace-nowrap">Youtube</td>
                  <td className="px-5 py-2 whitespace-nowrap">IVF</td>
                  <td className="px-5 py-2">Dharan, Itahari</td>
                  <td className="px-5 py-2 whitespace-nowrap">16/02/2057</td>
                </tr>

                <tr>
                  <td className="px-5 py-2 whitespace-nowrap">06</td>
                  <td className="px-5 py-2 whitespace-nowrap">Priya Koirala</td>
                  <td className="px-5 py-2 whitespace-nowrap">9756235468</td>
                  <td className="px-5 py-2 whitespace-nowrap">9756235468</td>
                  <td className="px-5 py-2 whitespace-nowrap">IVF</td>
                  <td className="px-5 py-2">Hetauda, Bhadrapur</td>
                  <td className="px-5 py-2 whitespace-nowrap">16/02/2057</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadTable;
