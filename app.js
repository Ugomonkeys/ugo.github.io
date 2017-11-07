
//<script src="https://www.gstatic.com/firebasejs/4.6.1/firebase.js"></script>
//<script>
//Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCix3AMIl1I8DgTZAvQlW3YNhpbLw7nrOA",
//     authDomain: "ugotest-9d2c1.firebaseapp.com",
//     databaseURL: "https://ugotest-9d2c1.firebaseio.com",
//     projectId: "ugotest-9d2c1",
//     storageBucket: "ugotest-9d2c1.appspot.com",
//     messagingSenderId: "89425037625"
//   };

//   firebase.initializeApp(config);
//   var firestore = firebase.firestore();
//   //firebase.database().ref();
//   //
  

//   //const docRef = firestore.collection("samples").doc("emails");
//   //const docRef = firestore.doc("samples/emails")
//   const inputTextField = document.querySelector("#emailTextField");
//   const saveButton = document.querySelector("#registerButton");

//   saveButton.addEventListener("click", function() {
//     const textToSave = inputTextField.value;
//     console.log("Se grabo el email " + textToSave + " a Firestore");
    
//     firestore.collection("samples").doc("email").set({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//     .then(function() {
//     console.log("Document written with ID");
//   })
//     .catch(function(error) {
//     console.error("Error adding document: ", error);
// });    

// //     firestore.collection("samples").add({
// //     email : textToSave
// // })
// // .then(function(docRef) {
// //     console.log("Document written with ID: ", textToSave);
// // })
// // .catch(function(error) {
// //     console.error("Error adding document: ", error);
// // });

//     // docRef.add({
//     //   email : textToSave
//     // }).then(function() {
//     //   console.log("Status saved!");
//     // }).catch(function (error) {
//     //   console.log("Got an error: ", error);
//     // });
//   })

  //const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");


firebase.initializeApp({
  apiKey: 'AIzaSyAHbsDbew_iYsNh3ts5PDFoUFkHOCj-6IU',
  authDomain: 'ugotest-da9de.firebaseapp.com',
  projectId: 'ugotest-da9de'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

const inputTextField = document.querySelector("#emailTextField");
const saveButton = document.querySelector("#registerButton");

saveButton.addEventListener("click", function() {
  const textToSave = inputTextField.value;
  console.log("Se grabo el email " + textToSave + " a Firestore");

  db.collection("user").add({
  email: textToSave
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
});  






