// require('dotenv').config();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";



const firebaseConfig = {
    apiKey: "AIzaSyCkWpa1hNYHbnGAhh_c8f47OQnRaUfURHA",
    authDomain: "bootcamp-5f3e8.firebaseapp.com",
    projectId: "bootcamp-5f3e8",
    storageBucket: "bootcamp-5f3e8.appspot.com",
    messagingSenderId: "608928182775",
    appId: "1:608928182775:web:19d6e8614bdfae58983ef2",
    measurementId: "G-CEEY9ZH6ZX"
  };


  const app = initializeApp(firebaseConfig);
  // const database = getDatabase(app);
  const auth = getAuth();
  
  const submitButton = document.getElementById("submit");
  const signupButton = document.getElementById("sign-up");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const displayName = document.getElementById("display-name");
  const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");


var email,
  password,
  signupDisplayName,
  signupEmail,
  signupPassword



  submitButton.addEventListener("click", function () {
    email = emailInput.value;
    // console.log(email);
    password = passwordInput.value;
    // console.log(password);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
  
        window.alert("Success! Welcome back!");
        window.location = "index.html";
  
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        window.alert("Error occurred. Try again.");
      });
  });
  
  







const logregBox = document.querySelector('.logreg-box');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active')
});


loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active')
});
