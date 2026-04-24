import React from "react";

function EmployeeList({ employees, onEdit, onDelete }) {
  if (!employees.length) return <p>No employees found</p>;

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Job Title</th>
          <th>Country</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.full_name}</td>
            <td>{emp.job_title}</td>
            <td>{emp.country}</td>
            <td>{emp.salary}</td>
            <td>
			  <button onClick={() => onEdit(emp)}>Edit</button>
			  <button onClick={() => onDelete(emp.id)}>Delete</button>
			</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;