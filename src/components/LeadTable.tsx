const LeadTable = () => {
  return (
    <>
      <div className="w-3/6 mx-auto bg-[#FFFFFF] rounded-2xl shadow-[0_0_16px_#0000000A] p-6">
        <div className="flex flex-col gap-6">
          {/* Ttile container */}
          <div>
            <span className="text-[#000000] font-medium text-sm leading-[22px]">
              New Leads Assigned
            </span>
          </div>
          {/* Table data container */}
          <div className="bg-[#FFFFFF] border-[0.4px] border-b-0 border-[#F6EBF2] rounded-t-lg">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-5">S.N</th>
                  <th className="py-2 px-5">Lead Name</th>
                  <th className="py-2 px-5">Phone No</th>
                  <th className="py-2 px-5">Source</th>
                  <th className="py-2 px-5">Service</th>
                  <th className="py-2 px-5">Address</th>
                  <th className="py-2 px-5">Created At</th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-[#F6EBF22E] border-[#F6EBF2] border-[0.4px] border-l-0 border-r-0 border-b-0">
                  <td className="px-5 py-2">01</td>
                  <td className="px-5 py-2">Sanjay Thapa</td>
                  <td className="px-5 py-2">98256655235</td>
                  <td className="px-5 py-2">Facebook</td>
                  <td className="px-5 py-2">IVF</td>
                  <td className="px-5 py-2">Kathmandu, Bhaktapur</td>
                  <td className="px-5 py-2">16/02/2057</td>
                </tr>

                <tr>
                  <td className="px-5 py-2">02</td>
                  <td className="px-5 py-2">Kavita Sharma</td>
                  <td className="px-5 py-2">9856235654</td>
                  <td className="px-5 py-2">Twitter</td>
                  <td className="px-5 py-2">IVF</td>
                  <td className="px-5 py-2">Pokhara, Lalitpur</td>
                  <td className="px-5 py-2">16/02/2057</td>
                </tr>

                <tr className="bg-[#F6EBF22E]">
                  <td className="px-5 py-2">03</td>
                  <td className="px-5 py-2">Dr. Anil Joshi</td>
                  <td className="px-5 py-2">9756655235</td>
                  <td className="px-5 py-2">Instagram</td>
                  <td className="px-5 py-2">IUI</td>
                  <td className="px-5 py-2">Biratnagar, Janakpur</td>
                  <td className="px-5 py-2">16/02/2057</td>
                </tr>

                <tr className="bg-[#F6EBF2]">
                  <td className="px-5 py-2">04</td>
                  <td className="px-5 py-2">Nisha Rai</td>
                  <td className="px-5 py-2">9825566364</td>
                  <td className="px-5 py-2">WhatsApp</td>
                  <td className="px-5 py-2">IVF</td>
                  <td className="px-5 py-2">Nepalgunj, Butwal</td>
                  <td className="px-5 py-2">16/02/2057</td>
                </tr>

                <tr className="bg-[#F6EBF22E]">
                  <td className="px-5 py-2">05</td>
                  <td className="px-5 py-2">Aarav Gurung</td>
                  <td className="px-5 py-2">9756542315</td>
                  <td className="px-5 py-2">Youtube</td>
                  <td className="px-5 py-2">IVF</td>
                  <td className="px-5 py-2">Dharan, Itahari</td>
                  <td className="px-5 py-2">16/02/2057</td>
                </tr>

                <tr>
                  <td className="px-5 py-2">06</td>
                  <td className="px-5 py-2">Priya Koirala</td>
                  <td className="px-5 py-2">9756235468</td>
                  <td className="px-5 py-2">9756235468</td>
                  <td className="px-5 py-2">IVF</td>
                  <td className="px-5 py-2">Hetauda, Bhadrapur</td>
                  <td className="px-5 py-2">16/02/2057</td>
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

