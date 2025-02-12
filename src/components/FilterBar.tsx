import { useState } from "react";
import { useId } from "react";

interface FilterBarProps {
  onFilter: (filterCriteria: { date: string; doctor: string }) => void;
}

function FilterBar({ onFilter }: FilterBarProps) {
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const dateId = useId();
  const doctorId = useId();
  const handleFilter = () => {
    onFilter({ date, doctor });
  };

  const inputClasses =
    "mt-1 block w-full sm:w-80 p-3 rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

    const labelClasses = "block text-sm font-medium text-gray-700";

  return (
    <div className=" container overflow-hidden rounded-xl  p-6 mb-8">
      <div className="flex  flex-col sm:flex-row gap-6 items-center">
        <div className="flex-1 w-full">
          <label
            htmlFor={dateId}
            className={labelClasses}
          >
            Date
          </label>
          <input
            type="date"
            id={dateId}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div className="flex-1 w-full">
          <label
            htmlFor={doctorId}
            className={labelClasses}
          >
            Doctor
          </label>
          <input
            type="text"
            id={doctorId}
            placeholder="Doctor's Name"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className={inputClasses}
          />
        </div>

        <button
          onClick={handleFilter}
          className="inline-flex w-full sm:w-40 items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  mt-0 sm:mt-4"
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
