var firebaseConfig = {
    apiKey: "AIzaSyDW68RC9cyvSUew80sDiD_Mv0aUjV1syBg",
    authDomain: "stingy-db.firebaseapp.com",
    projectId: "stingy-db",
    storageBucket: "stingy-db.appspot.com",
    messagingSenderId: "240964825094",
    appId: "1:240964825094:web:b2137751cc2ad36d301387",
    measurementId: "G-0ZT78WZELC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firestore = firebase.firestore();

var image = ""

$("#mugshot").change(() => {
    var file = document.querySelector('#mugshot').files[0];
    getBase64(file); // prints the base64 string

})


$("#download-button").click(() => {
    var fname = $("#name").val();
    var dob = $('#date-of-birth').val();
    var height = $('#height').val();
    var motto = $('#motto').val();
    var branch = $('#branch').val();
    var position = $('#position').val();
    var weight = $('#weight').val();
    firestore.collection("stingy").doc(fname).set({
        fname,
        dob,
        height,
        motto,
        branch,
        position,
        weight,
        date: new Date().toJSON().slice(0, 10).replace(/-/g, '-')

    }, { merge: true }).then(() => {
        console.log("Stingy Saved");
    }).catch((e) => {
        console.log("Got an error" + e);
    })
})


function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        image = reader.result
            // console.log(reader.result);
        return reader.result
    };
    reader.onerror = function(error) {
        console.log('Error: ', error);
    };
}
