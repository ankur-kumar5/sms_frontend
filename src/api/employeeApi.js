import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000"
});

export const getEmployees = (page = 1, perPage = 20) =>
  API.get(`/employees?page=${page}&per_page=${perPage}`);

export const createEmployee = (data) =>
  API.post("/employees", { employee: data });

export const updateEmployee = (id, data) =>
  API.put(`/employees/${id}`, { employee: data });

export const deleteEmployee = (id) =>
  API.delete(`/employees/${id}`);

