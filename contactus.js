var form = document.createElement("form");
  form.id = "contactForm";
var parent = document.getElementById("content");
var button = document.createElement("input");
  button.type = "button";
  button.value = "Contact Us";
  button.name = "contactus";
  button.id = "contactus";
  button.addEventListener("click", function () {
    contactFields();
  })
parent.appendChild(button);



function contactFields() {
  parent.appendChild(form);
  var eLabel = document.createElement("label");
    eLabel.textContent = "Email";
  var email = document.createElement("input");
    email.type = "radio";
    email.name = "contact";
    email.id = "email";
    email.value = "Email";
  eLabel.appendChild(email);
  var pLabel = document.createElement("label");
    pLabel.textContent = "Phone";
  var phone = document.createElement("input");
    phone.type = "radio";
    phone.name = "contact";
    phone.id = "phone";
    phone.value = "Phone";
  pLabel.appendChild(phone);
  form.appendChild(eLabel);
  form.appendChild(pLabel);
}; /*function contactFields closure.  */

