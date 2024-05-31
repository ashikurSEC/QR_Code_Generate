let image       = document.getElementById("image");
let content     = document.getElementById("content");
let btnCreate   = document.getElementById("btnCreate");
let btnDownload = document.getElementById("btnDownload");
let emptyURL    = document.getElementById("emptyURL");

btnCreate.onclick = () => {
  if (content.value.trim() === "") {
    emptyURL.style.display = "block";
    btnDownload.style.display = "none";
    emptyURL.classList.add("show");
    image.src = "images/no-image.png";
  } else {
    emptyURL.style.display = "none";
    let linkQR   = "https://api.qrserver.com/v1/create-qr-code/";
    image.src    = linkQR + "?size=500x500&data=" + encodeURIComponent(content.value);
    image.onload = () => {
      btnDownload.style.display = "inline";
      btnDownload.style.backgroundColor = "teal";
    };
  }
};

btnDownload.onclick = () => {
  let link = document.createElement("a");
  link.href = image.src;
  link.download = "no-image.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
