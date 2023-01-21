export const saveBookingData = async (bookingData) => {
  const response = await fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await response.json();
  return data;
};

// getting all the bookings by user email
export const getBookingsByEmail = async (email) => {
  const response = await fetch(`http://localhost:5000/bookings?email=${email}`);
  const data = await response.json();
  return data;
};

// getting all the bookings by user email
export const getBookings = async () => {
  const response = await fetch(`http://localhost:5000/bookings`);
  const data = await response.json();
  return data;
};
