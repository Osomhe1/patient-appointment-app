import React, { useState, useCallback } from "react";
import AppointmentList from "../components/AppointmentList";
import FilterBar from "../components/FilterBar";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useAppointmentsQuery } from "../hooks/useAppointments";

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  appointmentDate: string;
  clinicLocation: string;
  // Add other appointment properties as needed
}

function Home() {
  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useAppointmentsQuery();
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);

  // Ensure filteredAppointments is updated when appointments changes
  React.useEffect(() => {
    setFilteredAppointments(Array.isArray(appointments) ? appointments : []);
  }, [appointments]);

  const handleFilter = useCallback(
    (filterCriteria: { date: string; doctor: string }) => {
      if (!appointments) return;

      const { date, doctor } = filterCriteria;
      let filtered = Array.isArray(appointments) ? [...appointments] : [];

      if (date) {
        filtered = filtered.filter((appointment) =>
          appointment.appointmentDate.startsWith(date)
        );
      }

      if (doctor) {
        filtered = filtered.filter((appointment) =>
          appointment.doctorName.toLowerCase().includes(doctor.toLowerCase())
        );
      }
      setFilteredAppointments(filtered);
    },
    [appointments]
  );

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <ErrorMessage
        message={(error as Error).message || "An error occurred."}
      />
    );

  return (
    <div className="container overflow-hidden mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Appointments</h1>
      <FilterBar onFilter={handleFilter} />
      <AppointmentList appointments={filteredAppointments} />
    </div>
  );
}

export default Home;
