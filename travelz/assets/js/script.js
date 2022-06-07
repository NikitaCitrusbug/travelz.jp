function checkButton() {  
  if(document.getElementById('user_field').checked) { 
      document.getElementById("display").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "user field"; 
  } 
  else if(document.getElementById('email_field').checked) { 
      document.getElementById("display").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "email field";   
  } 
 
  else { 
      document.getElementById("err").innerHTML 
          = "Please enter a username and email"; 
  } 
} 

function userValidation() {
  var username = document.getElementById("user_field").value;
  var format = /[ 0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (username == "") {
    document.getElementById("user-error").innerHTML =
      "Username must not be empty";
      username.focus;
    return false;
  } else if (username != "") {
    if (username.match(format)) {
      document.getElementById("user-error").innerHTML =
        "Username must not contain any symbols and number";
        username.focus;  
      return false;
    } else if (username.length < 3) {
      document.getElementById("user-error").innerHTML =
        "Username must contain at least 3 characters";
        username.focus;
      return false;
    } else if (username.length > 10) {
      document.getElementById("user-error").innerHTML =
        "Username must not exceed 10 characters";
        username.focus;
      return false;
    } else {
      return true;
    }
  }
}
function emailValidation() {
  var email = document.getElementById('email_field');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        document.getElementById("email-error").innerHTML =
        "Please provide a valid email address";
        // alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    else {
        alert("Thanks you....");
        return true;
    }
 }
 function checkButtonOccupation() {  
  if(document.getElementById('opt-radio01').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "Selected School Students"; 
  } 
  else if(document.getElementById('opt-radio02').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "Selected University Students";   
  } 
  else if(document.getElementById('opt-radio03').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "Selected Agriculture";   
  } 
  else if(document.getElementById('opt-radio04').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "Selected Travel";   
  }
  else if(document.getElementById('opt-radio05').checked) { 
    document.getElementById("disp").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "Selected other";   
}
  else { 
      document.getElementById("error").innerHTML 
          = "Please select atleast one occupation"; 
  } 
} 

function checkButtonAge() {  
  if(document.getElementById('opt-age-group01').checked) { 
      document.getElementById("dis").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "Age is under -19"; 
  } 
  else if(document.getElementById('opt-age-group02').checked) { 
      document.getElementById("dis").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "Age is between 20 to 29";   
  } 
  else if(document.getElementById('opt-age-group03').checked) { 
      document.getElementById("dis").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "Age is between 30 to 39";   
  } 
  else if(document.getElementById('opt-age-group04').checked) { 
      document.getElementById("dis").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "Age is between 40 to 49";   
  }
  else if(document.getElementById('opt-age-group05').checked) { 
    document.getElementById("dis").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "Age is between 50 to 59";   
}
  else if(document.getElementById('opt-age-group06').checked) { 
  document.getElementById("dis").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Age is 60 and above 60";   
}
  else if(document.getElementById('customCheck').checked) { 
  document.getElementById("dis").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Undisclosed Age";   
}
  else { 
      document.getElementById("errormsg").innerHTML 
          = "Please select your age"; 
  } 
} 
function myFunArea(){
  var a = document.getElementsByClassName('form-checkbox form-checkbox-areas');
  var newvar = 0;
  var count;
  for(count=0; count<a.length ; count++){
    if(a[count].checked == true){
      newvar = newvar+1;

    }
  }
  if(newvar >= 3){
    document.getElementById("notvalid").innerHTML = "Please select only two areas"
    return false;
  }
}

