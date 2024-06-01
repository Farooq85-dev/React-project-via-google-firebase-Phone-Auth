import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBauOHF0Vtd64576E88OyzAfQNRdrSJNFk",
    authDomain: "first-test-5cb7c.firebaseapp.com",
    databaseURL: "https://first-test-5cb7c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "first-test-5cb7c",
    storageBucket: "first-test-5cb7c.appspot.com",
    messagingSenderId: "660435885686",
    appId: "1:660435885686:web:62304cbdd2891a516ac957",
    measurementId: "G-STM148JSFZ"
};

//Initialize App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };