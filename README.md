# Patient Appointment Application

This is a React application built with Vite, TypeScript, Tailwind CSS v4, and TanStack Query for managing patient appointment data. It provides a user-friendly interface for viewing appointment details and filtering appointments.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** Version 18 or higher (Check with `node -v`).  It's recommended to use the latest LTS version.


## Installation

1.  **Clone the repository:**

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd patient-appointment-app
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

## Configuration

*   **API Endpoint:**  This application is currently configured to use local JSON data.  To connect to a real API, modify the `src/services/api.ts` file:

    1.  Uncomment the `API_BASE_URL` variable and replace `https://your-api-domain.com/api` with the actual URL of your API.
    2.  Modify the `getAppointments` and `getAppointment` functions to use `axios` or `fetch` to make network requests to the API.

    **Important:**  If your API requires authentication, you'll need to add the appropriate headers to the `axios` or `fetch` requests.

## Running the Application

1.  **Start the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

2.  **Open your browser:**

    The application will typically be running at `http://localhost:5173`.  Vite will automatically open a browser window or tab for you.  If not, navigate to this address manually.

## Building for Production

To create a production-ready build of the application:

1.  **Build the application:**

    Using npm:

    ```bash
    npm run build
    ```

    



## Key Technologies

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:**  A fast build tool for modern web development.
*   **Tailwind CSS v4:**  A utility-first CSS framework.
*   **TanStack Query:**  A data-fetching library for React.
*   **axios:**  A Promise-based HTTP client for making API requests (if connecting to a real API).
*   **react-router-dom:**  For routing and navigation within the application.
*   **moment:** For date and time management

## File Structure