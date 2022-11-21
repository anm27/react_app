import React from "react";

function Header({ setIsAdding, setQuery }) {
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Employee Management System</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              placeholder="Search"
              onChange={(event) => setQuery(event.target.value.toLowerCase())}
            />
          </form>
        </div>
      </nav>

      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
