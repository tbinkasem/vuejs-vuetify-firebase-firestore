import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    // apiKey: "AIzaSyCZ1e80Wr71MTXhcpYgI1NbbXEYXvNl9nE",
    // authDomain: "filestore-946af.firebaseapp.com",
    // databaseURL: "https://filestore-946af.firebaseio.com",
    // projectId: "filestore-946af",
    // storageBucket: "filestore-946af.appspot.com",
    // messagingSenderId: "388616538078",
    apiKey: "AIzaSyDlFYV-5xE7c8s_bNb2o6Db3auacDMkr3g",
    authDomain: "project-manager-9673a.firebaseapp.com",
    projectId: "project-manager-9673a",
    storageBucket: "project-manager-9673a.appspot.com",
    messagingSenderId: "361270400877",
    appId: "1:361270400877:web:dfe593b413d6a5f3fa2c64",
    measurementId: "G-8G5JZ8PRDW"
    // apiKey: "AIzaSyBymI-VduJslhz8Z92vuk1iuij9RApNo-w",
    // authDomain: "project-manager-e9e1b.firebaseapp.com",
    // projectId: "project-manager-e9e1b",
    // storageBucket: "project-manager-e9e1b.appspot.com",
    // messagingSenderId: "838686200167",
    // appId: "1:838686200167:web:b1ae63dd4d9addc7c49fc2",
    // measurementId: "G-JNHFWH6137"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;