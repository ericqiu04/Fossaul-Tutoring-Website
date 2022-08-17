import React from "react";

import AboutUs from "./Header/aboutUs";
import Founders from "./Members/founders";
import Directors from "./Members/directors";
import Tutor from "./Members/tutors";
import Footer from "./Footer/footer";


function Home() {
  return (
    <div>

      <AboutUs />
      <Founders />
      <Directors />
      <Tutor />
      <Footer />
    </div>
  );
}

export default Home;
