// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDD9e4lXl7YPS_EY6p6vKhRaIwAb0IY0Ts",
    authDomain: "test-a5247.firebaseapp.com",
    projectId: "test-a5247",
    storageBucket: "test-a5247.appspot.com",
    messagingSenderId: "1053841943424",
    appId: "1:1053841943424:web:a26f7a3045ef60a661af65",
    measurementId: "G-5KM00E17NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

// Show register form when "Register Now" button is clicked
document.getElementById("show-register").addEventListener("click", function () {
    document.querySelector('.registration-form').style.display = 'block';
    document.querySelector('.login-form').style.display = 'none';
});

// Show login form when "Sign In" button is clicked
document.getElementById("show-login").addEventListener("click", function () {
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.registration-form').style.display = 'none';
});

// Register new user
document.getElementById("register").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("Registration successfully!!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

// Login existing user
document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " Login successfully!!!");
            document.getElementById('container').style.display='none';
            document.getElementById('test').style.display='block';
            
            document.getElementById('logout').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
});

// Logout user
document.getElementById("logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
        document.getElementById('test').style.display='none';
        document.getElementById('container').style.display='block';
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
    });
});
