import Rebase from "re-base";
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCbzAj9Q3C4S-QpJg4q11ob9kBdJVnt-tg",
  authDomain: "catch-of-the-day-8ccde.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-8ccde-default-rtdb.firebaseio.com",
});
const base = Rebase.createClass(firebaseApp.database());
//named export
export { firebaseApp };
//default export
export default base;
