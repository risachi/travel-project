/*Generate and populate "Contact Us" button.  */
var parent = document.getElementById("content");
var button = document.createElement("input");
  button.type = "button";
  button.value = "Contact Us";
  button.name = "contactus";
  button.id = "contactus";
  button.addEventListener("click", function () {
    contactFields();
  })
var child = document.getElementById("aboutUsContainer");
parent.insertBefore(button, child);

/*Generate form element for email/phone contact fieldsets.  */
var contactForm = document.createElement("contactForm");
  contactForm.id = "contactcontactForm";
  contactForm.method = "post";

/*On "Contact Us" button click: generate and populate radio buttons
 for email,  phone or social media contact. */
function contactFields() {
  if (document.getElementById("contactus") != "") {
    var removeButton = document.getElementById("contactus");
    removeButton.parentNode.removeChild(removeButton);
  } /*if closure. */
  document.getElementById("content").setAttribute("style", "display: flex; margin-left: 2%");
  parent.appendChild(contactForm);
  var eLabel = document.createElement("label");
    eLabel.textContent = "Email: ";
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
    pLabel.textContent = "Phone: ";
  var phone = document.createElement("input");
    phone.type = "radio";
    phone.name = "contact";
    phone.id = "phone";
    phone.value = "Phone";
    phone.addEventListener("change", function() {
      displayPhone();
    });
  pLabel.appendChild(phone);
  var sLabel = document.createElement("label");
    sLabel.textContent = "Social Media: ";
  var social = document.createElement("input");
    social.type = "radio";
    social.name = "contact";
    social.id = "social";
    social.value = "Social Media";
    social.addEventListener("change", function() {
      displaySocial();
    });
  sLabel.appendChild(social);
  contactForm.appendChild(eLabel);
  contactForm.appendChild(pLabel);
  contactForm.appendChild(sLabel);
}; /*function contactFields closure.  */



/*For each person's div:
  -GitHub image to;
  -add email address on eLabel check;
  -add Linkin on Linkedin check;
  -Add icons for email & linkedin from bootstrap or other online resource.
  */

