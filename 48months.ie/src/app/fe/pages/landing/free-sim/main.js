
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAWQU_gn5iAeKio6mNTRmJPZ23shpv5OIY",
    authDomain: "months-b9894.firebaseapp.com",
    databaseURL: "https://months-b9894.firebaseio.com",
    projectId: "months-b9894",
    storageBucket: "months-b9894.appspot.com",
    messagingSenderId: "819966739849"
  };
  firebase.initializeApp(config);

var dataref=firebase.database().ref('48months');

document.getElementById('orderdetails').addEventListener('submit',submitForm);






function submitForm(e){
e.preventDefault();
var name =getInputVal('name');
var mobile =getInputVal('mobile');
var email =getInputVal('email');
var doorno =getInputVal('door_no');
var street =getInputVal('street');
var locality =getInputVal('locality');
var city =getInputVal('city');
var pincode =getInputVal('pincode');
var state =getInputVal('state');

console.log(street);

saveData(name,mobile,email.door_no,street,locality,city,pincode,state);
}


function getInputVal(id){

    return document.getElementById(id).value;
}






function saveData(name,mobile,email,door_no,street,locality,city,pincode,state){
var newDataRef = dataref.push();

newDataRef.set({
name:name,
mobile:mobile,
email:email,
doorno:door_no,
street:street,
locality:locality,
city:city,
pincode:pincode,
state:state

})

}