const LeadTable = () => {
  return (
    <>
      <div className="w-full bg-[#FFFFFF] rounded-2xl flex flex-col gap-6 shadow-[0_0_16px_#0000000A] p-6">
        <div className="w-full flex flex-col gap-3 ">
          <div>
            <span>New Leads Assigned</span>
          </div>
          <div>
            <table className="w-full ">
              <thead>
                <tr>
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
                  <td>98256655235</td>
                  <td>98256655235</td>
                  <td>98256655235</td>
                  <td>98256655235</td>
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
