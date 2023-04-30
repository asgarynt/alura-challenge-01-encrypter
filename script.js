const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const btnCopy = document.getElementById("btnCopyClipboard");
const textResult = document.getElementById("styleCenter");

btnCopy.style.display = "none";

btnEncrypt.addEventListener("click", function () {
  var text = document.getElementById("textarea").value.toLowerCase();
  var encryptText = text
    .replace(/e/g, "enter")
    .replace(/o/g, "ober")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/u/g, "ufat");
  btnCopy.style.display = "block";
  textResult.innerHTML = `<p id="copyText">${encryptText}</p>`;
});

btnDecrypt.addEventListener("click", function () {
  var text = document.getElementById("textarea").value.toLowerCase();
  var encryptText = text
    .replace(/enter/gim, "e")
    .replace(/ober/gim, "o")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ufat/gim, "u");

  btnCopy.style.display = "block";

  textResult.innerHTML = `<p id="copyText">${encryptText}</p>`;
});

btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(
    document.querySelector("#copyText").textContent
  );
});