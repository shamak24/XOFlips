// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
// import Create from "./pages/Create";
// import ViewCoupons from "./pages/ViewCoupons";
import "./App.css";

function App() {
  const [coupons, setCoupons] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard coupons={coupons} />} />
        {/* <Route path="/create" element={<Create coupons={coupons} setCoupons={setCoupons} />} />
        <Route path="/view" element={<ViewCoupons coupons={coupons} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
