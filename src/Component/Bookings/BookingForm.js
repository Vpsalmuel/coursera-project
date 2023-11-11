import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm(props) {
  const [fName, setFName] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lName, setLName] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const navigate = useNavigate();

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const handleSubmit = () => {
    // Validate the form data before submission
    if (!validateForm()) {
      return;
    }
    // Collect all form data
    const formData = {
      fName,
      lName,
      email,
      tel,
      people,
      date,
      occasion,
      preferences,
      comments,
      selectedTime: document.getElementById("time").value,
    };

    // Log the form data to the console
    console.log("Form Data:", formData);

    // Navigate to "/confirmed"
    navigate("/confirmed");
  };
  // Validate individual input fields
  const validateForm = () => {
    let isValid = true;

    // You can add more specific validation rules based on your requirements
    if (fName.trim() === "") {
      setFNameError("First Name is required");
      isValid = false;
    } else {
      setFNameError("");
    }

    if (lName.trim() === "") {
      setLNameError("Last Name is required");
      isValid = false;
    } else {
      setLNameError("");
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Add more validation rules for other fields as needed

    return isValid;
  };

  // Function to validate email using a regular expression
  const isValidEmail = (value) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <form className="reservation-form">
      <div className="title">Make Reservation</div>
      <div className="sections">
        <div>
          <label htmlFor="fName">First Name</label> <br></br>
          <input
            type="text"
            id="fName"
            placeholder="First Name"
            required
            minLength={2}
            maxLength={50}
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          ></input>
          {fNameError && <div className="error-message">{fNameError}</div>}
        </div>

        <div>
          <label htmlFor="lName">Last Name</label> <br></br>
          <input
            type="text"
            id="lName"
            placeholder="Last Name"
            minLength={2}
            maxLength={50}
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          ></input>
          {lNameError && <div className="error-message">{lNameError}</div>}
        </div>
      </div>
      <div className="sections">
        <div>
          <label htmlFor="email">Email</label> <br></br>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            required
            minLength={4}
            maxLength={200}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <div>
          <label htmlFor="phonenum">Phone Number</label> <br></br>
          <input
            type="tel"
            id="phonenum"
            placeholder="(xxx)-xxx-xxxx"
            value={tel}
            required
            minLength={10}
            maxLength={25}
            onChange={(e) => setTel(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="sections">
        <div>
          <label htmlFor="people">Number of People</label> <br></br>
          <input
            type="number"
            id="people"
            placeholder="Number of People"
            value={people}
            required
            min={1}
            max={100}
            onChange={(e) => setPeople(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="date">Select Date</label> <br></br>
          <input
            type="date"
            id="date"
            required
            value={date}
            onChange={handleDateChange}
          ></input>
        </div>
      </div>
      <div className="sections">
        <div>
          <div>
            <label htmlFor="time">Select Time</label> <br></br>
            <select id="time" required>
              {finalTime}
            </select>
          </div>

          <div>
            <label htmlFor="occasion">Occasion</label> <br></br>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          {/* <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div> */}
          <label htmlFor="comments">Additional Comments</label> <br></br>
          <textarea
            id="comments"
            rows={8}
            cols={50}
            placeholder="Additional Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div>
        <br></br>
        {/* <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small> */}
        <button
          className="action-button"
          style={{ marginTop: "10px" }}
          type="button"
          onClick={handleSubmit}
        >
          Book Table
        </button>
      </div>
    </form>
  );
}
