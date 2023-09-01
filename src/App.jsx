import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Agent from "./components/Agent";
import { useState } from "react";
import Error from "./components/Error";

const App = () => {
  const [fetchedData, setFetechedData] = useState();
  return (
    <BrowserRouter basename="/">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home setFetechedData={setFetechedData} />} />
        <Route path="/agent/:id" element={<Agent data={fetchedData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
