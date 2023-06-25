import React from "react";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./Pages/globalComponents/NavBar/NavBar";
import Footer from "./Pages/globalComponents/Footer/Footer";
function App() {
  const router = useRoutes(Routes);
  return (
    <>
      <NavBar></NavBar>
      {router}
      <Footer></Footer>
    </>
  );
}

export default App;
