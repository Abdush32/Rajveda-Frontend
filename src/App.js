import React, { Suspense } from "react";
import "./scss/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontRoutes from "./Routes/FrontRoutes";
// import Error from "./Frontend/Error";
// import ScrollToTop from "./Services/scrollTop";
const FrontLayout = React.lazy(() => import("./Layouts"));
const Upcoming = React.lazy(() => import("./Frontend/Home/Upcoming"));
const Franchise = React.lazy(() => import("./Frontend/Franchise"));
const About = React.lazy(() => import("./Frontend/About"));



function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop> */}
        <Suspense
          fallback={
            <div className="vh-100 d-flex align-items-center justify-content-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/home" element={<FrontLayout />}>
              {FrontRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Route>
            <Route path="/" element={<Upcoming />} />  
            {/* <Route path="/franchise" element={<Franchise />} />  
            <Route path="/about" element={<About />} />   */}
          </Routes>
        </Suspense>
      {/* </ScrollToTop> */}
    </BrowserRouter>
  );
}

export default App;
