import { useQuery } from "@tanstack/react-query";
import { getAppointments, getAppointment } from "../services/api";

export const useAppointmentsQuery = () => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });
};

export const useAppointmentQuery = (id: string) => {
  return useQuery({
    queryKey: ["appointment", id],
    queryFn: () => getAppointment(id),
  });
};
