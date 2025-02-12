// import axios from "axios";
import appointmentsData from "./appointments.json";


// const baseURL = import.meta.env.VITE_BASE_URL;

// const api = axios.create({
//   baseURL: baseURL,
// });

// export const getAppointments = async () => {
//   const response = await api.get("/appointments");
//   return response.data;
// };

// export const getAppointment = async (id: string) => {
//   const response = await api.get(`/appointments/${id}`);
//   return response.data;
// };

// export default api;


export const getAppointments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(appointmentsData);
    }, 500); // Simulate a network delay
  });
};

export const getAppointment = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const appointment = appointmentsData.find((a) => a.id === id);
      resolve(appointment);
    }, 500); // Simulate a network delay
  });
};

export default { getAppointments, getAppointment };
