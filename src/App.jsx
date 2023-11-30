// All the imports

import { Route, Routes } from "react-router";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home";
import { Trailer } from "./Pages/Trailer";
function App() {
  return (
    <>
      {/* Rooutes */}
      <Routes>
        {/* Route to General Layout */}
        <Route path="/" element={<MainLayout />}>
          {/* wrapped route to home */}
          <Route index element={<Home />} />

          {/* Route to specific movie trailer */}
          <Route path=":MovieId" element={<Trailer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
