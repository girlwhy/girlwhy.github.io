function yesAlias(){
  alert("idk")
  var yes = document.getElementById("yesAlias");
  var aliasInput = document.getElemendById("inputAlias");

  if (yes.checked == true){
    aliasInput.style.display = "block";
    alert("fuck")
  } else {
    aliasInput.style.display = "none";
  }
}

function plusAlias(){
  var node = document.getElementById("inputAlias");
  cloneNode(node);
}
