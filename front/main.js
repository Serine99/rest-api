(async () => {
  const response = await fetch("http://localhost:3000/users", {
    method: "GET",
  });
  const body = await response.json();
  console.log("body", body);
})();

const button = document.getElementById("button");
button.addEventListener("click", () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const requestBody = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  console.log(requestBody);

  try {
    const response = fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
});
const savedData = document.getElementById("savedData");
