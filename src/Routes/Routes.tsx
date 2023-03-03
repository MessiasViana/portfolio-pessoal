import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import ThanksContact from "../pages/thanksContact";
import NotFound from "../pages/notFound";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/sucesso" element={ <ThanksContact /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default PageRoutes;