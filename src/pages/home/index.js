import React from "react";
import { Helmet } from "react-helmet";

import {
  About,
  Contacts,
  Education,
  Experience,
  Landing,
  Navbar,
  Projects,
  Skills,
  Testimonials,
} from "../../components";
import { headerData } from "../../data/headerData";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      {/* <Blog /> */}
      <Testimonials />
      <Contacts />
    </div>
  );
}

export default HomePage;
