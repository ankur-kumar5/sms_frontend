import React, { useEffect, useState } from "react";
import EmployeeList from "../components/EmployeeList";
import Pagination from "../components/Pagination";
import EmployeeForm from "../components/EmployeeForm";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../api/employeeApi";


function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees(page);
  }, [page]);

  const fetchEmployees = async (page) => {
    try {
      const res = await getEmployees(page, 20);
      setEmployees(res.data.data);
      setMeta(res.data.meta);
    } catch (err) {
      console.error("Error fetching employees", err);
    }
  };
  const handleSubmit = async (form) => {
	  if (selectedEmployee) {
	    await updateEmployee(selectedEmployee.id, form);
	  } else {
	    await createEmployee(form);
	  }

	  fetchEmployees(page);
	  setSelectedEmployee(null);
	};

	const handleDelete = async (id) => {
	  await deleteEmployee(id);
	  fetchEmployees(page);
   };

	const handleEdit = (emp) => {
	  setSelectedEmployee(emp);
	};

  return (
    <div>
      	<h1>Employee Management</h1>
      	<EmployeeForm
				  onSubmit={handleSubmit}
				  selectedEmployee={selectedEmployee}
				  clearSelection={() => setSelectedEmployee(null)}
				/>
				<br/>
      	<EmployeeList
		  employees={employees}
		  onEdit={handleEdit}
		  onDelete={handleDelete}
		/>

      	<Pagination meta={meta} onPageChange={setPage} />
    </div>
  );
}

export default EmployeesPage;