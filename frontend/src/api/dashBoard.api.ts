import { data } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
export const expenseDash = () => {
  return axiosInstance.get(`/api/v1/admin/expense`);
};

export const studentDash = () => {
  return axiosInstance.get(`/api/v1/admin/students`);
};
export const feeDash = ()=>{
  return axiosInstance.get
}