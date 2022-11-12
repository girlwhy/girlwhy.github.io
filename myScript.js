function yesAlias{
  var yes = document.getElementById("yesAlias");
  var aliasInput = document.getElemendById("inputAlias");

  if (yes.checked == true){
    aliasInput.style.display = "block";
  } else {
    aliasInput.style.display = "none";
  }
}
function plusAlias{
  var node = document.getElementById("alias");
  cloneNode(node);
}
