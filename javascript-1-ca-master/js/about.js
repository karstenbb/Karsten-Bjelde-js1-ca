var theDiv = document.querySelector(".about");

function replaceTheReplaced() {
  let h1Tag = document.querySelector(".container h1");
  let h1text = h1Tag.innerText;
  let replaceh1 = h1text.replace("The", "Replaced");
  h1Tag.innerText = replaceh1;
  theDiv.innerText = theDiv.innerText.replace(/the/g, "replace");
  theDiv.innerText = theDiv.innerText.replace(/The/g, "Replace");
}

setTimeout(replaceTheReplaced, 4000);
