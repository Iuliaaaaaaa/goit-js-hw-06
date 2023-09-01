const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(loginFormRef);
  const formDataObject = {};
  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });
  if (!formDataObject.email || !formDataObject.password) {
    alert("All fields must be filled in");
    return;
  }
  console.log(formDataObject);
  loginFormRef.reset();
});
