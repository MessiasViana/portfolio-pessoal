import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import ThanksContact from "../pages/thanksContact";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sucesso" element={<ThanksContact />} />
    </Routes>
  )
}

export default PageRoutes;