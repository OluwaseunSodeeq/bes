// App.js
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { Toaster } from "react-hot-toast";

import Loader from "./Components/Reusable-Components/Loader";
import Footer from "./Components/Footer/Footer";
import ProjectHeroSection from "./Components/OurProjectContent/ProjectHeroSection";
import ProjectOutlet from "./Components/OurProjectContent/ProjectOutlet";
import ProjectRoutes from "./Components/ProjectRoutes";

const Homepage = lazy(() => import("./Pages/Homepage"));
const WhatWedo = lazy(() => import("./Pages/WhatWedo"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const OurProjects = lazy(() => import("./Pages/OurProjects"));
const OurCompany = lazy(() => import("./Pages/OurCompany"));
// const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <div>
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
                element={
                  <ProjectRoutes>
                    <OurProjects setOpen={setOpen} open={open} />
                  </ProjectRoutes>
                }
              >
                <Route index element={<Navigate replace to="projects" />} />
                <Route path="projects" element={<ProjectHeroSection />} />
                <Route path="projects/:id" element={<ProjectOutlet />} />
              </Route>

              <Route
                path="/contact"
                element={<ContactUs setOpen={setOpen} open={open} />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Footer />
      </div>
      <Toaster
        position="top center"
        guttter={12}
        containerStyles={{ margin: "50px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "8px 12px",
            backgroundColor: "#ffffff",
            // color: "#333437",
            color: "#67696E",
          },
        }}
      />
    </div>
  );
}

export default App;

// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Suspense, lazy, useState } from "react";
// import Loader from "./Components/Reusable-Components/Loader";
// import Footer from "./Components/Footer/Footer";
// import ProjectHeroSection from "./Components/OurProjectContent/ProjectHeroSection";
// import ProjectOutlet from "./Components/OurProjectContent/ProjectOutlet";
// import ProjectRoutes from "./Components/ProjectRoutes";

// const Homepage = lazy(() => import("./Pages/Homepage"));
// const WhatWedo = lazy(() => import("./Pages/WhatWedo"));
// const ContactUs = lazy(() => import("./Pages/ContactUs"));
// const OurProjects = lazy(() => import("./Pages/OurProjects"));
// const OurCompany = lazy(() => import("./Pages/OurCompany"));
// const PageNotFound = lazy(() => import("./Pages/PageNotFound"));

// // dist/assets/index-MRwlZ6Me.css       55.87 kB │ gzip:  13.66 kB
// // dist/assets/index-pnc2OWJn.js       446.59 kB │ gzip: 140.17 kB

// function App() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="app">
//       <BrowserRouter>
//         <Suspense fallback={<Loader />}>
//           <Routes>
//             <Route
//               path="/"
//               element={<Homepage setOpen={setOpen} open={open} />}
//             />
//             <Route
//               path="/whatwedo"
//               element={<WhatWedo setOpen={setOpen} open={open} />}
//             />
//             <Route
//               path="/ourcompany"
//               element={<OurCompany setOpen={setOpen} open={open} />}
//             />

//             <Route
//               path="/ourprojects"
//               element={
//                 <ProjectRoutes>
//                   <OurProjects setOpen={setOpen} open={open} />
//                 </ProjectRoutes>
//               }
//             >
//               <Route index element={<Navigate replace to="projects" />} />
//               <Route path="projects" element={<ProjectHeroSection />} />
//               <Route path="projects:/id" element={<ProjectOutlet />} />
//             </Route>

//             <Route
//               path="/contact"
//               element={<ContactUs setOpen={setOpen} open={open} />}
//             />

//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//       <Footer />
//     </div>
//   );
// }

// export default App;
