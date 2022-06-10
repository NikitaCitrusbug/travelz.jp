function checkButtonUser() {  
  // debugger
  if (!userValidation()){
    document.getElementById("user-error").innerHTML =
      "Username must not be empty.....";
    }
    if (!emailValidation()){
      document.getElementById("email-error").innerHTML =
        "email must not be empty.....";
      }
      if (!checkButtonOccupation()){
        document.getElementById("error").innerHTML =
          "occupation must not be empty.....";
        }
        if (!checkButtonAge()){
          document.getElementById("errormsg").innerHTML =
            "age must not be empty.....";
          }
          if (!checkButtonArea()){
            document.getElementById("errormsgarea").innerHTML =
              "area must not be empty.....";
            }
              if (!checkButtonUsergroup()){
                document.getElementById("errormsguser").innerHTML =
                  "user must not be empty.....";
                }
                if (!checkButtonGroup()){
                  document.getElementById("errormsggroup").innerHTML =
                    "group must not be empty.....";
                  }
                  if (!myFunPass()){
                    // debugger
                    document.getElementById("password1").innerHTML =
                      "password must not be empty.....";
                    }
                    if (!myFunConPass()){
                      document.getElementById("confpass").innerHTML =
                        "confirm password must not be empty.....";
                      }
                      if (!checkButtonWhat()){
                        debugger
                        document.getElementById("errormsgwhat").innerHTML =
                          "what to do next must not be empty.....";
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
        // alert("Thanks you....");
        return true;
    }
 }

 function checkButtonOccupation() {  
  if(document.getElementById('opt-radio01').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "Selected School Students"; 
          document.getElementById("error").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('opt-radio02').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "Selected University Students";
          document.getElementById("error").innerHTML = ""
          return true;   
  } 
  else if(document.getElementById('opt-radio03').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "Selected Agriculture";   
          document.getElementById("error").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('opt-radio04').checked) { 
      document.getElementById("disp").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "Selected Travel";   
          document.getElementById("error").innerHTML = ""
          return true;
  }
  else if(document.getElementById('opt-radio05').checked) { 
    document.getElementById("disp").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "Selected other";
        document.getElementById("error").innerHTML = ""
        return true;   
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
          document.getElementById("errormsg").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('opt-age-group02').checked) { 
      document.getElementById("dis").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "Age is between 20 to 29";   
          document.getElementById("errormsg").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('opt-age-group03').checked) { 
      document.getElementById("dis").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "Age is between 30 to 39";   
          document.getElementById("errormsg").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('opt-age-group04').checked) { 
      document.getElementById("dis").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "Age is between 40 to 49"; 
          document.getElementById("errormsg").innerHTML = ""
          return true;  
  }
  else if(document.getElementById('opt-age-group05').checked) { 
    document.getElementById("dis").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "Age is between 50 to 59";   
        document.getElementById("errormsg").innerHTML = ""
        return true;
}
  else if(document.getElementById('opt-age-group06').checked) { 
  document.getElementById("dis").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Age is 60 and above 60";   
      document.getElementById("errormsg").innerHTML = ""
      return true;
}
  else if(document.getElementById('customCheck').checked) { 
  document.getElementById("dis").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Undisclosed Age";   
      document.getElementById("errormsg").innerHTML = ""
      return true;
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
  if (newvar<2){
    document.getElementById("notvalid").innerHTML="Please select minimum two areas";
    return false;
  }
  else { document.getElementById("notvalid").innerHTML="";}
    return true;
}

function checkButtonArea() {  
  if(document.getElementById('select-area-option01').checked) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "selected an area";
          document.getElementById("errormsgarea").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('select-area-option02').checked) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "selected an area";   
          document.getElementById("errormsgarea").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('select-area-option03').checked) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "selected an area";   
          document.getElementById("errormsgarea").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('select-area-option04').checked) { 
      document.getElementById("displayarea").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "selected an area";   
          document.getElementById("errormsgarea").innerHTML = ""
          return true;
  }
  else if(document.getElementById('select-area-option05').checked) { 
    document.getElementById("displayarea").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "selected an area";   
        document.getElementById("errormsgarea").innerHTML = ""
        return true;
}
  else if(document.getElementById('select-area-option06').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected an area";   
      document.getElementById("errormsgarea").innerHTML = ""
      return true;
}
  else if(document.getElementById('select-area-option07').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
      document.getElementById("errormsgarea").innerHTML = ""
      return true;
}
  else if(document.getElementById('select-area-option08').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
      document.getElementById("errormsgarea").innerHTML = ""
      return true;
}
  else if(document.getElementById('select-area-option09').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
      document.getElementById("errormsgarea").innerHTML = ""
      return true;
}
  else if(document.getElementById('select-area-option10').checked) { 
  document.getElementById("displayarea").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "Selected an area";   
      document.getElementById("errormsgarea").innerHTML = ""
      return true;
}
  else { 
      document.getElementById("errormsgarea").innerHTML 
          = "Please select an area"; 
          
  } 
}

