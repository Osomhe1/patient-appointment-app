import { Link } from "react-router-dom";
import moment from "moment";

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  appointmentDate: string;
  clinicLocation: string;
}

interface AppointmentDetailProps {
  appointment: Appointment | undefined;
}

const InfoBlock = ({ label, value }: { label: string; value: string }) => (
  <div>
    <strong className="block font-medium text-gray-700 mb-1">{label}:</strong>
    <span className="text-gray-600">{value}</span>
  </div>
);


function AppointmentDetail({ appointment }: AppointmentDetailProps) {
  if (!appointment) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-600">
        No appointment details available.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto my-6">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">
        Appointment Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <InfoBlock label="Appointment ID" value={appointment.id} />
        <InfoBlock label="Patient" value={appointment.patientName} />
        <InfoBlock label="Doctor" value={appointment.doctorName} />
        <InfoBlock
          label="Date & Time"
          value={moment(appointment.appointmentDate).format(
            "MMMM Do YYYY, h:mm a"
          )}
        />
        <InfoBlock label="Clinic" value={appointment.clinicLocation} />
      </div>

    
      <Link
        to="/"
        className="inline-flex items-center bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Appointments
      </Link>
    </div>
  );
}

export default AppointmentDetail;
