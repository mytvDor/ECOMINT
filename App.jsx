import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
// import MangeCard from "./component/MangeCard";
import MyCart from "./component/MyCart";
import ProdDetail from "./component/ProdDetail";
import ProdForm from "./Forms/ProdForm";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MangeCard from "./component/MangeCard";

function App() {
  // const [fileInput, setFileInput] = useState(null);

  // const handleIp = (e) => {
  //   setFileInput(e.target);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // const fileInput = document.querySelector('input[name="productImage"]');

  //   if (!fileInput || !fileInput.files[0]) {
  //     console.error("No file selected");
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append("productImage", fileInput.files[0]);

  //   try {
  //     const response = await fetch("http://localhost:9000/upload", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       console.log("Product added successfully");
  //       // Reset form data if needed
  //     } else {
  //       console.error("Failed to add product");
  //     }
  //   } catch (error) {
  //     console.error("Error is occured:", error);
  //   }
  // };
  return (
    <>
      <Header />
      {/* <Card /> */}

      {/* <Homepage></Homepage> */}

      {/* <Login /> */}
      {/* <Signup /> */}

      {/* <MangeCard /> */}

      {/* <MyCart></MyCart> */}

      {/* <ProdDetail /> */}

      {/* <ProdForm /> */}
      {/* <Footer /> */}

      {/* <form action="/upload">
        <input type="file" name="productImage" onChange={handleIp} />

        <button type="submit" onClick={handleSubmit}>
          upload
        </button>
      </form> */}
    </>
  );
}

export default App;
