const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = function () {
  const name = document.getElementById("name");
  if (reservations[name.value] && !reservations[name.value].claimed) {
    console.log(`Welcome, ${name.value}`);
  } else if (reservations[name.value] && reservations[name.value].claimed) {
    console.log("Hmm, someone already claimed this reservation");
  } else {
    console.log("You have no reservation");
  }
  name.value = null;
};

// checkReservation("Bob");
// checkReservation("Ted");
// checkReservation("John");
