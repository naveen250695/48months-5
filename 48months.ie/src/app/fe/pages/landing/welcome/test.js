document.getElementById('orderdetails').addEventListener('submit',submitForm);

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


function getInputval(id){

    return document.getElementById(id).value;
}



function fetchData(id){

    document.getElementById(id).value;

}


function fetchOrderData(id){

    document.getElementById(id).value;
}


function saveData(name,mobile,email,door_no,street,locality,city,pincode,state){

    console.log(name);
    console.log(door_no);
}