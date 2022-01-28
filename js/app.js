let btn = document.querySelector(".btnGenerar");
let qr_code_element = document.querySelector(".contentCodigo");

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#input_text");
  if (user_input.value != "") {
    if (qr_code_element.childElementCount == 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
    console.log("not valid input");
    // qr_code_element.style = "display: flex";
  }
});

function generate(user_input) {
  // qr_code_element.style = "";

  var qrcode = new QRCode(qr_code_element, {
    text: `${user_input.value}`,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  let download_link = document.querySelector("#descargarCodigo");
  download_link.setAttribute("download", "qr_code.png");
  
  let qr_code_img = document.querySelector(".contentCodigo img");
  let qr_code_canvas = document.querySelector("canvas");
  
  download_link.style = "pointer-events: all";

  if (qr_code_img.getAttribute("src") == null) {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
    }, 300);
  }
}
