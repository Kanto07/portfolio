import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../main";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
