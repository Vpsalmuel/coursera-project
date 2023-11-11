import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./BookingApi";

const BookingPage = () => {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <div className="main-cont">
        <div className="form-container">
          <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </div>
      </div>
    </>
  );
};

export default BookingPage;
