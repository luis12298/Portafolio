import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyAiWzjnMDcmL-RJj2IPWp8ynp4SyL5fxxo",
   authDomain: "login-f8995.firebaseapp.com",
   projectId: "login-f8995",
   storageBucket: "login-f8995.appspot.com",
   messagingSenderId: "80187216840",
   appId: "1:80187216840:web:eabd21799049660b7e26fd",
   measurementId: "G-8YZLSFZHJJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const btnGoogle = document.querySelector("#btnGoogle");

btnGoogle.addEventListener("click", async () => {
   const provider = new GoogleAuthProvider();


   try {
      const credenciales = await signInWithPopup(auth, provider);
      console.log(credenciales);
      // alert("Correcto");
      window.location = "main.html";
   } catch (error) {
      console.log(error);
   }
});