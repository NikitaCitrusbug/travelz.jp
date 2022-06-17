// const searchWrapper = document.querySelector('#area');
// const inputBox = searchWrapper.querySelector('input');
// const suggBox = searchWrapper.querySelector('#areaname');

// inputBox.onkeyup = (e) =>{
//   console.log(e.target.value);
// }

// var a;
// function show_hide(){
//   if(a == 1){
//     document.getElementById('user_regi').style.display = "inline";
//     return a = 0;
//   }
//   else{
//     document.getElementById('user_regi').style.display = 'none';
//     return a = 1;
//   }

// }







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
        else { document.getElementById("error").innerHTML = ""; }
        if (!checkButtonAge()){
          document.getElementById("errormsg").innerHTML =
            "age must not be empty.....";
          }else{document.getElementById("errormsg").innerHTML ="";}
          if (!checkButtonArea()){
            document.getElementById("errormsgarea").innerHTML =
              "area must not be empty.....";
            }else{document.getElementById("errormsgarea").innerHTML ="";}
              if (!checkButtonUsergroup()){
                document.getElementById("errormsguser").innerHTML =
                  "user must not be empty.....";
                }else{document.getElementById("errormsguser").innerHTML ="";}
                if (!checkButtonGroup()){
                  document.getElementById("errormsggroup").innerHTML =
                    "group must not be empty.....";
                  }else{document.getElementById("errormsggroup").innerHTML ="";}
                  if (!myFunPass()){
                    // debugger
                    document.getElementById("password1").innerHTML =
                      "password must not be empty.....";
                    }else{document.getElementById("password1").innerHTML ="";}
                    if (!myFunConPass()){
                      document.getElementById("confpass").innerHTML =
                        "confirm password must not be empty.....";
                      }else{document.getElementById("confpass").innerHTML ="";}
                      if (!checkButtonWhat()){
                        
                        // debugger
                        document.getElementById("errormsgwhat").innerHTML =
                          "what to do next must not be empty.....";
                        }
                        
} 
// if(!myFunPass()){
//   document.getElementById("password1").innerHTML = 
//   "password must not be empty...";
//   if(!myFunConPass()){
//     document.getElementById("confpass").innerHTML = 
//     "confirm password must not be empty...";

//   }
//   else{
//     document.getElementById("confpass").innerHTML = "";
//   }
// }
// else{
//   document.getElementById("password1").innerHTML = "";
// }

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
      document.getElementById("user-error").innerHTML 
      = ""
       
}

      return true;
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
        document.getElementById("email-error").innerHTML 
        = ""
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
    document.getElementById("notvaliduser").innerHTML ="Please select minimum three users";
    return false;
  }
  else { document.getElementById("notvaliduser").innerHTML ="";}
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
  console.log(pass);
  var validpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
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

}


