import QRCodeStyling from "qr-code-styling";
import { useEffect, useState } from "react";
function App() {
  const [datos, setDatos] = useState("https://now.tienda/");
  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 3000,
      height: 3000,
      type: "png",
      data: datos,
      image: "nowtienda.png",
      dotsOptions: {
        color: "#000",
        type: "dots",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 20,
      },
      cornersSquareOptions: {
        type: "dot",
      },
      cornersDotOptions: {
        type: "dot",
      },
    });

    qrCode.append(document.getElementById("canvas"));

    for (let i = 1; i <= 10; i++) {
      setDatos(`https://demo.now.tienda/mesa${i}`);
      qrCode.download({ name: `Mesa ${i}`, extension: "svg" });
    }
  }, [datos]);

  return <div id="canvas"></div>;
}

export default App;
