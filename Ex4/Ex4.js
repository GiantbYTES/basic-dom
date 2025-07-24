function validate() {
  const err = document.getElementById("message");
  if (err) {
    const errorCon = document.getElementById("error");
    errorCon.removeChild(err);
  }
  const name = document.getElementById("nameInput");
  const salary = document.getElementById("salaryInput");
  const birthday = document.getElementById("birthdayInput");
  const phone = document.getElementById("phoneInput");
  let error = "";

  console.log("name input:" + name.value);
  console.log("salary input:" + salary);
  console.log("birthday input:" + birthday);
  console.log("phone input:" + phone);

  if (!name.value) {
    error = "Name is missing";
  } else if (!salary.value) {
    error = "Desired Salary is missing";
  } else if (!birthday.value) {
    error = "Birthday may not be null";
  } else if (!phone.value) {
    error = "Phone is missing";
  } else if (name.value.length < 2) {
    error = "Name must be longer than 2 characters";
  } else if (salary.value > 16000 || salary.value < 10000) {
    error = "Salary must be greater than 10,000 but less than 16,000";
  } else if (phone.value.length !== 10) {
    error = "Phone must be 10 digits long";
  }
  if (error) addError(error);
}

function addError(error) {
  const newError = document.createElement("h4");
  newError.innerHTML = error;
  const errorCon = document.getElementById("error");
  errorCon.appendChild(newError);
  newError.setAttribute("id", "message");
}
