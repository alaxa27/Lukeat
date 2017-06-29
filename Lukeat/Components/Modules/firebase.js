import * as firebase from 'firebase'
// configuration de firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1U8W5xns1BAECjIIZ-GiXIQFtH9XdlSA",
  authDomain: "saveeat-722b9.firebaseapp.com",
  databaseURL: "https://saveeat-722b9.firebaseio.com",
  projectId: "saveeat-722b9",
  storageBucket: "saveeat-722b9.appspot.com",
  messagingSenderId: "754282334702"
};

// initialisation
export const firebaseRef = firebase.initializeApp(firebaseConfig)

//export let provider = new firebase.auth.FacebookAuthProvider()
// la base de données
const database = firebase.database()

// Ignorer un warning qu'on doit resoudre par la suite
console.ignoredYellowBox = [
    'Setting a timer'
]

// Mettre les coordonnées de l'utilisateur dans la bd
export function writeUserData(userID, nom, prenom, email) {
  let user = database.ref(`users/${userID}`).set({
    first_name: prenom,
    last_name: nom,
    email: email
  })
}

// Lecture des coordonnées de l'utilisateur depuis la bd
export function fetchUserData(userID) {
  database.ref(`users/${userID}`).once('value').then((snapshot) => {
    if (!snapshot) {
      alert('erreur')
    } else {
      let data = snapshot.val()
      alert(`Salut ${data.first_name} ${data.last_name}!`)
    }
  })
}
