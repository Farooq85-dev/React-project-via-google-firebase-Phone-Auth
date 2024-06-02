import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCecs2nsTFfdQN0J8pIvQuAlxPN7YBiRsg",
    authDomain: "apna-store-b0add.firebaseapp.com",
    databaseURL: "https://apna-store-b0add-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "apna-store-b0add",
    storageBucket: "apna-store-b0add.appspot.com",
    messagingSenderId: "892210256914",
    appId: "1:892210256914:web:39b139142008b63f8e0ccb",
    measurementId: "G-04NWST42BK"
};

//Initialize App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };