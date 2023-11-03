import {initializeApp} from "firebase/app";
// import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2-JPwwYvpgPHps-VSbqYOaYHn46DSjzc",
  authDomain: "controle-de-gastos-8f315.firebaseapp.com",
  projectId: "controle-de-gastos-8f315",
  storageBucket: "controle-de-gastos-8f315.appspot.com",
  messagingSenderId: "950556322482",
  appId: "1:950556322482:web:fe7a0ffadae0c0f826b7ab",
  measurementId: "G-E63L4R0BFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};
