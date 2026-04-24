// src/components/EmployeeForm.jsx

import React, { useState, useEffect } from "react";

function EmployeeForm({ onSubmit, selectedEmployee, clearSelection }) {
  const [form, setForm] = useState({
    full_name: "",
    job_title: "",
    country: "",
    salary: ""
  });

  useEffect(() => {
    if (selectedEmployee) {
      setForm(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ full_name: "", job_title: "", country: "", salary: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedEmployee ? "Edit Employee" : "Add Employee"}</h3>

      <input name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} />
      <input name="job_title" placeholder="Job Title" value={form.job_title} onChange={handleChange} />
      <input name="country" placeholder="Country" value={form.country} onChange={handleChange} />
      <input name="salary" type="number" placeholder="Salary" value={form.salary} onChange={handleChange} />

      <button type="submit">
        {selectedEmployee ? "Update" : "Create"}
      </button>

      {selectedEmployee && (
        <button type="button" onClick={clearSelection}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default EmployeeForm;