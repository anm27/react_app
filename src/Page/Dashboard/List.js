import React from "react";
import Table from "./Table";

function List({ employees, currentPageData, handleEdit, handleDelete, query }) {
  const keys = ["firstName", "lastName", "email"];

  const search = (data) => {
    return data.filter((item) =>
      // item.firstName.toLowerCase().includes(query) ||
      // item.lastName.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="contain-table">
      <Table
        data={search(currentPageData)}
        currentPageData={currentPageData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        query={query}
      />
    </div>
  );
}

export default List;
