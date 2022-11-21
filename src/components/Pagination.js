import React from "react";

const Pagination = ({ totalData, dataPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; Math.ceil(i <= totalData / dataPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="btn btn-primary m-auto d-inline gap-10"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
