import { useState } from "react";

type usePaginationprops = {
  totalItems: number;
};

type usePaginationReturn = {
  page: number;
  rowsPerPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  changeRowsPerPage: (value: number) => void;
};

export function usePagination({
  totalItems,
}: usePaginationprops): usePaginationReturn {
  // Here usePaginationProps is the type of the props expected by the function and usePaginationReturn is the shape of the object that this function returns.

  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalItems);

  // we need to update rowperpage and once it updates we need to go to page1 for better UI and for that we need created a function to bundle things for better safety.
  const changeRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setPage(1);
  };

  return {
    page,
    rowsPerPage,
    totalPages,
    startIndex,
    endIndex,
    setPage,
    changeRowsPerPage,
  };
}
