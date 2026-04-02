import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type paginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (value: number) => void;
  start: number;
  end: number;
  totalItems: number;
  rowsPerPage: number;
  onChangeRowsPerPage: (value: number) => void;
};

const Pagination = ({
  page,
  totalPages,
  onPageChange,
  start,
  end,
  totalItems,
  rowsPerPage,
  onChangeRowsPerPage,
}: paginationProps) => {
  const [isdropDownOpen, setisdropDownOpen] = useState<boolean>(false);

  {
    console.log(rowsPerPage);
  }

  return (
    <div className="flex justify-between gap-5 bg-[#EBEBEB66] py-3 px-5">
      <div>
        <span>
          {start + 1} - {end} of {totalItems}
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <span>Rows per page : {rowsPerPage}</span>

        <button onClick={() => setisdropDownOpen(!isdropDownOpen)}>
          <ChevronDown size={20} />
        </button>

        {isdropDownOpen && (
          <select
            onChange={(e) => onChangeRowsPerPage(Number(e.target.value))}
            name="rowsPerPage"
            id="rowsPerpage"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        )}

        <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
          <ChevronLeft />
        </button>

        <span>
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
