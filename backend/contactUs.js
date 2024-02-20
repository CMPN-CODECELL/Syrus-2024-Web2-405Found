// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMAgEiZ0q96bNkcAbJRBSoK3qv7XzkS-A",
    authDomain: "syrus-official.firebaseapp.com",
    databaseURL: "https://syrus-official-default-rtdb.firebaseio.com",
    projectId: "syrus-official",
    storageBucket: "syrus-official.appspot.com",
    messagingSenderId: "596270887718",
    appId: "1:596270887718:web:82128939d429ccd98d07e7"
  };
// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth()
// const database = firebase.database()
// Create a new Date object
function submit() {
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, message })
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully');
            // Optionally, reset the form after successful submission
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        } else {
            console.error('Error sending email');
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
}
