// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();


// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#config-web-app 


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfuLuqE0BCBBNZk-DklM0JRJ3hdyflVSU",
    authDomain: "social-network-3938b.firebaseapp.com",
    databaseURL: "https://social-network-3938b.firebaseio.com",
    projectId: "social-network-3938b",
    storageBucket: "",
    messagingSenderId: "887676341487",
    appId: "1:887676341487:web:3e837b84e4501e0f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// login de mi usuario
const entrar = document.getElementById('login');
entrar.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let contraseña = document.getElementById('contraseña').value;
    // console.log(email);
    // console.log(contraseña);
    firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
});
const entrarRegistro = document.getElementById('login-registrado');
entrarRegistro.addEventListener('click', () => {
    let emailre = document.getElementById('email-registrado').value;
    let contraseñare = document.getElementById('contraseña-registrado').value;
    // console.log(email);
    // console.log(contraseña);
    firebase.auth().signInWithEmailAndPassword(emailre, contraseñare).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
});

let observador = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('existe el usuario');
            aparece();
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
            console.log('no existe el usuario');
        }
    });
}
observador()

let aparece = () => {
        let contenido = document.getElementById('contenido');
        contenido.innerHTML = 'solo lo ve el usuario'
    }
    // ingresar con cuenta de google 
var provider = new firebase.auth.GoogleAuthProvider();
const ingresoGogle = document.getElementById('login-google')
ingresoGogle.addEventListener('click', () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error);
        // ...
    });
});