import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";


function App() {
  let [mode, setmode] = useState("light");
  let [alert, setalert] = useState(null);

  let showalert = (messaage, type) => {
    setalert({
      messaage: messaage,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("dark mode has been enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enable", "success");
    }
  };

  return (
    <>
      <div className="App">
        <Navbar link="About" home="Home" title="text util" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert} />
      </div>

      {/* <BrowserRouter>
        <Routes>
          rout
          <Route path="/"element={ */}
          <TextForm heading="my heading " mode={mode}showalert={showalert}/>
           {/* }/> */}
          {/* <Route path="/about" element={<About/>}/> */}
        {/* </Routes> */}
       {/* </BrowserRouter> */}
    </>
  );
}

export default App;