function displayEmail () {
/*If Phone Contact fieldset populated, remove it. */
  if (document.getElementById("pContact")) {
    var removePhoneField = document.getElementById("pContact");
    removePhoneField.parentNode.removeChild(removePhoneField);
  } /*if closure. */

/*If Danielle's phone populated, remove it. */
  if (document.getElementById("pDanielle")) {
    var removeDaniellePhone = document.getElementById("pDanielle");
    removeDaniellePhone.parentNode.removeChild(removeDaniellePhone);
  } /*if closure. */

/*If Danielle's social media populated, remove it. */
  if (document.getElementById("sDanielle")) {
    var removeDanielleSocial = document.getElementById("sDanielle");
    removeDanielleSocial.parentNode.removeChild(removeDanielleSocial);
  } /*if closure. */

/*Create and populate Danielle's email. */
  var eDanielle = document.createElement("a")
    eDanielle.href = "Danielle@domain.com";
    eDanielle.id = "eDanielle"
  var eIcon = document.createElement("i");
    eIcon.className = "fa fa-envelope";
    eDanielle.appendChild(eIcon);
  var DanielleEmail = document.getElementById("Danielle");
    DanielleEmail.appendChild(eDanielle);

/*If Jacob's phone populated, remove it. */
  if (document.getElementById("pJacob")) {
    var removeJacobPhone = document.getElementById("pJacob");
    removeJacobPhone.parentNode.removeChild(removeJacobPhone);
  } /*if closure. */

/*If Jacob's social media populated, remove it. */
  if (document.getElementById("sJacob")) {
    var removeJacobSocial = document.getElementById("sJacob");
    removeJacobSocial.parentNode.removeChild(removeJacobSocial);
  } /*if closure. */

/*Create and populate Jacob's email. */
  var eJacob = document.createElement("a")
    eJacob.href = "Jacob@domain.com";
    eJacob.id = "eJacob"
  var eIcon = document.createElement("i");
    eIcon.className = "fa fa-envelope";
    eJacob.appendChild(eIcon);
  var JacobEmail = document.getElementById("Jacob");
    JacobEmail.appendChild(eJacob);

/*If Jonathon's phone populated, remove it. */
  if (document.getElementById("pJonathon")) {
    var removeJonathonPhone = document.getElementById("pJonathon");
    removeJonathonPhone.parentNode.removeChild(removeJonathonPhone);
  } /*if closure. */

/*If Jonathon's social media populated, remove it. */
  if (document.getElementById("sJonathon")) {
    var removeJonathonSocial = document.getElementById("sJonathon");
    removeJonathonSocial.parentNode.removeChild(removeJonathonSocial);
  } /*if closure. */

/*Create and populate Jonathon's email. */
  var eJonathon = document.createElement("a")
    eJonathon.href = "Jonathon@domain.com";
    eJonathon.id = "eJonathon"
  var eIcon = document.createElement("i");
    eIcon.className = "fa fa-envelope";
    eJonathon.appendChild(eIcon);
  var JonathonEmail = document.getElementById("Jonathon");
    JonathonEmail.appendChild(eJonathon);

/*If Lisa's phone populated, remove it. */
  if (document.getElementById("pLisa")) {
    var removeLisaPhone = document.getElementById("pLisa");
    removeLisaPhone.parentNode.removeChild(removeLisaPhone);
  } /*if closure. */

/*If Lisa's social media populated, remove it. */
  if (document.getElementById("sLisa")) {
    var removeLisaSocial = document.getElementById("sLisa");
    removeLisaSocial.parentNode.removeChild(removeLisaSocial);
  } /*if closure. */

/*Create and populate Lisa's email. */
  var eLisa = document.createElement("a")
    eLisa.href = "Lisa@domain.com";
    eLisa.id = "eLisa"
  var eIcon = document.createElement("i");
    eIcon.className = "fa fa-envelope";
    eLisa.appendChild(eIcon);
  var LisaEmail = document.getElementById("Lisa");
    LisaEmail.appendChild(eLisa);

/*Generate fieldset with inputs for email contact.  */
  var eContact = document.createElement("fieldset");
    eContact.id = "eContact";
  var eLegend = document.createElement("legend");
    eLegend.textContent = "Email Contact";
  var firstName = document.createElement("input");
    firstName.type = "text";
    firstName.placeholder = "First Name:";
    firstName.id = "firstName";
  var lastName = document.createElement("input");
    lastName.type = "text";
    lastName.placeholder = "Last Name:";
    lastName.id = "lastName";
  var yourEmail = document.createElement("input");
    yourEmail.type = "email";
    yourEmail.placeholder = "Your email address:";
    yourEmail.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
    yourEmail.id = "yourEmail";
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
  var contactExplain = document.createElement("textarea");
    contactExplain.id = "contactExplain";
    contactExplain.placeholder = "Enter a brief description for why you'd like to hear back from us";
    contactExplain.contactForm = "contactcontactForm";

/*Populate fieldset and inputs into form element. */
  contactForm.appendChild(eContact);
  eContact.appendChild(eLegend);
  eContact.appendChild(firstName);
  eContact.appendChild(lastName);
  eContact.appendChild(yourEmail);
  eContact.appendChild(contactReason);
  eContact.appendChild(contactExplain);
} /*function displayEmail closure.  */