function checkButtonUsergroup() {  
  if(document.getElementById('select-follow-option01').checked) { 
      document.getElementById("displayuser").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "selected a user"; 
          document.getElementById("errormsguser").innerHTML=""
          return true;
  } 
  else if(document.getElementById('select-follow-option02').checked) { 
      document.getElementById("displayuser").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "selected a user";   
          document.getElementById("errormsguser").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('select-follow-option03').checked) { 
      document.getElementById("displayuser").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "selected a user";   
          document.getElementById("errormsguser").innerHTML = ""
          return true; 
  } 
  else if(document.getElementById('select-follow-option04').checked) { 
      document.getElementById("displayuser").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "selected a user";   
          document.getElementById("errormsguser").innerHTML = ""
          return true;
  }
  else if(document.getElementById('select-follow-option05').checked) { 
    document.getElementById("displayuser").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "selected a user";   
        document.getElementById("errormsguser").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-follow-option06').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-follow-option07').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-follow-option08').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;   
}
  else if(document.getElementById('select-follow-option09').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-follow-option10').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;  
}
else if(document.getElementById('select-follow-option11').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;
}
else if(document.getElementById('select-follow-option12').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;
}
else if(document.getElementById('select-follow-option13').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;
}
else if(document.getElementById('select-follow-option14').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true; 
}
else if(document.getElementById('select-follow-option15').checked) { 
  document.getElementById("displayuser").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a user";   
      document.getElementById("errormsguser").innerHTML = ""
          return true;
}
  else { 
      document.getElementById("errormsguser").innerHTML 
          = "Please select a user"; 
          
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
  if (newvar< 3){
    document.getElementById("notvaliduser").innerHTML="Please select minimum three users";
    return false;
  }
  else { document.getElementById("notvaliduser").innerHTML="";}
    return true;
  // if(newvar < 3){
  //   document.getElementById("notvaliduser").innerHTML = "Please select minimum three users"
  //   return false;
  // }
}

