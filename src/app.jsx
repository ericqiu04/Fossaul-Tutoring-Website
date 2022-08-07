import React from "react";
import Header from "./Header/header";
import AboutUs from "./Header/aboutUs";
import Founders from "./Members/founders";
import Directors from "./Members/directors";
import Tutor from "./Members/tutors";
import Footer from "./Footer/footer";
/*
  <AboutUs/>
  <Founders/>
    <Directors/>
    <Tutor/>

    */
function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Founders />
      <Directors />
      <Tutor />
      <Footer />
    </div>
  );
}

export default App;
