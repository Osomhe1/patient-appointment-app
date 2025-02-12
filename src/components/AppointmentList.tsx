import moment from "moment";
import { Link } from "react-router-dom";

interface Appointment {
  id: string;
  patientName: string;
  appointmentDate: string;
  doctorName: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
}

function AppointmentList({ appointments }: AppointmentListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Link to={`/appointments/${appointment.id}`} className="block p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {appointment.patientName}
            </h3>
            <p className="text-sm text-gray-600">
              Doctor: {appointment.doctorName}
            </p>
            <p className="text-sm text-gray-500">
              {moment(appointment.appointmentDate).format("MMMM Do, YYYY")}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;
