var contactType = ["Email", "Phone", "Meeting"];

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
  for (index = 0; index < contactType; index++) {
    var method = document.createElement("input");
      method.type = "radio";
      method.name = "contactMe";
      method.id = index;
      method.value = contactType[index];
      form.appendChild("method");

  } /*for loop closure. */
}; /*function contactFields closure.  */

