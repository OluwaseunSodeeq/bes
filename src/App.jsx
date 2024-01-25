import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage";
import WhatWedo from "./Pages/WhatWedo";
import PageNotFound from "./Pages/PageNotFound";
import ContactUs from "./Pages/ContactUs";
import OurProjects from "./Pages/OurProjects";
import OurCompany from "./Pages/OurCompany";
import { useState } from "react";

// import OurCompany from "./Pages/ContactUs";
// import OurProjects from "./Pages/OurCompany";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage setOpen={setOpen} open={open} />}
          />
          <Route
            path="/whatwedo"
            element={<WhatWedo setOpen={setOpen} open={open} />}
          />
          <Route
            path="/ourcompany"
            element={<OurCompany setOpen={setOpen} open={open} />}
          />
          <Route
            path="/ourprojects"
            element={<OurProjects setOpen={setOpen} open={open} />}
          />
          <Route
            path="/contact"
            element={<ContactUs setOpen={setOpen} open={open} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
