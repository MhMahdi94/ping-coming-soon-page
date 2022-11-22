let id = (id) => document.getElementById(id);

let email=id('email');
let error=id('error');


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(email,  "Please provide a valid email address");
});

let engine = (id,  message) => {
    if (id.value.trim() === "") {
      error.innerHTML = message;
      id.style.border="1px solid hsl(354, 100%, 66%)";
    } else {
      error.innerHTML = "";
      id.style.border = "2px solid green";
    }
};
  