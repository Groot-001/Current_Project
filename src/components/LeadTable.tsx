const LeadTable = () => {
  return (
    <>
      <div className="w-full bg-[#FFFFFF] rounded-2xl flex flex-col gap-6 shadow-[0_0_16px_#0000000A] p-6">
        <div className="w-full flex flex-col gap-3 ">
          {/* Ttile container */}
          <div>
            <span className="text-[#000000] font-medium text-sm leading-[22px]">
              New Leads Assigned
            </span>
          </div>
          {/* Table data container */}
          <div className="flex flex-col gap-1">
            <table className="w-full">
              <thead className="bg-[#FFFFFF] border-t-[0.4px] rounded-t-lg border-[#F6EBF2] ">
                <tr className="font-normal text-[#2E2E2E] text-sm leading-[22px]">
                  <th>S.N</th>
                  <th>Lead Name</th>
                  <th>Phone No</th>
                  <th>Source</th>
                  <th>Service</th>
                  <th>Address</th>
                  <th>Created At</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>01</td>
                  <td>Sanjay Thapa</td>
                  <td>98256655235</td>
                  <td>Facebook</td>
                  <td>IVF</td>
                  <td>Kathmandu, Bhaktapur</td>
                  <td>16/02/2057</td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>Kavita Sharma</td>
                  <td>9856235654</td>
                  <td>Twitter</td>
                  <td>IVF</td>
                  <td>Pokhara, Lalitpur</td>
                  <td>16/02/2057</td>
                </tr>

                <tr>
                  <td>03</td>
                  <td>Dr. Anil Joshi</td>
                  <td>9756655235</td>
                  <td>Instagram</td>
                  <td>IUI</td>
                  <td>Biratnagar, Janakpur</td>
                  <td>16/02/2057</td>
                </tr>

                <tr>
                  <td>04</td>
                  <td>Nisha Rai</td>
                  <td>9825566364</td>
                  <td>WhatsApp</td>
                  <td>IVF</td>
                  <td>Nepalgunj, Butwal</td>
                  <td>16/02/2057</td>
                </tr>

                <tr>
                  <td>05</td>
                  <td>Aarav Gurung</td>
                  <td>9756542315</td>
                  <td>Youtube</td>
                  <td>IVF</td>
                  <td>Dharan, Itahari</td>
                  <td>16/02/2057</td>
                </tr>

                <tr>
                  <td>06</td>
                  <td>Priya Koirala</td>
                  <td>9756235468</td>
                  <td>9756235468</td>
                  <td>IVF</td>
                  <td>Hetauda, Bhadrapur</td>
                  <td>16/02/2057</td>
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

// box-shadow: 0px 0px 16px 0px #0000000A;