function myFunConPass(){
var pass1=document.getElementById("password").value;
var pass2=document.getElementById("confirm-password").value;

if(pass1!=pass2){
  document.getElementById("confpass").innerHTML = "**Please enter same password...!!!!!!";
  document.getElementById('displaypass').innerHTML = ""
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
  let emptyArray = [];
  for ( var i=0 ; i <li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      let textValue = a.textContent || a.innerHTML;
      
      if(textValue.toUpperCase().indexOf(filter) > -1){
          li[i].style.display = '';
          emptyArray = li[i];
          console.log(emptyArray);
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

// fetch("assets/js/user.json")
//   .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));



fetch("https://api.chucknorris.io/jokes/random?category=dev")
  .then(response => response.json())
  .then(data =>{
    // console.log(data)
    // console.log(JSON.stringify(data))
  })


  // fetch("./user.json")
  
  // .then(response => response.json())
  // .then(data =>{
  //   console.log(data)
  //   console.log(JSON.stringify(data))
  // })


// const data = require('./user.json');
// console.log(data);
fetch("http://127.0.0.1:5500/user.json")
.then(response => {
   return response.json();
})
.then(data => {
  // console.log(data)
  // console.log(JSON.stringify(data))
  // console.log(data.name);
})

// var area = document.getElementById('area');
// area.innerHTML = fetch("http://127.0.0.1:5500/user.json");

async function area_user(){
  const response = await fetch("http://127.0.0.1:5500/user.json");
  const data = await response.json();
  // const name = data;
  // console.log(name);

}
area_user();


fetch("http://127.0.0.1:5500/area.json")
.then(function(response){
  return response.json();
})
.then(function(areas){
  let placeholder = document.querySelector("#areaname");
  let out = "";
  for (let product of areas){
    out += `
    <div class="col-lg-3 col-md-3 grid-20 plr-8">
                                <div
                                  class="img-checkbox-card-box area-card-box"
                                  data-title="${product.name}"
                                >
                                  <label
                                    for="${product.label}"
                                    class="label-box"
                                  >
                                    <li
                                      style="
                                        color: white;
                                        font-weight: bolder;
                                        font-size: 16px;
                                      "
                                    >
                                      <div class="check-box-position">
                                      
                                        <button class="checkbox-round-div">
                                          <i class="fe fe-check fe-custom"></i>
                                        </button>
                                      </div>
                                      
                                      <div class="img-banner">
                                        <img
                                          src="${product.image}"
                                          class="img-fluid img-responsive"
                                          alt="area"
                                        />
                                      </div>
                                      <div
                                        class="check-title-row"
                                      
                                      >
                                        <a>${product.name}</a>
                                        
                                      </div>
                                    </li>
                                  </label>
                                  <input
                                    type="checkbox"
                                    class="form-checkbox form-checkbox-areas"
                                    id="${product.id}"
                                    onclick="myFunArea()"
                                  />
                                </div>
                              </div>
    

    `;
//     console.log(product.label);
// console.log(product.image);
// console.log(product.name);
// console.log(product.id);  
  }
  
  // console.log(placeholder)
  placeholder.innerHTML = out;
  
})

                                      


async function search(){
  {
    let searchbox = document.getElementById("searchInput").value.toUpperCase();
    console.log(searchbox);
    const response = await fetch ("http://127.0.0.1:5500/area.json");
    const areas = await response.json();
    console.log(areas); 
    let out = ""
    for(product of areas){
      xoxo = product.name.toUpperCase();
      console.log(xoxo);
      if(xoxo.indexOf(searchbox) > -1){
        out += `
        <div class="col-lg-3 col-md-3 grid-20 plr-8">
                                <div
                                  class="img-checkbox-card-box area-card-box"
                                  data-title="${product.name}"
                                >
                                  <label
                                    for="${product.label}"
                                    class="label-box"
                                  >
                                    <li
                                      style="
                                        color: white;
                                        font-weight: bolder;
                                        font-size: 16px;
                                      "
                                    >
                                    
                                      <div class="check-box-position">
                                        <button class="checkbox-round-div">
                                          <i class="fe fe-check-circle"></i>
                                        </button>
                                      </div>
                                      

                                      <div class="img-banner">
                                        <img
                                          src="${product.image}"
                                          class="img-fluid img-responsive"
                                          alt="area"
                                        />
                                      </div>
                                      <div
                                        class="check-title-row"
                                      
                                      >
                                        <a>${product.name}</a>
                                        
                                      </div>
                                    </li>
                                  </label>
                                  <input
                                    type="checkbox"
                                    class="form-checkbox form-checkbox-areas"
                                    id="${product.id}"
                                    onclick="myFunArea()"
                                  />
                                </div>
                              </div>
        
        `
      }
      document.getElementById("areaname").innerHTML = "";
      document.getElementById("areaname").innerHTML = out;

    }
  }
}



fetch("http://127.0.0.1:5500/user.json")
.then(function(response){
  return response.json();
})
.then(function(users){
  let placeholder = document.querySelector("#username");
  let out = "";
  for (let product of users){
    out += `
    <div class="col-lg-3 col-md-3 grid-20 plr-8">
                              <div class="user-card-box follow-card-box">
                                <label
                                  for="${product.id}"
                                  class="label-box"
                                >
                                  <li
                                    style="
                                      color: white;
                                      font-weight: bolder;
                                      font-size: 16px;
                                    "
                                  >
                                    <div class="check-box-position">
                                      <button class="checkbox-round-div">
                                        <i class="fe fe-check fe-custom"></i>
                                      </button>
                                    </div>
                                    <div class="img-user-thumb">
                                      <img
                                        src="${product.image}"
                                        class="img-fluid img-user"
                                        alt="follow"
                                      />
                                    </div>
                                    <div class="check-title-row">
                                      <a>
                                        <h4>${product.name}</h4>
                                      </a>
                                      <a>
                                        <p>${product.email}</p>
                                      </a>
                                      <!-- <h4>sunny</h4> -->
                                    </div>
                                  </li>
                                </label>
                                <input
                                  type="checkbox"
                                  class="form-checkbox form-checkbox-follow"
                                  id="${product.id}"
                                  onclick="myFunUser()"
                                />
                              </div>
                            </div>
    

    `;
//     console.log(product.label);
// console.log(product.image);
// console.log(product.name);
// console.log(product.id);  
  }
  
  // console.log(placeholder)
  placeholder.innerHTML = out;
  
})


async function searchUser(){
  {
    let searchbox = document.getElementById("myInputUser").value.toUpperCase();
    console.log(searchbox);
    const response = await fetch ("http://127.0.0.1:5500/user.json");
    const areas = await response.json();
    console.log(areas); 
    let out = ""
    for(product of areas){
      xoxo = product.name.toUpperCase();
      coco = product.email.toUpperCase();
      console.log(xoxo);
      if(xoxo.indexOf(searchbox) > -1 || coco.indexOf(searchbox) > -1){
        out += `
        <div class="col-lg-3 col-md-3 grid-20 plr-8">
                              <div class="user-card-box follow-card-box">
                                <label
                                  for="${product.id}"
                                  class="label-box"
                                >
                                  <li
                                    style="
                                      color: white;
                                      font-weight: bolder;
                                      font-size: 16px;
                                    "
                                  >
                                    <div class="check-box-position">
                                      <button class="checkbox-round-div">
                                        <i class="fe fe-check fe-custom"></i>
                                      </button>
                                    </div>
                                    <div class="img-user-thumb">
                                      <img
                                        src="${product.image}"
                                        class="img-fluid img-user"
                                        alt="follow"
                                      />
                                    </div>
                                    <div class="check-title-row">
                                      <a>
                                        <h4>${product.name}</h4>
                                      </a>
                                      <a>
                                        <p>${product.email}</p>
                                      </a>
                                      <!-- <h4>sunny</h4> -->
                                    </div>
                                  </li>
                                </label>
                                <input
                                  type="checkbox"
                                  class="form-checkbox form-checkbox-follow"
                                  id="${product.id}"
                                  onclick="myFunUser()"
                                />
                              </div>
                            </div>
        
        `
      }
      document.getElementById("username").innerHTML = "";
      document.getElementById("username").innerHTML = out;

    }
  }
}



fetch("http://127.0.0.1:5500/group.json")
.then(function(response){
  return response.json();
})
.then(function(areas){
  let placeholder = document.querySelector("#groupname");
  let out = "";
  for (let product of areas){
    out += `
                            <div class="col-lg-3 col-md-3 grid-20 plr-8">
                              <div
                                class="img-checkbox-card-box groups-card-box"
                              >
                                <label
                                  for="${product.label}"
                                  class="label-box"
                                >
                                  <li
                                    style="
                                      color: white;
                                      font-weight: bolder;
                                      font-size: 16px;
                                    "
                                  >
                                    <div class="check-box-position">
                                      <button class="checkbox-round-div">
                                        <i class="fe fe-check fe-custom"></i>
                                      </button>
                                    </div>
                                    <div class="img-banner">
                                      <img
                                        src="${product.image}"
                                        class="img-fluid img-responsive"
                                        alt="groups"
                                      />
                                    </div>
                                    <div class="check-title-row">
                                      <a>${product.name}</a>
                                      <!-- <h4>Akihabara</h4> -->
                                    </div>
                                  </li>
                                </label>
                                <input
                                  type="checkbox"
                                  class="form-checkbox form-checkbox-groups"
                                  id="${product.label}"
                                  onclick="myFunGroup()"
                                />
                              </div>
                            </div>

    `;
//     console.log(product.label);
// console.log(product.image);
// console.log(product.name);
// console.log(product.id);  
  }
  
  // console.log(placeholder)
  placeholder.innerHTML = out;
  
})


async function searchGroup(){
  {
    let searchbox = document.getElementById("myInputGroup").value.toUpperCase();
    console.log(searchbox);
    const response = await fetch ("http://127.0.0.1:5500/group.json");
    const areas = await response.json();
    console.log(areas); 
    let out = ""
    for(product of areas){
      xoxo = product.name.toUpperCase();
      console.log(xoxo);
      if(xoxo.indexOf(searchbox) > -1){
        out += `
        <div class="col-lg-3 col-md-3 grid-20 plr-8">
                              <div
                                class="img-checkbox-card-box groups-card-box"
                              >
                                <label
                                  for="${product.label}"
                                  class="label-box"
                                >
                                  <li
                                    style="
                                      color: white;
                                      font-weight: bolder;
                                      font-size: 16px;
                                    "
                                  >
                                    <div class="check-box-position">
                                      <button class="checkbox-round-div">
                                        <i class="fe fe-check fe-custom"></i>
                                      </button>
                                    </div>
                                    <div class="img-banner">
                                      <img
                                        src="${product.image}"
                                        class="img-fluid img-responsive"
                                        alt="groups"
                                      />
                                    </div>
                                    <div class="check-title-row">
                                      <a>${product.name}</a>
                                      <!-- <h4>Akihabara</h4> -->
                                    </div>
                                  </li>
                                </label>
                                <input
                                  type="checkbox"
                                  class="form-checkbox form-checkbox-groups"
                                  id="${product.label}"
                                  onclick="myFunGroup()"
                                />
                              </div>
                            </div>
        
        `
      }
      document.getElementById("groupname").innerHTML = "";
      document.getElementById("groupname").innerHTML = out;

    }
  }
}




// const input = document.getElementById("searchInput");
// const searchList = document.getElementById("searchList");

// const searchInfo = async searchJson =>{
//   const response = await fetch ("http://127.0.0.1:5500/area.json");
  
//   const info = await response.json()
//   let list = info.filter(infos =>{
//     const infoReg = new RegExp('^${searchJson}' , 'gi');
//     return infos.name.match(infoReg);
//   });
  
  
//   if(searchJson == ""){
//     list=[];
//     searchList.innerHTML= '';
//   }
//   outputInfo(list);
//   // console.log(outputInfo(list));
// };

// const outputInfo = list =>{
//   if(list.length>0){
//     const inputValue = list.map(info =>`
//     <div class="col-lg-3 col-md-3 grid-20 plr-8">
//                               <div
//                                 class="img-checkbox-card-box area-card-box"
//                                 data-title="${info.name}"
//                               >
//                                 <label
//                                   for="${info.label}"
//                                   class="label-box"
//                                 >
//                                   <li
//                                     style="
//                                       color: white;
//                                       font-weight: bolder;
//                                       font-size: 16px;
//                                     "
//                                   >
//                                     <div class="check-box-position">
//                                       <button class="checkbox-round-div">
//                                         <i class="fe fe-check fe-custom"></i>
//                                       </button>
//                                     </div>
//                                     <div class="img-banner">
//                                       <img
//                                         src="${info.image}"
//                                         class="img-fluid img-responsive"
//                                         alt="area"
//                                       />
//                                     </div>
//                                     <div
//                                       class="check-title-row"
                                    
//                                     >
//                                       <a>${info.name}</a>
                                      
//                                     </div>
//                                   </li>
//                                 </label>
//                                 <input
//                                   type="checkbox"
//                                   class="form-checkbox form-checkbox-areas"
//                                   id="${info.id}"
//                                   onclick="myFunArea()"
//                                 />
//                               </div>
//                             </div>
//     `).join('');
//     searchList.innerHTML = inputValue;
  
//   }
// }
// // debugger
// areaname.addEventListener('input' ,() =>{
//   alert('hello')
//   searchInfo(input.value);
// });


// let area_load = new XMLHttpRequest();
// area_load.open('GET','user.json' , true) 
// area_load.send();
//  area_load.onload == function(){
//   if(this.readyState == 4 && this.status == 200){
//     let load = JSON.parse(this.responseText)
//     console.log(load);
//   }

//  }


// $('#searchInput').keyup(function(){
//             var searchField = $(this).val();
// if(searchField === '')  {
// $('#filter-records').html('');
// return;
// }
//             var regex = new RegExp(searchField, "i");
//             var output = '<div class="row">';
//             var count = 1;
//   $.each(data, function(key, val){
// if ((val.employee_salary.search(regex) != -1) || (val.employee_name.search(regex) != -1)) {
//   output += '<div class="col-md-6 well">';
//   output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.employee_name +'" /></div>';
//   output += '<div class="col-md-7">';
//   output += '<h5>' + val.employee_name + '</h5>';
//   output += '<p>' + val.employee_salary + '</p>'
//   output += '</div>';
//   output += '</div>';
//   if(count%2 == 0){
// output += '</div><div class="row">'
//   }
//   count++;
// }
//   });
//   output += '</div>';
//   $('#filter-records').html(output);
//         });


const obj = {
  name : "sunny",
  email : "sunnymint@gmail.com",
}
// console.log(obj);
// let objStr = JSON.stringify(obj);
// console.log(objStr);


// var xmlhttp = new XMLHttpRequest();
// var url = "user.txt";
// xmlhttp.open('GET' , url , true);
// xmlhttp.send();
// xmlhttp.onreadystatechange = function(){
//   if(this.readyState == 4 && this.status == 200){
//     var my = JSON.parse(this.responseText);
//     console.log(my);
//   }
// };



// const me = JSON.parse(obj);
// console.log(me);


// let jsonObj = {
//   // username : document.getElementById('user_field').value,  
//   username : 'user_field',  

//   name : 'Moose' ,
//   rollno :'5' ,
//   subject : 'JS'
// }
// console.log(jsonObj);
// let myJsonStr = JSON.stringify(jsonObj);
// console.log(myJsonStr);



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

// const search = () => {
//   let filter = document.getElementById('myInput').value.toUpperCase();
//   let ul = document.getElementById('myBox');
//   let li = ul.getElementsByTagName('li');
//   for ( var i=0 ; i <li.length; i++){
//       let a = li[i].getElementsByTagName('a')[0];
//       let textValue = a.textContent || a.innerHTML;
//       if(textValue.toUpperCase().indexOf(filter) > -1){
//           li[i].style.display = '';
//       }else{
//           li[i].style.display = 'none';
//       }
//   }
// }


// let searchBox = document.querySelector('#myInput');
// let images = document.querySelectorAll('.main-body-div .col-lg-3 col-md-3 grid-20 plr-8 .img-checkbox-card-box area-card-box');
// searchBox.oninput = () =>{
//   let value = searchBox.value;
//   images.forEach(filter=>{
//     let title = filter.getAttribute('data-title');
//     if(value == title){
//       filter.style.display = "block";
//     }
//   })
// }


// const search = () =>{
//   const searchbox = document.getElementById('myInput').value.toUpperCase();
//   const items = document.getElementById('myBox')
//   const area = document.querySelectorAll('.col-lg-3 col-md-3 grid-20 plr-8')
//   const aname = document.getElementsByTagName('h4')
//   for (var i=0; i <aname.length ; i++){
//     let match = area[i].getElementsByTagName('h4')[0];
//     if(match){
//       let textValue =match.textContent || match.innerHTML;
//       if(textValue.toUpperCase().indexOf(searchbox) > -1){
//         area[i].style.display="";
//       }else{
//         area[i].style.display="none";
//       }
//     }
//   }
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



// window.addEventListener('scroll',( )=>{
// debugger
//   const tscroll=document.documentElement.scrollHeight - window.innerHeight;
//   const scrolled=window.scrollY;
//   console.log(scrolled);
//   var occu = document.getElementsById("occu");
//   console.log(occu);
//   alert('hello');
  
  
//   if (scrolled>200){
//     if(!NameValidation() || !EmailValidation()){
//     // alert("Please!! fill the Name and Email field first ")
//     window.scrollTo({
//       top: 10,
//       left:0,
//       behavior: 'instant'
//       });
   
//     }}
  
//     if (scrolled>950){
//       if(!OccupationValidation()){
      
//       window.scrollTo({
//         top: 700,
//         left:0,
//         behavior: 'instant'
//         });
  
     
     
//       }}
  
//       if (scrolled>2000){
//         if(!AgeValidation()){
//         // alert("Please!! fill the Name and Email field first ")
//         window.scrollTo({
//           top: 1500,
//           left:0,
//           behavior: 'instant'
//           });
       
//         }}
  
//         if (scrolled>3200){
//           if(!AreaValidation()){
//           // alert("Please!! fill the Name and Email field first ")
//           window.scrollTo({
//             top: 2600,
//             left:0,
//             behavior: 'instant'
//             });
         
//           }}
  
//           if (scrolled>4200){
//             if(!UserValidation()){
//             // alert("Please!! fill the Name and Email field first ")
//             window.scrollTo({
//               top: 3500,
//               left:0,
//               behavior: 'instant'
//               });
           
//             }}
  
//             if (scrolled>5200){
//               if(!GroupValidation()){
//               // alert("Please!! fill the Name and Email field first ")
//               window.scrollTo({
//                 top: 4600,
//                 left:0,
//                 behavior: 'instant'
//                 });
             
//               }}
  
//               if (scrolled>5900){
//                 if(!passwordValidation() || !ConfpassValidation()){
//                 // alert("Please!! fill the Name and Email field first ")
//                 window.scrollTo({
//                   top: 5400,
//                   left:0,
//                   behavior: 'instant'
//                   });
               
//                 }}
  
//   });

  

// window.addEventListener('scroll', () => {
//   // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//   alert('hello')
//   const scrolled  = window.scrollY;
//   // if (Math.ceil(scrolled) === scrollable){
//   //     alert('u have reached the bottom....')
//   // }
//   console.log('scrolled')

// })