function checkButtonGroup() {  
  if(document.getElementById('select-groups-option01').checked) { 
      document.getElementById("displaygroup").innerHTML 
          // = document.getElementById("opt-radio01").value 
          = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('select-groups-option02').checked) { 
      document.getElementById("displaygroup").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('select-groups-option03').checked) { 
      document.getElementById("displaygroup").innerHTML 
          // = document.getElementById("opt-radio03").value 
          = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
  } 
  else if(document.getElementById('select-groups-option04').checked) { 
      document.getElementById("displaygroup").innerHTML 
          // = document.getElementById("opt-radio04").value 
          = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
  }
  else if(document.getElementById('select-groups-option05').checked) { 
    document.getElementById("displaygroup").innerHTML 
        // = document.getElementById("opt-radio05").value 
        = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-groups-option06').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-groups-option07').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-groups-option08').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-groups-option09').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
  else if(document.getElementById('select-groups-option10').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
else if(document.getElementById('select-groups-option11').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
else if(document.getElementById('select-groups-option12').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
else if(document.getElementById('select-groups-option13').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
else if(document.getElementById('select-groups-option14').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
else if(document.getElementById('select-groups-option15').checked) { 
  document.getElementById("displaygroup").innerHTML 
      // = document.getElementById("opt-radio05").value 
      = "selected a group"; 
          document.getElementById("errormsggroup").innerHTML = ""
          return true;
}
  else { 
      document.getElementById("errormsggroup").innerHTML 
          = "Please select a group"; 
          
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
  if (newvar<2){
    document.getElementById("notvalidgroup").innerHTML="Please select minimum two groups";
    return false;
  }
  else { document.getElementById("notvalidgroup").innerHTML="";}
    return true;
}



// function myFunGroup(){
//   debugger
//   var a = document.getElementsByClassName('form-checkbox form-checkbox-groups');
//   var newvar = 0;
//   var count;
//   for(count=0; count<a.length ; count++){
//     if(a[count].checked == true){
//       newvar = newvar+1;
//       return true;
//     }
//   }
//   if (newvar < 2){
//     document.getElementById("notvalidgroup").innerHTML="Please select minimum two groups";
//     return false;
//   }
//   else { document.getElementById("notvalidgroup").innerHTML="";}
//     return true;
//   if(newvar <= 3){
//     document.getElementById("notvalidgroup").innerHTML = "Please select minimum two groups"
//     return false;
//   }
// }

function myFunPass(){
  // debugger
  var pass = document.getElementById("password").value;
  var validpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  if(pass == "") {  
    document.getElementById("password1").innerHTML = "Fill the password please....!!!!!!"; 
    
    return false;  
 }  
 if(pass.length < 8) {  
  document.getElementById("password1").innerHTML = "Password length must be atleast 8 characters.....";  
  
  return false;  
} 
if  (!pass.match(validpass)) {
  document.getElementById("password1").innerHTML = "password should contain atleast one number and one special character......";  
  
  return false;  

}
else{
  document.getElementById('displaypass').innerHTML = " password created successfully....!!!!"
  document.getElementById("password1").innerHTML = ""
  return true;
}
// else{
// return true;
// }
}
function myFunConPass(){
var pass1=document.getElementById("password").value;
var pass2=document.getElementById("confirm-password").value;

if(pass1!=pass2){
  document.getElementById("confpass").innerHTML = "**Please enter same password...!!!!!!";
  document.getElementById('displaypass').innerHTML = " "
  return false;
}
else{
  // document.getElementById('displaypass').innerHTML = " password matched....!!!!"
  document.getElementById("confpass").innerHTML = ""
 return true;
}
}

function checkButtonWhat() {  
  // debugger
//   if(document.getElementById('opt-age-group01').checked) { 
//     document.getElementById("dis").innerHTML 
//         // = document.getElementById("opt-radio01").value 
//         = "Age is under -19"; 
//         document.getElementById("errormsg").innerHTML = ""
//         return true;
// }
    if(document.getElementById('what-to-do-radio01').checked) { 
        document.getElementById("displaywhat").innerHTML 
            // = document.getElementById("opt-radio01").value 
            = "Selected process to timeline"; 
            document.getElementById("errormsgwhat").innerHTML  = ""
            return true;
    } 
    else if(document.getElementById('what-to-do-radio02').checked) { 
        document.getElementById("displaywhat").innerHTML 
            // = document.getElementById("opt-radio02").value 
            = "Selected create a map";   
            document.getElementById("errormsgwhat").innerHTML  = ""
            return true;
    }
    else if(document.getElementById('what-to-do-radio03').checked) { 
      document.getElementById("displaywhat").innerHTML 
          // = document.getElementById("opt-radio02").value 
          = "Selected create a travel plan";   
          document.getElementById("errormsgwhat").innerHTML  = ""
            return true;
  }
    else { 
        document.getElementById("errormsgwhat").innerHTML 
            = "Please select what to do next...."; 
    } 
  } 

// function myFunWhat(){
//   var a = document.getElementsByClassName('form-radio form-radio-what-to-do');
//   var newvar = 0;
//   var count;
//   for(count=0; count<a.length ; count++){
//     if(a[count].checked == true){
//       newvar = newvar+1;

//     }
//   }
//   if(newvar > 1){
//     document.getElementById("notvalidwhat").innerHTML = "Please select only one what to do next...."
//     return false;
//   }
// }


const searchFun = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let ul = document.getElementById('myBox');
  let li = ul.getElementsByTagName('li');
  for ( var i=0 ; i <li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      let textValue = a.textContent || a.innerHTML;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = '';
      }else{
          li[i].style.display = 'none';
      }
  }
}

const searchFunUser = () => {
  let filter = document.getElementById('myInputUser').value.toUpperCase();
  let ul = document.getElementById('myBoxUser');
  let li = ul.getElementsByTagName('li');
  for ( var i=0 ; i <li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      let textValue = a.textContent || a.innerHTML;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = '';
      }else{
          li[i].style.display = 'none';
      }
  }
}

const searchFunGroup = () => {
  let filter = document.getElementById('myInputGroup').value.toUpperCase();
  let ul = document.getElementById('myBoxGroup');
  let li = ul.getElementsByTagName('li');
  for ( var i=0 ; i <li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      let textValue = a.textContent || a.innerHTML;
      if(textValue.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = '';
      }else{
          li[i].style.display = 'none';
      }
  }
}

let jsonObj = {
  // username : document.getElementById('user_field').value,  
  username : 'user_field',  

  name : 'Moose' ,
  rollno :'5' ,
  subject : 'JS'
}
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

// const searchInput = document.querySelector("[data-search]")
// searchInput.addEventListener("input", e =>{
//   const value = e.target.value.toLowerCase()
//   user => {
//     const isvisible =
//     user.name.toLowerCase().includes(value)
//     user.element.classList.toggle('hide' , !isvisible)
//   }
// })

// const searchFun = () =>{
//   let filter = document.getElementById('myInput').value.toLowerCase();
//   // let myBox = document.getElementById('myBox');
//   user =>{
//     const isvisible = user.name.toLowerCase().includes(filter);
//     user.element.classList.toggle("hide" , isvisible)
//   }

// }

// function searchFun(){
//   var input, filter, ul, lb, nm, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myBox");
//     lb = ul.getElementsByClassName("label-box");
//     for (i = 0; i < nm.length; i++) {
//         nm = lb[i].getElementsByClassName("name")[0];
//         txtValue = nm.textContent || nm.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             lb[i].style.display = "";
//         } else {
//             lb[i].style.display = "none";
//         }
//     }
// }


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