function checkButtonArea() {  
  if(document.getElementById('select-area-option01').checked || document.getElementById('select-area-option02').checked ) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "selected an area"; 
  } 
  else if(document.getElementById('select-area-option02').checked) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "selected an area";   
  } 
  else if(document.getElementById('select-area-option03').checked) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "selected an area";   
  } 
  else if(document.getElementById('select-area-option04').checked) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "selected an area";   
  }
  else if(document.getElementById('select-area-option05').checked) { 
    document.getElementById("displayarea").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "selected an area";   
}
  else if(document.getElementById('select-area-option06').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected an area";   
}
  else if(document.getElementById('select-area-option07').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
}
  else if(document.getElementById('select-area-option08').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
}
  else if(document.getElementById('select-area-option09').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
}
  else if(document.getElementById('select-area-option10').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
}
  else { 
      document.getElementById("errormsgarea").innerHTML 
          = "Please select an area"; 
  } 
} 
function myFunUser(){
  var a = document.getElementsByClassName('form-checkbox form-checkbox-follow');
  var newvar = 0;
  var count;
  for(count=0; count<a.length ; count++){
    if(a[count].checked == true){
      newvar = newvar+1;

    }
  }
  if(newvar > 3){
    document.getElementById("notvaliduser").innerHTML = "Please select only three users"
    return false;
  }
}
function myFunGroup(){
  var a = document.getElementsByClassName('form-checkbox form-checkbox-groups');
  var newvar = 0;
  var count;
  for(count=0; count<a.length ; count++){
    if(a[count].checked == true){
      newvar = newvar+1;

    }
  }
  if(newvar >= 3){
    document.getElementById("notvalidgroup").innerHTML = "Please select only two groups"
    return false;
  }
}

function formatoSelect(state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $(
    '<span class="flag-span"><span class="flag flag-' +
      state.element.value.toLowerCase() +
      '"></span>' +
      state.text +
      "</span>"
  );
  return $state;
}

var data = [
  {
    id: "us",
    text: "English",
    phone: "",
  },
  {
    id: "jp",
    text: "Japan",
    phone: "",
  },
];

$("#paises").select2({
  templateResult: formatoSelect,
  templateSelection: formatoSelect,
  data: data,
});
// buscar si esta definido el pais.
function arrayObjectIndexOf(myArray, searchTerm, property) {
  for (var i = 0, len = myArray.length; i < len; i++) {
    if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}

$.getJSON("http://ipinfo.io", function (n) {
  //console.log(n)
  //alert(arrayObjectIndexOf(data, "co", "id"));
  var ct = arrayObjectIndexOf(data, n.country.toLowerCase(), "id");
  if (ct !== -1) {
    $("#paises").val(n.country.toLowerCase());
    $("#paises").trigger("change");
    $(".telefono").text(data[ct].phone);
  } else {
    $("#paises").val("us");
    $("#paises").trigger("change");
    $(".telefono").text("(888) 886 9881");
  }
});

$("#paises").on("select2:select", function (evt) {
  //console.log(evt);
  //  alert();
  if (arrayObjectIndexOf(data, $("#paises").val(), "id") !== -1) {
    var ct = arrayObjectIndexOf(data, $("#paises").val(), "id");
    //alert(data[ct].phone);
    $(".telefono").text(data[ct].phone);
  }
});

// var data = [{
//   id: 'ar',
//   text: 'Argentina',
//   phone: '+54 115 219 4122'
// }, {
//   id: 'pe',
//   text: 'Peru',
//   phone: '+51 1 640 9680'
// }, {
//   id: 'mx',
//   text: 'Mexico',
//   phone: '+52 55 8526 2777'
// }, {
//   id: 'sv',
//   text: 'El Salvador',
//   phone: '503 211 309 07'
// }, {
//   id: 'cl',
//   text: 'Chile',
//   phone: '+56 2 25952 977'
// }, {
//   id: 'uy',
//   text: 'Uruguay',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'py',
//   text: 'Paraguay',
//   phone: '595 21 2380004'
// }, {
//   id: 'pa',
//   text: 'Panamá',
//   phone: '+507 8336 284'
// }, {
//   id: 've',
//   text: 'Venezuela',
//   phone: '+58 212 335 9474'
// }, {
//   id: 'es',
//   text: 'España',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'ni',
//   text: 'Nicaragua',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'cr',
//   text: 'Costa Rica',
//   phone: '506 40001857'
// }, {
//   id: 'bo',
//   text: 'Bolivia',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'pr',
//   text: 'Puerto Rico',
//   phone: '(787) 493 0244'
// }, {
//   id: 'us',
//   text: 'Estados Unidos',
//   phone: '786 275 5989'
// }, {
//   id: 'hn',
//   text: 'Honduras',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'ec',
//   text: 'Ecuador',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'br',
//   text: 'Brasil',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'do',
//   text: 'R. Dominicana',
//   phone: '1 829 234 6897'
// }, {
//   id: 'gt',
//   text: 'Guatemala',
//   phone: '502 222 96 592'
// }, {
//   id: 'co',
//   text: 'Colombia',
//   phone: '+57 1 381 6806'
// }];
