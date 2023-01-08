import QRCodeStyling from "qr-code-styling";
function App() {
  const qrCode = new QRCodeStyling({
    width: 3000,
    height: 3000,
    type: "png",
    data: "https://now.tienda/",
    image: "nowtienda.png",
    dotsOptions: {
        color: "#000",
        type: "dots"
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    },
    cornersSquareOptions: {
      type: "dot"
    },
    cornersDotOptions: {
      type: "dot"
    },
  });

  qrCode.append(document.getElementById("canvas"));
  qrCode.download({ name: "qr", extension: "svg" });
  return (
<div id="canvas"></div>
  )
}

export default App;
