var contactForm = document.createElement("contactForm");
  contactForm.id = "contactcontactForm";
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
  if (document.getElementById("contactus") != "") {
    var removeButton = document.getElementById("contactus");
    removeButton.parentNode.removeChild(removeButton);
  } /*if closure. */
  parent.appendChild(contactForm);
  var eLabel = document.createElement("label");
    eLabel.textContent = "Email";
  var email = document.createElement("input");
    email.type = "radio";
    email.name = "contact";
    email.id = "email";
    email.value = "Email";
    email.addEventListener("change", function() {
      displayEmail();
    });
  eLabel.appendChild(email);
  var pLabel = document.createElement("label");
    pLabel.textContent = "Phone";
  var phone = document.createElement("input");
    phone.type = "radio";
    phone.name = "contact";
    phone.id = "phone";
    phone.value = "Phone";
    phone.addEventListener("change", function() {
      displayPhone();
    });
  pLabel.appendChild(phone);
  contactForm.appendChild(eLabel);
  contactForm.appendChild(pLabel);
}; /*function contactFields closure.  */



/*For each person's div:
  -GitHub image to;
  -add email address on eLabel check;
  -add Linkin on Linkedin check;
  -Add icons for email & linkedin from bootstrap or other online resource.
  */

function displayEmail () {
  if (document.getElementById("pContact")) {
    var removePhoneField = document.getElementById("pContact");
    removePhoneField.parentNode.removeChild(removePhoneField);
  } /*if closure. */
  var eContact = document.createElement("fieldset");
    eContact.id = "emailContact";
    eContact.legend = "Email Contact";
  var firstName = document.createElement("input");
    firstName.type = "text";
    firstName.value = "First Name";
    firstName.id = "firstName";
  var lastName = document.createElement("input");
    firstName.type = "text";
    firstName.value = "Last Name";
    firstName.id = "lastName";
  var contactReason = document.createElement("select");
    var reason1 = document.createElement("option");
      reason1.value = "Comment";
      reason1.textContent = "Comment";
    var reason2 = document.createElement("option");
      reason2.value = "Suggestion";
      reason2.textContent = "Suggestion";
    var reason3 = document.createElement("option");
      reason3.value = "BrokenLink";
      reason3.textContent = "Broken Link";
    contactReason.appendChild(reason1);
    contactReason.appendChild(reason2);
    contactReason.appendChild(reason3);
  var textField = document.createElement("textarea");
    textField.value = "Enter a description here.";
    textField.contactForm = "contactcontactForm";
  contactForm.appendChild(eContact);
  eContact.appendChild(firstName);
  eContact.appendChild(lastName);
  eContact.appendChild(contactReason);
  eContact.appendChild(textField);


}
