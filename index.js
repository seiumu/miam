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

  if (document.getElementById("yescommunity").checked) {
    document.getElementById("communityproduct").className = "product";
  } 
  else {
    document.getElementById("communityproduct").className = "producthidden";
  }

  if (document.getElementById("yesqcommunity").checked) {
    document.getElementById("mobileapp").className = "product";
  } else {
    document.getElementById("mobileapp").className = "producthidden";
  }


  if (document.getElementById("yesethno1").checked) {
    document.getElementById("videointerviews").className = "product";
  } else {
    document.getElementById("videointerviews").className = "producthidden";
  }

  if (document.getElementById("yesethno2").checked) {
      document.getElementById("videointerviews").className = "product";
  } else {
      document.getElementById("videointerviews").className = "producthidden";
  }

  if (document.getElementById("yesethno2").checked) {
    document.getElementById("videointerviews").className = "product";
  } else {
    document.getElementById("videointerviews").className = "producthidden";
  }

  if (document.getElementById("yesoi").checked) {
    document.getElementById("allinclusivve").className = "product";
  } else {
    document.getElementById("allinclusive").className = "producthidden";
  }

  if (document.getElementById("yesinternal").checked) {
    document.getElementById("futurework").className = "product";
  } else {
    document.getElementById("futurework").className = "producthidden";
  }

  if (document.getElementById("yesshifts").checked) {
    document.getElementById("peopletracker").className = "product";
  } else {
    document.getElementById("peopletracker").className = "producthidden";
  }
}