function displayPhone () {
  if (document.getElementById("eContact")) {
    var removeEmailField = document.getElementById("eContact");
    removeEmailField.parentNode.removeChild(removeEmailField);
  } /*if closure. */

/*If Danielle's email populated, remove it. */
  if (document.getElementById("eDanielle")) {
    var removeDanielleEmail = document.getElementById("eDanielle");
    removeDanielleEmail.parentNode.removeChild(removeDanielleEmail);
  } /*if closure. */

/*If Danielle's social media populated, remove it. */
  if (document.getElementById("sDanielle")) {
    var removeDanielleSocial = document.getElementById("sDanielle");
    removeDanielleSocial.parentNode.removeChild(removeDanielleSocial);
  } /*if closure. */

/*Create and populate Danielle's phone number. */
  var pDanielle = document.createElement("a")
    pDanielle.href = "tel:+5039999999";
    pDanielle.textContent = "503-999-9999";
    pDanielle.id = "pDanielle"
  var pIcon = document.createElement("i");
    pIcon.className = "fa fa-phone";
    pDanielle.appendChild(pIcon);
  var DaniellePhone = document.getElementById("Danielle");
    DaniellePhone.appendChild(pDanielle);

/*If Jacob's email populated, remove it. */
  if (document.getElementById("eJacob")) {
    var removeJacobEmail = document.getElementById("eJacob");
    removeJacobEmail.parentNode.removeChild(removeJacobEmail);
  } /*if closure. */

/*If Jacob's social media populated, remove it. */
  if (document.getElementById("sJacob")) {
    var removeJacobSocial = document.getElementById("sJacob");
    removeJacobSocial.parentNode.removeChild(removeJacobSocial);
  } /*if closure. */

/*Create and populate Jacob's phone number. */
  var pJacob = document.createElement("a")
    pJacob.href = "tel:+5038888888";
    pJacob.textContent = "503-888-8888";
    pJacob.id = "pJacob"
  var pIcon = document.createElement("i");
    pIcon.className = "fa fa-phone";
    pJacob.appendChild(pIcon);
  var JacobPhone = document.getElementById("Jacob");
    JacobPhone.appendChild(pJacob);

/*If Jonathon's email populated, remove it. */
  if (document.getElementById("eJonathon")) {
    var removeJonathonEmail = document.getElementById("eJonathon");
    removeJonathonEmail.parentNode.removeChild(removeJonathonEmail);
  } /*if closure. */

/*If Jonathon's social media populated, remove it. */
  if (document.getElementById("sJonathon")) {
    var removeJonathonSocial = document.getElementById("sJonathon");
    removeJonathonSocial.parentNode.removeChild(removeJonathonSocial);
  } /*if closure. */

/*Create and populate Jonathon's phone number. */
  var pJonathon = document.createElement("a")
    pJonathon.href = "tel:+5037777777";
    pJonathon.textContent = "503-777-7777";
    pJonathon.id = "pJonathon"
  var pIcon = document.createElement("i");
    pIcon.className = "fa fa-phone";
    pJonathon.appendChild(pIcon);
  var JonathonPhone = document.getElementById("Jonathon");
    JonathonPhone.appendChild(pJonathon);

/*If Lisa's email populated, remove it. */
  if (document.getElementById("eLisa")) {
    var removeLisaPhone = document.getElementById("eLisa");
    removeLisaPhone.parentNode.removeChild(removeLisaPhone);
  } /*if closure. */

/*If Lisa's social media populated, remove it. */
  if (document.getElementById("sLisa")) {
    var removeLisaSocial = document.getElementById("sLisa");
    removeLisaSocial.parentNode.removeChild(removeLisaSocial);
  } /*if closure. */

/*Create and populate Lisa's phone number. */
  var pLisa = document.createElement("a")
    pLisa.href = "tel:+5036666666";
    pLisa.textContent = "503-666-6666";
    pLisa.id = "pLisa"
  var pIcon = document.createElement("i");
    pIcon.className = "fa fa-phone";
    pLisa.appendChild(pIcon);
  var LisaPhone = document.getElementById("Lisa");
    LisaPhone.appendChild(pLisa);

/*Generate fieldset with inputs for email contact.  */
  var pContact = document.createElement("fieldset");
    pContact.id = "pContact";
  var pLegend = document.createElement("legend");
    pLegend.textContent = "Email Contact";
  var firstName = document.createElement("input");
    firstName.type = "text";
    firstName.placeholder = "First Name";
    firstName.id = "firstName";
  var lastName = document.createElement("input");
    lastName.type = "text";
    lastName.placeholder = "Last Name";
    lastName.id = "lastName";
  var yourPhone = document.createElement("input");
    yourPhone.type = "tel";
    yourPhone.placeholder = "Your phone number:";
    yourPhone.pattern = "[0-9\/]*"
    yourPhone.id = "yourPhone";
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
  var contactTime = document.createElement("label");
    contactTime.textContent = "Best time to contact you:";
  var contactfield = document.createElement("input");
    contactfield.type = "text";
    contactfield.name = "timeToContact";
    contactfield.id = "timeToContact";
    contactfield.form = "contactForm";
    contactfield.placeholder = "Best time to call/text";
  contactTime.appendChild(contactfield);
  var contactExplain = document.createElement("textarea");
    contactExplain.id = "contactExplain";
    contactExplain.placeholder = "Enter a brief description for why you'd like to hear back from us";
    contactExplain.contactForm = "contactcontactForm";
  contactForm.appendChild(pContact);
  pContact.appendChild(pLegend);
  pContact.appendChild(firstName);
  pContact.appendChild(lastName);
  pContact.appendChild(yourPhone);
  pContact.appendChild(contactReason);
  pContact.appendChild(contactTime);
  pContact.appendChild(contactExplain);
} /*function displayPhone closure.  */

