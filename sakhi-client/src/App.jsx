import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import smoothscroll from "smoothscroll-polyfill";

// Implemented pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SakhiForm from "./pages/SakhiForm";
import VolunteerForm from "./pages/VolunteerForm";
import ReportForm from "./pages/ReportForm";
import VolunteerComingSoon from "./pages/ComingSoon";
import BehindSakhi from "./pages/BehindSakhi";

function App() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="apply" element={<SakhiForm />} />
        <Route path="volunteer-apply" element={<VolunteerComingSoon />} />
        <Route path="report" element={<ReportForm />} />
        <Route path="team" element={<BehindSakhi />}/>
      </Route>
    </Routes>
  );
}

export default App;
