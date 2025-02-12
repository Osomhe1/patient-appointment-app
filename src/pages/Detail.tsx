import { useParams } from "react-router-dom";
import AppointmentDetail from "../components/AppointmentDetail";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useAppointmentQuery } from "../hooks/useAppointments";

function Detail() {
  const { id } = useParams<{ id: string }>();
  const {
    data: appointment,
    isLoading,
    isError,
    error,
  } = useAppointmentQuery(id || "");

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <ErrorMessage
        message={(error as Error).message || "An error occurred."}
      />
    );

  return (
    <div className="container mx-auto py-8">
      <AppointmentDetail appointment={appointment} />
    </div>
  );
}

export default Detail;
