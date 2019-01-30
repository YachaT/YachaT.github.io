//back to top

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".diamond").addEventListener("click", function() {
    document.querySelector(".navbar").scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", function() {
  var scroll = window.scrollY;
  if (scroll > 938) {
    document.querySelector("#diamondshape").classList.add("show");
    document.querySelector("#diamondshape").classList.remove("noshow");
  }
  if (scroll < 938) {
    document.querySelector("#diamondshape").classList.add("noshow");
    document.querySelector("#diamondshape").classList.remove("show");
  }
  console.log(scroll);
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCoG9W3xUtWAoFhlsPwppbkJqdc2mZ1Ldo",
  authDomain: "contactform-16c0b.firebaseapp.com",
  databaseURL: "https://contactform-16c0b.firebaseio.com",
  projectId: "contactform-16c0b",
  storageBucket: "contactform-16c0b.appspot.com",
  messagingSenderId: "897861586477"
};
firebase.initializeApp(config);
// reference messages collection
var messagesRef = firebase.database().ref("messages");

// CREATE AN EVENT LISTENER for form submission

document.getElementById("contactForm").addEventListener("submit", submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();

  // Get values

  var firstname = getInputVal("firstname");
  var lastname = getInputVal("lastname");
  var phone = getInputVal("phone");
  var email = getInputVal("email");
  var message = getInputVal("message");

  saveMessage(firstname, lastname, email, phone, message);
  // show alert
  document.querySelector(".alert").style.display = "block";

  // hide alert after 3 seconds

  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3500);

  //clear form
  document.getElementById("contactForm").reset();
}

// function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//save  message to firebase

function saveMessage(firstname, lastname, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message
  });
}
