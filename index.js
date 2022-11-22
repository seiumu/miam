let radios = document.getElementsByTagName("input");
for(var i = 0; i < radios.length; i++) {
  if (radios[i].type == "radio") {
    radios[i].addEventListener("click", run);
  }
}

let others = document.getElementsByName("other");
for(var i=0; i<others.length; i++){
  others[i].addEventListener("click", displaybutton);
}

function displaybutton() {
  document.documentElement.style.setProperty("--display", "flex");
}

document
  .getElementById("displaybutton")
  .addEventListener("click", displayproducts);

function displayproducts() {
  document.documentElement.style.setProperty("--displayresearch", "flex");
  document.documentElement.style.setProperty("--displaycontactform", "flex");
}


function run() {
  let count = 0;
  if (document.getElementById("yescommunity").checked) {
    document.getElementById("communityproduct").className = "product";
    count++;
  } else {
    document.getElementById("communityproduct").className = "producthidden";
  }

  if (document.getElementById("yesqcommunity").checked) {
    document.getElementById("mobileapp").className = "product";
    count++;
  } else {
    document.getElementById("mobileapp").className = "producthidden";
  }

  if (document.getElementById("yesethno1").checked) {
    document.getElementById("videointerviews").className = "product";
    count++;
  } else {
    document.getElementById("videointerviews").className = "producthidden";
  }

  if (document.getElementById("yesethno2").checked) {
    document.getElementById("videointerviews").className = "product";
    count++;
  } else {
    document.getElementById("videointerviews").className = "producthidden";
  }

  if (document.getElementById("yesethno2").checked) {
    document.getElementById("videointerviews").className = "product";
    count++;
  } else {
    document.getElementById("videointerviews").className = "producthidden";
  }

  if (document.getElementById("yesoi").checked) {
    document.getElementById("allinclusivve").className = "product";
    count++;
  } else {
    document.getElementById("allinclusive").className = "producthidden";
  }

  if (document.getElementById("yesinternal").checked) {
    document.getElementById("futurework").className = "product";
    count++;
  } else {
    document.getElementById("futurework").className = "producthidden";
  }

  if (document.getElementById("yesshifts").checked) {
    document.getElementById("peopletracker").className = "product";
    count++;
  } else {
    document.getElementById("peopletracker").className = "producthidden";
  }
  if (count > 0){
    console.log("here");
    document.documentElement.style.setProperty("--productstoshow", "none");
  }
  else{
    document.documentElement.style.setProperty("--productstoshow", "flex");
  }
}


document.getElementsByClassName("submit")[0].addEventListener("click", validate);

function validate(){
  let email = document.forms["interest-form"]["Email"].value;
  let org = document.forms["interest-form"]["Org"].value.length;
  let industry = document.forms["interest-form"]["Ind"].value.length;
  let fname = document.forms["interest-form"]["Fname"].value.length;
  let lname = document.forms["interest-form"]["Lname"].value.length;
  let title = document.forms["interest-form"]["Title"].value.length;
  if (   
    org >= 3 && industry >= 3 && fname >= 3 && lname >= 2 & title >= 2 &&
    String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) != null)
    //Email meets the criteria
  {
   message();
  }
}

 function message(){
   setTimeout(document.documentElement.style.setProperty("--displaymessage", "flex"),2000);
 }

 document.getElementById("close").addEventListener("click", close);

  function close() {
    let frame = document.getElementById("hiddenframe").innerHTML;
    frame = '';
    document.documentElement.style.setProperty("--displaymessage", "none");
  }