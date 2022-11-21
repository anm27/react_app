import React, { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

const Table = ({ currentPageData, handleEdit, handleDelete, query, data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  const [empdata, setEmpdata] = useState(data);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...empdata].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setEmpdata(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...empdata].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setEmpdata(sorted);
      setOrder("ASC");
    }
  };

  return (
    <table className="striped-table">
      <thead>
        <tr>
          <th onClick={() => sorting("id")}>
            No. <TbArrowsSort />
          </th>
          <th onClick={() => sorting("firstName")}>
            First Name <TbArrowsSort />
          </th>
          <th onClick={() => sorting("lastName")}>
            Last Name <TbArrowsSort />
          </th>
          <th onClick={() => sorting("email")}>
            Email <TbArrowsSort />
          </th>
          <th onClick={() => sorting("salary")}>
            Salary <TbArrowsSort />
          </th>
          <th onClick={() => sorting("date")}>
            Date of Joining <TbArrowsSort />
          </th>
          <th colSpan={2} className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {currentPageData.length && data ? (
          data.map((employee, i) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{formatter.format(employee.salary)}</td>
              <td>{employee.date} </td>
              <td className="text-right">
                <button
                  onClick={() => handleEdit(employee.id)}
                  className="btn btn-info"
                >
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Employees</td>
          </tr>
        )}
        {currentPageData.length && empdata ? (
          empdata.map((employee, i) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{formatter.format(employee.salary)}</td>
              <td>{employee.date} </td>
              <td className="text-right">
                <button
                  onClick={() => handleEdit(employee.id)}
                  className="btn btn-info"
                >
                  Edit
                </button>
              </td>
              <td className="text-left">
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Employees</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
