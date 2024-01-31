import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Loader from "./Components/Reusable-Components/Loader";
import Footer from "./Components/Footer/Footer";

const Homepage = lazy(() => import("./Pages/Homepage"));
const WhatWedo = lazy(() => import("./Pages/WhatWedo"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const OurProjects = lazy(() => import("./Pages/OurProjects"));
const OurCompany = lazy(() => import("./Pages/OurCompany"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

// dist/assets/index-MRwlZ6Me.css       55.87 kB │ gzip:  13.66 kB
// dist/assets/index-pnc2OWJn.js       446.59 kB │ gzip: 140.17 kB

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