function displaySocial () {
/*If Email Contact fieldset populated, remove it. */
  if (document.getElementById("eContact")) {
    var removeEmailField = document.getElementById("eContact");
    removeEmailField.parentNode.removeChild(removeEmailField);
  } /*if closure. */

/*If Phone Contact fieldset populated, remove it. */
  if (document.getElementById("pContact")) {
    var removePhoneField = document.getElementById("pContact");
    removePhoneField.parentNode.removeChild(removePhoneField);
  } /*if closure. */

/*If Danielle's email populated, remove it. */
  if (document.getElementById("eDanielle")) {
    var removeDanielleEmail = document.getElementById("eDanielle");
    removeDanielleEmail.parentNode.removeChild(removeDanielleEmail);
  } /*if closure. */

/*If Danielle's phone number populated, remove it. */
  if (document.getElementById("pDanielle")) {
    var removeDaniellePhone = document.getElementById("pDanielle");
    removeDaniellePhone.parentNode.removeChild(removeDaniellePhone);
  } /*if closure. */

/*Create and populate Danielle's social media. */
  var sDanielle = document.createElement("a")
    sDanielle.href = "https://www.linkedin.com/in/daheber";
    sDanielle.id = "sDanielle"
  var sIcon = document.createElement("i");
    sIcon.className = "fa fa-linkedin";
    sDanielle.appendChild(sIcon);
  var DanielleSocial = document.getElementById("Danielle");
    DanielleSocial.appendChild(sDanielle);

/*If Jacob's email populated, remove it. */
  if (document.getElementById("eJacob")) {
    var removeJacobEmail = document.getElementById("eJacob");
    removeJacobEmail.parentNode.removeChild(removeJacobEmail);
  } /*if closure. */

/*If Jacob's phone numnber populated, remove it. */
  if (document.getElementById("pJacob")) {
    var removeJacobPhone = document.getElementById("pJacob");
    removeJacobPhone.parentNode.removeChild(removeJacobPhone);
  } /*if closure. */

/*Create and populate Jacob's social media. */
  var sJacob = document.createElement("a")
    sJacob.href = "https://www.linkedin.com/in/jacob-hillman-53864320";
    sJacob.id = "sJacob"
  var sIcon = document.createElement("i");
    sIcon.className = "fa fa-linkedin";
    sJacob.appendChild(sIcon);
  var JacobSocial = document.getElementById("Jacob");
    JacobSocial.appendChild(sJacob);

/*If Jonathon's email populated, remove it. */
  if (document.getElementById("eJonathon")) {
    var removeJonathonEmail = document.getElementById("eJonathon");
    removeJonathonEmail.parentNode.removeChild(removeJonathonEmail);
  } /*if closure. */

/*If Jonathon's phone number populated, remove it. */
  if (document.getElementById("pJonathon")) {
    var removeJonathonPhone = document.getElementById("pJonathon");
    removeJonathonPhone.parentNode.removeChild(removeJonathonPhone);
  } /*if closure. */

/*Create and populate Jonathon's social media. */
  var sJonathon = document.createElement("a")
    sJonathon.href = "jonathon.com";
    sJonathon.textContent = "social media";
    sJonathon.id = "sJonathon"
  var JonathonSocial = document.getElementById("Jonathon");
    JonathonSocial.appendChild(sJonathon);

/*If Lisa's email populated, remove it. */
  if (document.getElementById("eLisa")) {
    var removeLisaPhone = document.getElementById("eLisa");
    removeLisaPhone.parentNode.removeChild(removeLisaPhone);
  } /*if closure. */

/*If Lisa's phone number populated, remove it. */
  if (document.getElementById("pLisa")) {
    var removeLisaPhone = document.getElementById("pLisa");
    removeLisaPhone.parentNode.removeChild(removeLisaPhone);
  } /*if closure. */

/*Create and populate Lisa's phone number. */
  var sLisa = document.createElement("a")
    sLisa.href = "lisa.com";
    sLisa.textContent = "social media";
    sLisa.id = "sLisa"
  var LisaSocial = document.getElementById("Lisa");
    LisaSocial.appendChild(sLisa);
}
