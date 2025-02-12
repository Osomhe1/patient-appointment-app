interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="text-red-500 text-center py-4">Error: {message}</div>;
}

export default ErrorMessage;
